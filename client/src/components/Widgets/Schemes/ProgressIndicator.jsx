import React, { useState, useEffect } from "react";
import Circle from "./Circle";
import "../Schemes/style/Progress.css";

const ProgressIndicator = () => {
  const [circle] = useState(4);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((100 / (circle - 1)) * active);
  }, [circle, active]);

  const arr = [];
  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle
        className={`${i < active ? "active circle" : "circle"}`}
        key={i}
        onClick={() => setActive(i)}
        tabIndex={0}
        aria-label={`Step ${i + 1}`}
        role="button"
        aria-pressed={active === i ? "true" : "false"}
      >
        {i + 1}
      </Circle>
    );
  }

  return (
    <div>
      <h1>Progress Indicator</h1>
      <div className="container">
        <div className="content">
          <div className="progressbar">
            <div className="progress" style={{ width: width + "%" }}></div>
            {arr}
          </div>
          <div className="button">
            <button
              className="prev btn"
              disabled={active > 0 ? false : true}
              onClick={() => {
                setActive(active - 1);
              }}
            >
              Prev
            </button>
            <button
              className="next btn"
              disabled={active >= circle - 1 ? true : false}
              onClick={() => {
                setActive(active + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;

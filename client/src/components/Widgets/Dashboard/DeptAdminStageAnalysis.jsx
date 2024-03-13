import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const DeptAdminStageAnalysis = () => {
  const cardsData = [
    { heading: "Generate POP for Employees", index: 1 },
    { heading: "Report card of cwpi", index: 2 },
    { heading: "Delta Change", index: 3 },
    { heading: "CWPI Ranking Bottom 3 Performers", index: 4 },
    { heading: "Delta Change for CWPI Ranking Bottom 3 Performers", index: 5 },
    { heading: "CWPI Ranking Top 3 Performers", index: 6 },
    { heading: "Delta Change for CWPI Ranking Top 3 Performers", index: 7 },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default DeptAdminStageAnalysis;

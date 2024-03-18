import React from 'react'
import Bottom1 from './BottomP1';
import Bottom2 from './BottomP2';
import Bottom3 from './BottomP3';
import Bottom4 from './BottomP4';
import Bottom5 from './BottomP5';
import Bottom6 from './BottomP6';

export default function CwpiRankingSubdetail() {
    return (
        <div>
            <h1 className='text-center'>Delta CWPI Ranking Bottom</h1>
            <Bottom1 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom2 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom3 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom4 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom5 />
            <hr style={{ borderTop: "1px solid lightgrey" }} />
            <Bottom6 />

        </div>
    )
}

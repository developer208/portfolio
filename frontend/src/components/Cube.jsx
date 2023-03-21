import React, { useState } from 'react';
import './Cube.css';

const Cube = () => {
  const [css, setCss] = useState(false);

  return (
    <div className="cube-main">
      <div className="cube-container">
        <div className="cube-box">
          <div className="cube-card" id={css ? 'Front1' : 'Front2'}>
            FRONTEND
          </div>
          <div className="cube-card" id={css ? 'Back1' : 'Back2'}>
            BACKEND
          </div>
          <div className="cube-card" id={css ? 'Left1' : 'Left2'}>
            DEVOPS
          </div>
          <div className="cube-card" id={css ? 'Right1' : 'Right2'}>
            DBMS
          </div>
          <div className="cube-card" id={css ? 'Top1' : 'Top2'}>
            OS
          </div>
          <div className="cube-card" id={css ? 'Bottom1' : 'Bottom2'}>
            NETWORKING
          </div>
        </div>
      </div>
      <h1 className="cube-heading ">Vedang's Portfolio</h1>
      <button className="button1" onClick={() => setCss(!css)}>
        Open
      </button>
    </div>
  );
};

export default Cube;

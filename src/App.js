import { useState } from "react";

import dataStats from "./utils/data.json";

import { ReactComponent as EllipsisSVG } from './assets/icon-ellipsis.svg';

function App() {
  const times = ["daily", "weekly", "monthly"]
  const [timeStats, setTimeStats] = useState(times[1]);

  return (
    <div className="app">
      <h1 className="sro">
        Time tracking dashboard || React App 18.2 || ThiCode
      </h1>
      <div className="cw">

        <section className="card-header">
          <div className="user">
            <img src="./assets/image-jeremy.png" alt="profile" width="78" height="78" />
            <div>
              <span>Report for</span>
              <h2 className="username">Jeremy Robson</h2>
            </div>
          </div>
          <div className="switch-time">
            {
              times.map((item) => <button key={item}
                className={`time-btn up1 ${timeStats === item ? "active" : "inactive"}`} onClick={() => setTimeStats(item)} >{item}</button>)
            }

          </div>
        </section>
        <div className="body">
          {
            dataStats.map((item, k) => <div key={k} className={`card-stats ${item.title.toLowerCase()}`}
            >
              <div className="in-card">
                <div className="header-card">

                  <h3>
                    {item.title}
                  </h3>
                  <div className="ellipsis">
                    <EllipsisSVG />
                  </div>
                </div>
                <div className="body-card">

                  <div className="hours">
                    {item.timeframes[timeStats].current}hrs
                  </div>
                  <div className="last">
                    <span className="up1">Last</span> <span className="up1">{timeStats}</span> {item.timeframes[timeStats].current}hrs
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

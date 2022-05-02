import React from "react";
import { useState } from "react";
import datas from "../Data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>React Accordion</h1>
        </div>
        <div className="accordion">
          {datas.map((data, index) => (
            <div className="Data">
              <div className="question" onClick={() => toggle(index)}>
                <h2>{data.question}</h2>
                <span>{selected == index ? "-" : "+"}</span>
              </div>
              <div className={selected == index ? "answer show" : "answer"}>
                {data.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <p>Made By Riya Bhandari | GitHub : RiyaBhandari-2811</p>
      </div>
    </>
  );
};

export default Accordion;

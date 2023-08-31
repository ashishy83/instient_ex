import React from "react";
import logo from "../Assests/logo.svg";
import frame10 from "../Assests/frame10.svg";
import frame18 from "../Assests/frame18.svg";

const Test = () => {
  return (
    <div className="test">
      <div className="left-column">
        <div>
          <img src={logo} alt="Z" className="z1" />
        </div>
        <div className="frames">
          <img src={frame18} alt="" className="frame18" />
          <img src={frame10} alt="" className="frame10" />
        </div>
      </div>
      <div className="middle-column">
        <div className="message">
          <div className="section-title">Message</div>
          <div className="msg-below">
            <span className="span1">Enter message below</span>
          </div>
        </div>
        <input
          type="text"
          className="msgBOx"
          style={{ width: "806px", height: "679px" ,border:'1px solid #ababab'}}
        />
      </div>
      <div className="right-column">
        <button className="btn-send">
          <span className="btn-text">SEND</span>
        </button>
        <button className="btn-cancel">
          <span className="btn-text-cancel">CANCEL</span>
        </button>
      </div>
    </div>
  );
};

export default Test;

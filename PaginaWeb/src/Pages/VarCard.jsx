import React from "react";


import "./VarCard.css";
export default function Card({
  constentHead,
  varIcon,
  varName,
  reads,
  varEval,
  color
}) {
  return (
    <div style={{ backgroundColor: color }} className="var_card">

      <div className="var_card_body">
        <div className="var_card_body_icon">
          {varIcon}
        </div>
        <div className="var_card_body_head">
          <h1 className="var_card_body_text">{constentHead}</h1>
        </div>
      </div>
      <div className="var_card_footer">
        <div className="var_card_footer_first">
          <div>
            <p>{varName}</p>
          </div>
        </div>
        <div className="var_card_footer_second">
          <div>
            <p>{reads}</p>
          </div>
          <div className="label_var_eval">
            <p>{varEval}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

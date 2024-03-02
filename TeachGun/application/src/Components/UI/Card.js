import React from "react";
import "./Card.css";
const Card = (Props) => {
  const classes = "card " + Props.className;

  return <div className={classes}>{Props.children}</div>;
};

export default Card;

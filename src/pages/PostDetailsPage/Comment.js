import React, { useState } from "react";
import { CommentContainer } from "./styles";

export const Comment = props => {

  return (
    <CommentContainer>
      <div className="header">
        <p>{props.Username}</p>
      </div>
      <div className="main">{props.Text}</div>
      <div className="footer">
        <p>
          <button >+</button> {props.Votes}{" "}
          <button >-</button>
        </p>
      </div>
    </CommentContainer>
  );
};
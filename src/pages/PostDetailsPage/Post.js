import React, { useState } from "react";
import styled from "styled-components";
import { PostContainer } from "./styles"


export const Post = props => {

  const onClickUpvote = () => {
  };
  const onClickDownvote = () => {
  };

  return (
    <PostContainer>
      <div className="header">
        <p>{props.Title}</p>
      </div>
      <div className="main">{props.Text}</div>
      <div className="footer">
        <p>
          <button onClick={onClickUpvote}>+</button> {props.Votes}{" "}
          <button onClick={onClickDownvote}>-</button>
        </p>
        <p>{props.Comments} comentários</p>
      </div>
    </PostContainer>
  );
};

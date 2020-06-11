import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PostContainer } from "./styles"

export const Post = props => {
  const history = useHistory()

  const onClickUpvote = () => {
  };
  const onClickDownvote = () => {
  };

  const goToDetailsPage = () => {
    history.push(`/feed/post/${props.Id}`)
  }

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
        <button onClick={goToDetailsPage}>Detalhes</button>
        <p>{props.Comments} comentários</p>
      </div>
    </PostContainer>
  );
};

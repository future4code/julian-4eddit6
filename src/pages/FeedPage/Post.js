import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PostContainer } from "./styles"
import axios from "axios";

export const Post = props => {
  const history = useHistory()

  const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.Id}/vote`

  const upVote = () => {
    const body = {direction: 1}

    axios.put(baseUrl, body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
  };
  
  const downVote = () => {
    const body = {direction: -1}

    axios.put(baseUrl, body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
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
          <button onClick={upVote}>+</button> {props.Votes}{" "}
          <button onClick={downVote}>-</button>
        </p>
        <button onClick={goToDetailsPage}>Detalhes</button>
        <p>{props.Comments} comentários</p>
      </div>
    </PostContainer>
  );
};

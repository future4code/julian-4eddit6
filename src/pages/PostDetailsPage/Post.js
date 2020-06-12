import React, { useState } from "react";
import axios from "axios";
import { PostContainer } from "./styles"


export const Post = props => {
  const [voted, setVoted] = useState(false)

  const getPostDetail = props.GetPostDetail

  const vote = body => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.Id}/vote`, body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      getPostDetail()
    })
  }

  const upVote = () => {
    if (voted === false) {
      const body = {direction: 1}

      vote(body)

      setVoted(true)
    } else {
      const body = {direction: 0}

      vote(body)

      setVoted(false)
    }
  };
  
  const downVote = () => {
    if (voted === false) {
      const body = {direction: 1}

      vote(body)

      setVoted(true)
    } else {
      const body = {direction: 0}

      vote(body)

      setVoted(false)
    }
  };

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
        <p>{props.Comments} comentários</p>
      </div>
    </PostContainer>
  );
};

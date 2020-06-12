import React, { useState } from "react";
import { CommentContainer } from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Comment = props => {
  const [voted, setVoted] = useState(false)

  const params = useParams()

  const getPostDetails = props.GetPostDetails

  const voteComment = body => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${props.Id}/vote`, body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      getPostDetails()
    })
  }

  const upVote = () => {
    if (voted === false) {
      const body = {direction: 1}

      voteComment(body)

      setVoted(true)
    } else {
      const body = {direction: 0}

      voteComment(body)

      setVoted(false)
    }
  };
  
  const downVote = () => {
    if (voted === false) {
      const body = {direction: 1}

      voteComment(body)

      setVoted(true)
    } else {
      const body = {direction: 0}

      voteComment(body)

      setVoted(false)
    }
  };

  return (
    <CommentContainer>
      <div className="header">
        <p>{props.Username}</p>
      </div>
      <div className="main">{props.Text}</div>
      <div className="footer">
        <p>
          <button onClick={upVote}>+</button> {props.Votes}{" "}
          <button onClick={downVote}>-</button>
        </p>
      </div>
    </CommentContainer>
  );
};
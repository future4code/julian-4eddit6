import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PostContainer } from "./styles"
import axios from "axios";

export const Post = props => {
  const [voted, setVoted] = useState(false)
  const getPosts = props.GetPosts

  const history = useHistory()

  const vote = body => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.Id}/vote`, body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      getPosts()
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

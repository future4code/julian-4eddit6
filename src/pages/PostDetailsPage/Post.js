import React, { useState } from "react";
import axios from "axios";
import { PostContainer } from "./styles";
import upArrowWhite from "../../img/flechabrancacima.png";
import upArrowBlack from "../../img/flechapretacima.png";
import downArrowWhite from "../../img/flechabrancabaixo.png";
import downArrowBlack from "../../img/flechapretabaixo.png";


export const Post = props => {
  const [voted, setVoted] = useState(false)
  const [upVoted, setUpVoted] = useState(false)
  const [downVoted, setDownVoted] = useState(false)
  
  const upVoteIcon = upVoted ? upArrowBlack : upArrowWhite
  const downVoteIcon = downVoted ? downArrowBlack : downArrowWhite

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
      setUpVoted(true)
    } else {
      const body = {direction: 0}

      vote(body)

      setVoted(false)
      setUpVoted(false)
    }
  };
  
  const downVote = () => {
    if (voted === false) {
      const body = {direction: -1}

      vote(body)

      setVoted(true)
      setDownVoted(true)
    } else {
      const body = {direction: 0}

      vote(body)

      setVoted(false)
      setDownVoted(false)
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
          <img src={upVoteIcon} onClick={upVote}/>
            {" "}{props.Votes}{" "}
          <img src={downVoteIcon} onClick={downVote}/>
        </p>
        <p>{props.Comments} comentários</p>
      </div>
    </PostContainer>
  );
};

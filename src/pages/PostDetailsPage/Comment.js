import React, { useState } from "react";
import { CommentContainer } from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import upArrowWhite from "../../img/flechabrancacima.png";
import upArrowBlack from "../../img/flechapretacima.png";
import downArrowWhite from "../../img/flechabrancabaixo.png";
import downArrowBlack from "../../img/flechapretabaixo.png";

export const Comment = props => {
  const [voted, setVoted] = useState(false)
  const [upVoted, setUpVoted] = useState(false)
  const [downVoted, setDownVoted] = useState(false)
  
  const upVoteIcon = upVoted ? upArrowBlack : upArrowWhite
  const downVoteIcon = downVoted ? downArrowBlack : downArrowWhite

  const params = useParams()

  const getPostDetail = props.GetPostDetail

  const voteComment = body => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment/${props.Id}/vote`, body, {
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

      voteComment(body)

      setVoted(true)
      setUpVoted(true)
    } else {
      const body = {direction: 0}

      voteComment(body)

      setVoted(false)
      setUpVoted(false)
    }
  };
  
  const downVote = () => {
    if (voted === false) {
      const body = {direction: -1}

      voteComment(body)

      setVoted(true)
      setDownVoted(true)
    } else {
      const body = {direction: 0}

      voteComment(body)

      setVoted(false)
      setDownVoted(false)
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
          <img src={upVoteIcon} onClick={upVote}/>
            {" "}{props.Votes}{" "}
          <img src={downVoteIcon} onClick={downVote}/>
        </p>
      </div>
    </CommentContainer>
  );
};
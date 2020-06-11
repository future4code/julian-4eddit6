import React, { useState, useEffect } from "react";

import { Comment } from "./Comment";
import { Post } from "./Post";
import { PostDetailsContainer } from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostDetailsPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [postDetails, setPostDetails] = useState([]);
  const [comments, setComments] = useState([])
  const params = useParams()

  const getPostDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      setPostDetails(response.data.post)
      setComments(response.data.post.comments)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getPostDetail()
    setComments(postDetails.comments)
  }, [])

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  console.log(comments)

  return (
    <PostDetailsContainer>
      <Post
        Title={postDetails.title}
        Text={postDetails.text}
        Votes={postDetails.votesCount}
        Comments={postDetails.commentsCount}
      />
      <textarea
        placeholder="Escreva seu comentário"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button >Postar</button>
      {/* {comments.map(comment => {
        return (
          <Comment
            Username={comment.username}
            Text={comment.text}
            Votes={comment.votesCount}
          />
        );
      })} */}
    </PostDetailsContainer>
  );
};

export default PostDetailsPage;

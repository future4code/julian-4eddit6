import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { Post } from "./Post";
import { PostDetailsContainer } from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import {useProtectedPage} from '../../hooks/useProtectedPage'

const PostDetailsPage = () => {
  const [form, onChangeInput] = useForm({
    text: ""
  })
  const [postDetails, setPostDetails] = useState([]);
  const params = useParams()

  useProtectedPage()

  const getPostDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}`, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      setPostDetails(response.data.post)
    })
  }

  const onSubmitComment = event => {
    event.preventDefault()

    const body = {
      text: form.text
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.postId}/comment`, body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => console.log(response)).catch(error => console.log(error))
  }

  useEffect(() => {
    getPostDetail()
  }, [])

  return (
    <PostDetailsContainer>
      <Post
        Title={postDetails.title}
        Text={postDetails.text}
        Votes={postDetails.votesCount}
        Comments={postDetails.commentsCount}
        Id={postDetails.id}
        GetPostDetail={getPostDetail}
      />
      <form onSubmit={onSubmitComment}>
        <textarea
          name="text"
          placeholder="Escreva seu comentário"
          value={form.text}
          onChange={onChangeInput}
        />
        <button type="submit">Enviar</button>
      </form>
      
      {postDetails.comments === undefined ? 
          <p>Carregando...</p> :
          postDetails.comments.map(comment => {
          return (
            <Comment
              Username={comment.username}
              Text={comment.text}
              Votes={comment.votesCount}
              Id={comment.id}
              GetPostDetail={getPostDetail}
            />
          );
        })}
    </PostDetailsContainer>
  );
};

export default PostDetailsPage;

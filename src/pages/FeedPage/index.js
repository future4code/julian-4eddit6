import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post";
import { FeedContainer, PostForm } from "./styles";
import { useForm } from '../../hooks/useForm';
import {useProtectedPage} from '../../hooks/useProtectedPage'

const FeedPage = () => {
  const [form, onChangeInput] = useForm({
    title: "",
    text: ""
  })
  const [posts, setPosts] = useState([]);

  useProtectedPage()

  const getPosts = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => {
      setPosts(response.data.posts)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getPosts()
  })

  const onSubmitPost = event => {
    event.preventDefault()
    const body = {
      text: form.text,
      title: form.title
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(response => console.log(response)).catch(error => console.log(error))
  }

  return (
    <div>
      <PostForm onSubmit={onSubmitPost}>
        <input
          name="title"
          placeholder="Título"
          value={form.title} 
          onChange={onChangeInput}
        />
        <textarea
          name="text"
          placeholder="Escreva seu post"
          value={form.text}
          onChange={onChangeInput}
        />
        <button type="submit">Postar</button>
      </PostForm>
      <FeedContainer>
      {posts.map(post => {
        return (
          <Post
            Title={post.title}
            Text={post.text}
            Votes={post.votesCount}
            Comments={post.commentsCount}
            Id={post.id}
          />
        );
      })}
      </FeedContainer>
    </div>
  );
};

export default FeedPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "./Post";
import { FeedPageContainer } from "./styles";

const FeedPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);

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

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  return (
    <FeedPageContainer>
      <textarea
        placeholder="Escreva seu post"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button >Postar</button>
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
    </FeedPageContainer>
  );
};

export default FeedPage;

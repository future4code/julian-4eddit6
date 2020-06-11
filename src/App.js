import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import FeedPage from "./pages/FeedPage";
import PostDetailsPage from "./pages/PostDetailsPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/feed/post/:postId">
            <PostDetailsPage />
          </Route>
          <Route path="/feed">
            <FeedPage />
          </Route>
          <Route path="/cadastro">
            <SignUpPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;

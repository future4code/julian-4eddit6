import styled from "styled-components";

export const PostDetailsContainer = styled.div`
  display: grid;
  gap: 16px;
  justify-items: center;
`;

export const PostContainer = styled.div`
  border: 1px solid black;
  height: 350px;
  width: 400px;

  .header {
    height: 25%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    height: 50%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    padding: 8px;
  }

  .footer {
    height: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const CommentContainer = styled.div`
  border: 1px solid black;
  height: 350px;
  width: 400px;

  .header {
    height: 25%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main {
    height: 50%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    padding: 8px;
  }

  .footer {
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

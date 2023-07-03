import TextField from "@mui/material/TextField";
import styled from "styled-components";
// import TextField from "@mui/material/TextField";

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: rgba(104, 57, 139, 1);
  font-size: 30px;
  font-weight: 500;
  border-bottom: 1px solid rgba(104, 57, 139, 0.5);
`;

export const ChatContainer = styled.div`
  overflow: scroll;
  background-color: rgba(104, 57, 139, 0.2);
  width: 90%;
  height: 90%;
  border-radius: 8px;
  display: flex;
  /* margin: 0px; */
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
`;

export const MessageContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 90%;
  height: 4rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  & > input {
    background-color: white;
    padding: 0px;
    border-radius: 8px;
    width: 100%;
    :focus {
      outline-color: purple;
    }
  }
`;

export const MessageBallon = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  /* height: 2rem; */
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  padding: 0.4rem;
`;

export const Author = styled.div`
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;
`;

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
  background-color: rgba(104, 57, 139, 0.2);
  width: 90%;
  height: 90%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  /* opacity: 0.3; */
  color: rgba(0, 0, 0, 1);
`;

export const MessageContainer = styled.div`
  display: flex;
  border-radius: 8px;
  width: 90%;
  height: 4rem;
  margin-bottom: 2rem;
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

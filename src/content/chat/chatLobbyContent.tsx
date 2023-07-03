import { AuthContext } from "@/context/auth";
import { Button } from "@mui/material";
import Router from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  MessageContainer,
  Title,
  MessageBallon,
  Author,
} from "./styles";
import io from "socket.io-client";

type historicMessage = {
  message: string;
  author: string;
};

const mockMessage: historicMessage[] = [
  {
    message: "oi",
    author: "bruno",
  },
  {
    message: "oi",
    author: "cereza",
  },
  {
    message: "tudo bem?",
    author: "bruno",
  },
  {
    message: "indo e ai?",
    author: "cereza",
  },
];

export default function ChatLobbyContent() {
  const { user } = useContext(AuthContext);

  const [messageToSend, setMessageToSend] = useState("");
  const [messageReceived, setMessageToSendMessageReceived] = useState("");

  // socket.on("connect", function (data) {
  const socket = io.connect("http://localhost:8899/", {
    path: "/socket.io",
    query: {
      name: user,
    },
  });

  // });
  // socket.imit("clientSend", "aeee");

  // recebe mensagem do server
  socket.on("serverSend", (arg: historicMessage) => {
    console.log(arg, "VINDO DO BACK"); // world
    setMessageToSendMessageReceived(arg.message);
  });

  useEffect(() => {
    isLogged;
  }, []);

  // useEffect(isLogged, []);

  function sendMessage() {
    //envia mensagem pro back
    socket.emit("hello", messageToSend);
    setMessageToSend("");
  }

  function isLogged() {
    const { "chat-token": token } = parseCookies();
    if (!token) {
      Router.push("/");
    }
  }

  return (
    <>
      <Title> Olá, {user} </Title>
      <ChatContainer>
        {mockMessage.map((element) => (
          <>
            <MessageBallon>
              <Author>{element.author}:</Author>
              {element.message}
            </MessageBallon>
          </>
        ))}
      </ChatContainer>
      <MessageContainer>
        <input
          value={messageToSend}
          type="text"
          onChange={(e) => setMessageToSend(e.target.value)}
        ></input>
        <Button
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "1rem",
            margin: "1%",
          }}
          size="medium"
          variant="outlined"
          onClick={sendMessage}
          disabled={!messageToSend}
        >
          Enviar
        </Button>
      </MessageContainer>
    </>
  );
}

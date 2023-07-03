import { AuthContext } from "@/context/auth";
import { Button } from "@mui/material";
import Router from "next/router";
import { parseCookies } from "nookies";
import { useContext, useEffect, useRef, useState } from "react";
import { ChatContainer, MessageContainer, Title } from "./styles";
import io from "socket.io-client";

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export default function ChatLobbyContent({ socket }) {
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);

  // const socket = io.connect("http://localhost:8899/", {
  //   path: "/socket.io",
  //   query: {
  //     name: user,
  //   },
  // });

  // socket.on("connect", function (data) {
  //   socket.emit("join", JSON.stringify({}));
  // });

  //recebe mensagem do server
  // socket.on("serverSend", (arg) => {
  //   console.log(arg); // world
  // });

  useEffect(() => {
    isLogged;
  }, []);

  // useEffect(isLogged, []);

  function sendMessage() {
    //envia mensagem pro back
    socket.imit("clientSend", message);
    console.log(message);
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
        CHAT HERE
        <MessageContainer>
          <input
            value={message}
            type="text"
            onChange={(e) => setMessage(e.target.value)}
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
          >
            Enviar
          </Button>
        </MessageContainer>
      </ChatContainer>
    </>
  );
}

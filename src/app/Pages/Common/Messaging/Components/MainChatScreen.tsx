import React from "react";
import { useParams } from "react-router-dom";

type ChatDetail = {
  chatId: string;
};

function MainChatScreen() {
  let { chatId } = useParams<ChatDetail>();
  return (
    <div>
      Main Chat Screen With <h1>{chatId}</h1>
    </div>
  );
}

export default MainChatScreen;

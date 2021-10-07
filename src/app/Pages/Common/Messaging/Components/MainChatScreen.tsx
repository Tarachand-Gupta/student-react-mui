import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentConversation } from "../../../../Store/App/messaging/selectors";

type ChatDetail = {
  chatId: string;
};

function MainChatScreen() {
  let { chatId } = useParams<ChatDetail>();
  const currentConversation = useSelector(selectCurrentConversation)
  console.log(currentConversation);
  
  return (
    <div>
      Main Chat Screen With <h1>{chatId}</h1>
    </div>
  );
}

export default MainChatScreen;

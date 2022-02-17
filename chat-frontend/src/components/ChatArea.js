import React from "react";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

function ChatArea({ client }) {
  return (
    <div className="chat-area">
      <h1>Messages</h1>
      <MessageList />
      <ChatInput client={client} />
    </div>
  );
}

export default ChatArea;

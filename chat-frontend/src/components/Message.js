import React from "react";
import MessageContent from "./MessageContent";
import User from "./User";

function Message({ user, message }) {
  return (
    <div className="message-box">
      <User user={user} />
      <MessageContent message={message} />
    </div>
  );
}

export default Message;

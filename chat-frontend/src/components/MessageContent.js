import React from "react";

function MessageContent({ message }) {
  return (
    <span className="message">
      <span className="text">{message.text}</span>
      <span className="time">{message.time}</span>
    </span>
  );
}

export default MessageContent;

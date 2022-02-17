import React, { useRef, useState } from "react";
import { sendMessage, sendTyping } from "../app/stompClientOperations";

function ChatInput({ client }) {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const messageChanged = (message) => {
    setMessage(message);
    sendTyping(client.current);
  };
  const sendMsg = () => {
    let msg = message.trim();
    if (msg === "") return;
    sendMessage(client.current, msg);
    setMessage("");
    inputRef.current.focus();
  };
  const enterPress = (e) => {
    if (e.key === "Enter") sendMsg();
  };
  return (
    <div className="input-area">
      <input
        type="text"
        value={message}
        onChange={(e) => messageChanged(e.target.value)}
        onKeyPress={enterPress}
        autoFocus={true}
        ref={inputRef}
      />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}

export default ChatInput;

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectMessageList } from "../app/slices/messageSlice";
import Message from "./Message";

function MessageList() {
  const messages = useSelector(selectMessageList);
  const scroll = useRef();
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div>No Messages</div>
      ) : (
        messages.map(({ message, user }) => (
          <Message key={message.id} user={user} message={message} />
        ))
      )}
      <div ref={scroll}> </div>
    </div>
  );
}

export default MessageList;

import ChatArea from "./ChatArea";
import UserList from "./UserList";

function Chat({ client }) {
  return (
    <div className="chat">
      <ChatArea client={client} />
      <UserList />
    </div>
  );
}

export default Chat;

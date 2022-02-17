import { useDispatch, useSelector } from "react-redux";
import { isConnected } from "./app/slices/sessionSlice";
import Chat from "./components/Chat";
import Connect from "./components/Connect";
import SockJsClient from "react-stomp";
import { useRef } from "react";
import { setMessages, selectMessageList } from "./app/slices/messageSlice";
import { setUsers } from "./app/slices/userSlice";

function App() {
  const connected = useSelector(isConnected);

  const clientRef = useRef(null);

  const dispatch = useDispatch();
  const messageList = useSelector(selectMessageList);

  const onMessageReceive = ({ payload, user, eventType }) => {
    if ("LOGIN" === eventType) {
      dispatch(setUsers(payload));
    } else if ("MESSAGE" === eventType) {
      console.log(`${user.username} said: `);
      console.log(payload);
      dispatch(setMessages([...messageList, { user: user, message: payload }]));
    } else if ("TYPING" === eventType) {
      console.log(
        `${payload.map((user) => user.username).join(",")} is typing`
      );
    }
  };

  return (
    <div className="App">
      <SockJsClient
        url="http://localhost:8080/chatBot"
        topics={["/topics/users", "/topics/chat"]}
        onMessage={(msg) => {
          console.log("message received:");
          console.log(msg);
          onMessageReceive(msg);
        }}
        onConnect={() => {
          console.log("connected");
        }}
        onDisconnect={() => {
          console.log("disconnected");
        }}
        ref={clientRef}
      />
      {!connected && <Connect client={clientRef} />}
      {connected && <Chat client={clientRef} />}
    </div>
  );
}

export default App;

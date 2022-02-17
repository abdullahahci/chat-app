export const register = (client) => {
  client.sendMessage(
    "/chat/register",
    JSON.stringify({
      eventType: "LOGIN",
      payload: window.localStorage.getItem("username"),
      userId: window.localStorage.getItem("userId"),
    })
  );
};
export const sendTyping = (client) => {
  client.sendMessage(
    "/chat/channel",
    JSON.stringify({
      eventType: "TYPING",
      userId: window.localStorage.getItem("userId"),
    })
  );
};
export const sendMessage = (client, payload) => {
  client.sendMessage(
    "/chat/channel",
    JSON.stringify({
      eventType: "MESSAGE",
      userId: window.localStorage.getItem("userId"),
      payload: payload,
    })
  );
};

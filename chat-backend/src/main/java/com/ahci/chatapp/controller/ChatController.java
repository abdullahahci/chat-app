package com.ahci.chatapp.controller;

import com.ahci.chatapp.model.*;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import static com.ahci.chatapp.model.Utility.isEmpty;

@Controller
public class ChatController {
  private static final HashMap<String, UserInfo> userList = new HashMap<>();
  private static final List<UserInfo> connectedUsers = new ArrayList<>();
  private static final List<UserInfo> typingUsers = new ArrayList<>();

  @MessageMapping("/register")
  @SendTo({"/topics/users"})
  public EventResponse registerUser(Event event) {
    String username = (String) event.getPayload();
    String userId = event.getUserId();
    if (EventType.LOGIN.equals(event.getEventType()) && !isEmpty(userId)) {
      if (userList.containsKey(userId)) {
        UserInfo user = userList.get(userId);
        user.setOnline(true);
        if (!connectedUsers.contains(user)) {
          connectedUsers.add(user);
        }
      } else {
        UserInfo user = new UserInfo(userId, username, true);
        userList.put(userId, user);
        connectedUsers.add(user);
      }
    } else if (EventType.LOGOUT.equals(event.getEventType())) {
      UserInfo user = userList.get(userId);
      user.setOnline(false);
      connectedUsers.remove(user);
    }
    return EventResponse.builder().payload(userList.values()).eventType(event.getEventType()).build();
  }

  @MessageMapping("/channel")
  @SendTo("/topics/chat")
  public EventResponse chat(Event event) {
    String userId = event.getUserId();
    UserInfo user = userList.get(userId);
    if (EventType.TYPING.equals(event.getEventType())) {
      if (!typingUsers.contains(user)) {
        typingUsers.add(user);
      }
      return EventResponse.builder().eventType(EventType.TYPING).payload(typingUsers).build();

    } else if (EventType.MESSAGE.equals(event.getEventType())) {
      if (typingUsers.contains(user)) {
        typingUsers.remove(user);
      }
      String time = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm"));
      String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
      String messageText = HtmlUtils.htmlEscape((String) event.getPayload(), "ISO 8859-9");
      Message msg = Message.builder()
          .id(UUID.randomUUID().toString())
          .text(messageText)
          .date(date)
          .time(time).build();
      return EventResponse.builder()
          .eventType(EventType.MESSAGE)
          .user(user)
          .payload(msg)
          .build();
    }
    return null;
  }
}

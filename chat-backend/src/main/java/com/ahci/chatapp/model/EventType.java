package com.ahci.chatapp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@NoArgsConstructor
public enum EventType implements Serializable {
  LOGIN("LOGIN"),
  TYPING("TYPING"),
  MESSAGE("MESSAGE"),
  LOGOUT("LOGOUT");

  private String type;

  EventType(String type) {
    this.type = type;
  }
}

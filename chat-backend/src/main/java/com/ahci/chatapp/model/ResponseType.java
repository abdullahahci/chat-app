package com.ahci.chatapp.model;

public enum ResponseType {
  TYPING("TYPING"),
  MESSAGE("MESSAGE");

  private String type;

  ResponseType(String type) {
    this.type = type;
  }
}

package com.test.demo.Payload;

public class resLogin {
    private String message;
    private Boolean state;

    public resLogin() {
        super();
    }

    public resLogin(String message, Boolean state) {
        this.message = message;
        this.state = state;

    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

}

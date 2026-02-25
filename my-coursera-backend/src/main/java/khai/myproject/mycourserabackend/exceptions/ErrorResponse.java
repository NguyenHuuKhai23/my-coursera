package khai.myproject.mycourserabackend.exceptions;

public class ErrorResponse extends RuntimeException {
    public ErrorResponse(String message) {
        super(message);
    }
}

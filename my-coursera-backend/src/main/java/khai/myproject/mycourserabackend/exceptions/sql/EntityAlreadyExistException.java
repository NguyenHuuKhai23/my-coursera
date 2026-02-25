package khai.myproject.mycourserabackend.exceptions.sql;

public class EntityAlreadyExistException extends RuntimeException {
    public EntityAlreadyExistException(String message) {
        super(message);
    }

    public EntityAlreadyExistException(Class<?> className) {
        super(className.getSimpleName() + " already exists.");
    }
}

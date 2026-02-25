package khai.myproject.mycourserabackend.utils;

public class FieldNameUtils {
    private FieldNameUtils() {
    }

    public static String joinFields(String... fields) {
        return String.join(".", fields);
    }
}

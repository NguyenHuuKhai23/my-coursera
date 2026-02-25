package khai.myproject.mycourserabackend.exceptions.sql;

public class ExamNotFoundException extends RuntimeException {
    public ExamNotFoundException(Long examId, Long scheduleId, Long studentId) {
        super("Exam not found for examId=" + examId + ", scheduleId=" + scheduleId + ", studentId=" + studentId);
    }
}
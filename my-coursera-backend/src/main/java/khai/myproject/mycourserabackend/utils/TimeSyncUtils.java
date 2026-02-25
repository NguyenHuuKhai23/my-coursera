package khai.myproject.mycourserabackend.utils;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class TimeSyncUtils {
    
    private static final ZoneId SERVER_TIMEZONE = ZoneId.of("UTC");
    
    /**
     * Lấy thời gian hiện tại của server theo timezone đã cấu hình
     */
    public static Timestamp getCurrentServerTime() {
        return Timestamp.from(Instant.now());
    }
    
    /**
     * Lấy thời gian server theo timezone cụ thể
     */
    public static ZonedDateTime getServerTimeInTimezone() {
        return ZonedDateTime.now(SERVER_TIMEZONE);
    }
    
    /**
     * Chuyển đổi UTC time sang server timezone
     */
    public static ZonedDateTime convertUtcToServerTimezone(Instant utcTime) {
        return utcTime.atZone(SERVER_TIMEZONE);
    }
    
    /**
     * Chuyển đổi server time sang UTC
     */
    public static Instant convertServerTimeToUtc(ZonedDateTime serverTime) {
        return serverTime.toInstant();
    }
    
    /**
     * Format thời gian server theo định dạng chuẩn
     */
    public static String formatServerTime(Timestamp timestamp) {
        ZonedDateTime serverTime = timestamp.toInstant().atZone(SERVER_TIMEZONE);
        return serverTime.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }
    
    /**
     * Kiểm tra xem thời gian có trong khoảng thời gian exam không
     */
    public static boolean isTimeInExamWindow(Timestamp startTime, Timestamp endTime) {
        Timestamp now = getCurrentServerTime();
        return now.after(startTime) && now.before(endTime);
    }
    
    /**
     * Tính toán thời gian còn lại của exam
     */
    public static long getRemainingSeconds(Timestamp endTime) {
        Timestamp now = getCurrentServerTime();
        long remaining = (endTime.getTime() - now.getTime()) / 1000;
        return Math.max(0, remaining);
    }
}

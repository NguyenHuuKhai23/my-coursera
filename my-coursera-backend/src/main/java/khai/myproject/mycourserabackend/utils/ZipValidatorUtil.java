package khai.myproject.mycourserabackend.utils;

import org.springframework.core.io.ClassPathResource;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class ZipValidatorUtil {

    private static final long MAX_SIZE = 100 * 1024 * 1024;

    /**
     * Validate kích thước file zip
     */
    public static boolean validateSize(byte[] fileBytes) {
        return (fileBytes.length > MAX_SIZE);
    }

    /**
     * Validate cấu trúc file zip so với danh sách allowed
     */
    public static boolean validateStructure(byte[] fileBytes, List<Set<String>> allowedStructures) throws IOException {
        Set<String> entryNames = extractStructure(fileBytes);

        for (Set<String> allowed : allowedStructures) {
            if (matchesStructure(entryNames, allowed)) {
                return true;
            }
        }
        return false;
    }

    private static boolean matchesStructure(Set<String> submitted, Set<String> allowed) {
        // strict (so khớp 100%)
        // return submitted.equals(allowed);

        // lenient (chỉ cần chứa hết file bắt buộc trong allowed)
        return submitted.containsAll(allowed);
    }

    public static Set<String> extractStructure(byte[] fileBytes) throws IOException {
        Set<String> entryNames = new HashSet<>();
        try (ZipInputStream zis = new ZipInputStream(new ByteArrayInputStream(fileBytes))) {
            ZipEntry entry;
            while ((entry = zis.getNextEntry()) != null) {
                if (!entry.isDirectory()) {
                    entryNames.add(normalizePath(entry.getName()));
                }
            }
        }
        return entryNames;
    }

    /**
     * Load cấu trúc mẫu từ resources (file zip chuẩn)
     */
    public static Set<String> loadZipTemplate(String resourcePath) throws IOException {
        ClassPathResource resource = new ClassPathResource(resourcePath);
        try (InputStream is = resource.getInputStream();
             ZipInputStream zis = new ZipInputStream(is)) {

            Set<String> entryNames = new HashSet<>();
            ZipEntry entry;
            while ((entry = zis.getNextEntry()) != null) {
                if (!entry.isDirectory()) {
                    entryNames.add(normalizePath(entry.getName()));
                }
            }
            return entryNames;
        }
    }

    /**
     * Chuẩn hóa path để so sánh công bằng
     */
    private static String normalizePath(String path) {
        if (path == null) return "";
        String norm = path.replace("\\", "/").trim();
        // Chỉ lấy tên file, bỏ hết folder phía trước
        norm = norm.substring(norm.lastIndexOf("/") + 1);
        return norm.toLowerCase();
    }

}

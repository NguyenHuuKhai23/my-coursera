package khai.myproject.mycourserabackend.utils.filefolder;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FileObject {
    private String id;
    private String name;
    private String parentId;
    private byte[] content;
    private String mimeType;

    public static FileObject fromPath(String path) throws IOException {
        Path filePath = Path.of(path);
        String fileName = filePath.getFileName().toString();
        String contentType = Files.probeContentType(filePath);
        byte[] content = Files.readAllBytes(filePath);
        return FileObject.builder()
                .name(fileName)
                .content(content)
                .mimeType(contentType)
                .build();
    }

    public static FileObject fromMultipartFile(MultipartFile multipartFile) throws IOException {
        String fileName = multipartFile.getOriginalFilename();
        String contentType = multipartFile.getContentType();
        byte[] content = multipartFile.getBytes();
        return FileObject.builder()
                .name(fileName)
                .mimeType(contentType)
                .content(content)
                .build();
    }

    public void saveToPath(String path) throws IOException {
        Files.write(Path.of(path), content);
    }
}
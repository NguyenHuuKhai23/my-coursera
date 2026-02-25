package khai.myproject.mycourserabackend.utils.filefolder;

import lombok.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FolderObject {
    private String id;
    private String name;
    private List<FolderObject> subFolders;
    private List<FileObject> files;

    public static FolderObject fromPath(String path) throws IOException {
        Path folderPath = Path.of(path);
        String folderName = folderPath.getFileName().toString();

        List<FolderObject> subFolders = new LinkedList<>();
        try (var paths = Files.list(folderPath)) {
            paths.filter(Files::isDirectory)
                    .forEach(p -> {
                        try {
                            subFolders.add(FolderObject.fromPath(p.toString()));
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    });
        }

        List<FileObject> files = new LinkedList<>();
        try (var paths = Files.list(folderPath)) {
            paths.filter(Files::isRegularFile)
                    .forEach(p -> {
                        try {
                            files.add(FileObject.fromPath(p.toString()));
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    });
        }

        return FolderObject.builder()
                .name(folderName)
                .subFolders(subFolders)
                .files(files)
                .build();
    }

    public void addSubFolder(FolderObject subFolder) {
        this.subFolders.add(subFolder);
    }

    public void addFile(FileObject file) {
        this.files.add(file);
    }

    public void removeSubFolder(FolderObject subFolder) {
        this.subFolders.remove(subFolder);
    }

    public void removeFile(FileObject file) {
        this.files.remove(file);
    }

    public void saveToPath(String path) throws IOException {
        Files.createDirectories(Path.of(path));
        for (FolderObject subFolder : subFolders) {
            subFolder.saveToPath(path + "/" + subFolder.getName());
        }
        for (FileObject file : files) {
            file.saveToPath(path + "/" + file.getName());
        }
    }
}

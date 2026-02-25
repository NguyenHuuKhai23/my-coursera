-- =============================================
-- MINI COURSERA - SEED DATA
-- MySQL 8+ | Sample data for development/testing
-- =============================================
-- Password cho tat ca user LOCAL: "Password@123"
-- BCrypt hash: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
-- =============================================
USE `mini_coursera`;
SET FOREIGN_KEY_CHECKS = 0;
-- =============================================
-- 1. USERS (3 roles: ADMIN, INSTRUCTOR, STUDENT)
-- =============================================
INSERT INTO `users` (`id`, `email`, `password`, `full_name`, `avatar_url`, `phone`, `bio`, `auth_provider`, `provider_id`, `role`, `is_enabled`, `is_deleted`, `created_at`, `updated_at`) VALUES
-- ADMIN
(1, 'admin@minicourera.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'System Admin', NULL, '0900000001', 'Platform administrator', 'LOCAL', NULL, 'ADMIN', 1, 0, '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
-- INSTRUCTORS
(2, 'nguyen.vana@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Nguyễn Văn A', NULL, '0900000002', 'Senior Java Developer với 10 năm kinh nghiệm. Chuyên gia Spring Boot và Microservices.', 'LOCAL', NULL, 'INSTRUCTOR', 1, 0, '2025-01-05 10:00:00', '2025-01-05 10:00:00'),
(3, 'tran.thib@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Trần Thị B', NULL, '0900000003', 'Full-stack developer, yêu thích React và Node.js. Đã đào tạo hơn 5000 học viên.', 'LOCAL', NULL, 'INSTRUCTOR', 1, 0, '2025-01-06 10:00:00', '2025-01-06 10:00:00'),
(4, 'le.vanc@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Lê Văn C', NULL, '0900000004', 'Data Scientist tại FPT Software. Chuyên gia Python và Machine Learning.', 'LOCAL', NULL, 'INSTRUCTOR', 1, 0, '2025-01-07 10:00:00', '2025-01-07 10:00:00'),
-- STUDENTS (LOCAL)
(5, 'student1@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Phạm Văn D', NULL, '0900000005', 'Sinh viên CNTT năm 3', 'LOCAL', NULL, 'STUDENT', 1, 0, '2025-02-01 08:00:00', '2025-02-01 08:00:00'),
(6, 'student2@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Hoàng Thị E', NULL, '0900000006', 'Fresher Developer đang tìm việc', 'LOCAL', NULL, 'STUDENT', 1, 0, '2025-02-02 08:00:00', '2025-02-02 08:00:00'),
(7, 'student3@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Vũ Minh F', NULL, '0900000007', 'Chuyển ngành sang IT', 'LOCAL', NULL, 'STUDENT', 1, 0, '2025-02-03 08:00:00', '2025-02-03 08:00:00'),
(8, 'student4@gmail.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Đỗ Thanh G', NULL, '0900000008', NULL, 'LOCAL', NULL, 'STUDENT', 1, 0, '2025-02-04 08:00:00', '2025-02-04 08:00:00'),
-- STUDENTS (GOOGLE OAuth)
(9, 'googleuser1@gmail.com', NULL, 'Google User One', 'https://lh3.googleusercontent.com/a/default-user1', NULL, NULL, 'GOOGLE', 'google-uid-100001', 'STUDENT', 1, 0, '2025-02-10 09:00:00', '2025-02-10 09:00:00'),
-- STUDENTS (FACEBOOK OAuth)
(10, 'fbuser1@gmail.com', NULL, 'Facebook User One', 'https://graph.facebook.com/fb-uid-200001/picture', NULL, NULL, 'FACEBOOK', 'fb-uid-200001', 'STUDENT', 1, 0, '2025-02-12 09:00:00', '2025-02-12 09:00:00');
-- =============================================
-- 2. CATEGORIES
-- =============================================
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Lập trình Web', 'lap-trinh-web', 'Các khóa học về phát triển web frontend và backend', '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
(2, 'Lập trình Mobile', 'lap-trinh-mobile', 'Phát triển ứng dụng di động Android, iOS, Flutter', '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
(3, 'Data Science & AI', 'data-science-ai', 'Khoa học dữ liệu, Machine Learning, Deep Learning', '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
(4, 'DevOps & Cloud', 'devops-cloud', 'Docker, Kubernetes, AWS, CI/CD', '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
(5, 'Cơ sở dữ liệu', 'co-so-du-lieu', 'MySQL, PostgreSQL, MongoDB, Redis', '2025-01-01 00:00:00', '2025-01-01 00:00:00'),
(6, 'Lập trình cơ bản', 'lap-trinh-co-ban', 'Nhập môn lập trình, thuật toán, cấu trúc dữ liệu', '2025-01-01 00:00:00', '2025-01-01 00:00:00');
-- =============================================
-- 3. COURSES
-- =============================================
INSERT INTO `courses` (`id`, `instructor_id`, `category_id`, `title`, `slug`, `description`, `short_description`, `thumbnail_url`, `level`, `price`, `status`, `reject_reason`, `average_rating`, `total_students`, `is_deleted`, `published_at`, `created_at`, `updated_at`) VALUES
-- Instructor 2 (Nguyễn Văn A) - Java/Spring Boot
(1, 2, 1, 'Spring Boot từ Zero đến Hero', 'spring-boot-tu-zero-den-hero',
    'Khóa học Spring Boot toàn diện từ cơ bản đến nâng cao. Bạn sẽ học cách xây dựng REST API, Spring Security, JPA/Hibernate, và deploy lên cloud.',
    'Học Spring Boot từ đầu, xây dựng REST API chuyên nghiệp',
    NULL, 'BEGINNER', 599000.00, 'PUBLISHED', NULL, 4.50, 3, 0,
    '2025-01-20 10:00:00', '2025-01-15 10:00:00', '2025-02-15 10:00:00'),
(2, 2, 1, 'Microservices với Spring Cloud', 'microservices-voi-spring-cloud',
    'Tìm hiểu kiến trúc Microservices, Service Discovery, API Gateway, Circuit Breaker, và distributed tracing.',
    'Xây dựng hệ thống Microservices chuyên nghiệp với Spring Cloud',
    NULL, 'ADVANCED', 899000.00, 'PUBLISHED', NULL, 4.00, 1, 0,
    '2025-02-01 10:00:00', '2025-01-25 10:00:00', '2025-02-20 10:00:00'),
(3, 2, 5, 'JPA & Hibernate Deep Dive', 'jpa-hibernate-deep-dive',
    'Đi sâu vào JPA và Hibernate: Entity mapping, relationship, caching, performance tuning.',
    'Thành thạo JPA/Hibernate cho Java developer',
    NULL, 'INTERMEDIATE', 499000.00, 'DRAFT', NULL, 0.00, 0, 0,
    NULL, '2025-02-25 10:00:00', '2025-02-25 10:00:00'),
-- Instructor 3 (Trần Thị B) - Frontend/React
(4, 3, 1, 'React.js cho người mới bắt đầu', 'reactjs-cho-nguoi-moi-bat-dau',
    'Học React.js từ cơ bản: JSX, Components, Props, State, Hooks, React Router, và gọi API.',
    'Bắt đầu hành trình Frontend với React.js',
    NULL, 'BEGINNER', 399000.00, 'PUBLISHED', NULL, 4.75, 2, 0,
    '2025-01-25 10:00:00', '2025-01-18 10:00:00', '2025-02-18 10:00:00'),
(5, 3, 1, 'TypeScript Masterclass', 'typescript-masterclass',
    'Nắm vững TypeScript: Types, Interfaces, Generics, Decorators, và ứng dụng trong React/Node.js.',
    'TypeScript từ cơ bản đến nâng cao',
    NULL, 'INTERMEDIATE', 499000.00, 'PUBLISHED', NULL, 0.00, 0, 0,
    '2025-02-05 10:00:00', '2025-01-28 10:00:00', '2025-02-05 10:00:00'),
(6, 3, 1, 'Next.js Full-stack Development', 'nextjs-fullstack-development',
    'Xây dựng ứng dụng full-stack với Next.js 14: Server Components, App Router, API Routes.',
    'Full-stack web development với Next.js',
    NULL, 'ADVANCED', 799000.00, 'PENDING', NULL, 0.00, 0, 0,
    NULL, '2025-02-20 10:00:00', '2025-02-20 10:00:00'),
-- Instructor 4 (Lê Văn C) - Python/Data Science
(7, 4, 3, 'Python cho Data Science', 'python-cho-data-science',
    'Học Python với NumPy, Pandas, Matplotlib. Phân tích dữ liệu thực tế từ các dataset.',
    'Nền tảng Python cho phân tích dữ liệu',
    NULL, 'BEGINNER', 449000.00, 'PUBLISHED', NULL, 5.00, 2, 0,
    '2025-01-22 10:00:00', '2025-01-16 10:00:00', '2025-02-16 10:00:00'),
(8, 4, 3, 'Machine Learning A-Z', 'machine-learning-a-z',
    'Toàn bộ kiến thức ML: Regression, Classification, Clustering, Neural Networks với scikit-learn và TensorFlow.',
    'Từ lý thuyết đến thực hành Machine Learning',
    NULL, 'ADVANCED', 999000.00, 'PUBLISHED', NULL, 4.50, 1, 0,
    '2025-02-03 10:00:00', '2025-01-30 10:00:00', '2025-02-22 10:00:00'),
-- Course bị REJECTED (để test flow)
(9, 3, 2, 'Flutter Crash Course', 'flutter-crash-course',
    'Học Flutter nhanh trong 1 tuần.',
    'Khóa học Flutter cấp tốc',
    NULL, 'BEGINNER', 299000.00, 'REJECTED', 'Nội dung chưa đầy đủ, cần bổ sung thêm section và bài tập thực hành.', 0.00, 0, 0,
    NULL, '2025-02-10 10:00:00', '2025-02-15 10:00:00'),
-- Course bị soft delete
(10, 2, 6, 'Java cơ bản (Cũ)', 'java-co-ban-cu',
    'Khóa học Java cơ bản - phiên bản cũ, đã ngưng.',
    'Java cơ bản phiên bản cũ',
    NULL, 'BEGINNER', 0.00, 'PUBLISHED', NULL, 0.00, 0, 1,
    '2025-01-10 10:00:00', '2025-01-02 10:00:00', '2025-02-01 10:00:00');
-- =============================================
-- 4. SECTIONS
-- =============================================
INSERT INTO `sections` (`id`, `course_id`, `title`, `sort_order`, `created_at`, `updated_at`) VALUES
-- Course 1: Spring Boot từ Zero đến Hero
(1,  1, 'Giới thiệu Spring Boot', 1, '2025-01-15 10:00:00', '2025-01-15 10:00:00'),
(2,  1, 'REST API cơ bản', 2, '2025-01-15 11:00:00', '2025-01-15 11:00:00'),
(3,  1, 'Spring Data JPA', 3, '2025-01-15 12:00:00', '2025-01-15 12:00:00'),
(4,  1, 'Spring Security & JWT', 4, '2025-01-15 13:00:00', '2025-01-15 13:00:00'),
-- Course 4: React.js cho người mới bắt đầu
(5,  4, 'Bắt đầu với React', 1, '2025-01-18 10:00:00', '2025-01-18 10:00:00'),
(6,  4, 'Components & Props', 2, '2025-01-18 11:00:00', '2025-01-18 11:00:00'),
(7,  4, 'State & Hooks', 3, '2025-01-18 12:00:00', '2025-01-18 12:00:00'),
-- Course 7: Python cho Data Science
(8,  7, 'Python Fundamentals', 1, '2025-01-16 10:00:00', '2025-01-16 10:00:00'),
(9,  7, 'NumPy & Pandas', 2, '2025-01-16 11:00:00', '2025-01-16 11:00:00'),
(10, 7, 'Data Visualization', 3, '2025-01-16 12:00:00', '2025-01-16 12:00:00'),
-- Course 2: Microservices
(11, 2, 'Kiến trúc Microservices', 1, '2025-01-25 10:00:00', '2025-01-25 10:00:00'),
(12, 2, 'Service Discovery & API Gateway', 2, '2025-01-25 11:00:00', '2025-01-25 11:00:00'),
-- Course 8: Machine Learning A-Z
(13, 8, 'Giới thiệu Machine Learning', 1, '2025-01-30 10:00:00', '2025-01-30 10:00:00'),
(14, 8, 'Regression Models', 2, '2025-01-30 11:00:00', '2025-01-30 11:00:00'),
-- Course 5: TypeScript Masterclass
(15, 5, 'TypeScript Basics', 1, '2025-01-28 10:00:00', '2025-01-28 10:00:00'),
(16, 5, 'Advanced Types', 2, '2025-01-28 11:00:00', '2025-01-28 11:00:00');
-- =============================================
-- 5. LESSONS
-- =============================================
INSERT INTO `lessons` (`id`, `section_id`, `title`, `content_type`, `video_url`, `text_content`, `duration_seconds`, `sort_order`, `is_preview`, `created_at`, `updated_at`) VALUES
-- Section 1: Giới thiệu Spring Boot (Course 1)
(1,  1, 'Spring Boot là gì?', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-1.mp4', NULL, 600, 1, 1, '2025-01-15 10:00:00', '2025-01-15 10:00:00'),
(2,  1, 'Cài đặt môi trường', 'TEXT', NULL, '## Cài đặt môi trường\n\n### Yêu cầu:\n- JDK 21+\n- Maven 3.9+\n- IntelliJ IDEA\n\n### Bước 1: Cài JDK\nTải JDK từ [Oracle](https://oracle.com)...', 0, 2, 1, '2025-01-15 10:30:00', '2025-01-15 10:30:00'),
(3,  1, 'Tạo project đầu tiên', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-3.mp4', NULL, 900, 3, 0, '2025-01-15 11:00:00', '2025-01-15 11:00:00'),
-- Section 2: REST API cơ bản (Course 1)
(4,  2, 'HTTP Methods & REST principles', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-4.mp4', NULL, 720, 1, 0, '2025-01-15 12:00:00', '2025-01-15 12:00:00'),
(5,  2, 'Tạo Controller đầu tiên', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-5.mp4', NULL, 840, 2, 0, '2025-01-15 12:30:00', '2025-01-15 12:30:00'),
(6,  2, 'Request & Response DTO', 'TEXT', NULL, '## DTO Pattern\n\nData Transfer Object giúp tách biệt entity và API response...', 0, 3, 0, '2025-01-15 13:00:00', '2025-01-15 13:00:00'),
-- Section 3: Spring Data JPA (Course 1)
(7,  3, 'Entity & Repository', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-7.mp4', NULL, 1080, 1, 0, '2025-01-15 14:00:00', '2025-01-15 14:00:00'),
(8,  3, 'Query Methods & JPQL', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-8.mp4', NULL, 960, 2, 0, '2025-01-15 14:30:00', '2025-01-15 14:30:00'),
-- Section 4: Spring Security & JWT (Course 1)
(9,  4, 'Spring Security cơ bản', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-9.mp4', NULL, 1200, 1, 0, '2025-01-15 15:00:00', '2025-01-15 15:00:00'),
(10, 4, 'JWT Authentication', 'VIDEO', 'https://videos.example.com/spring-boot/lesson-10.mp4', NULL, 1500, 2, 0, '2025-01-15 15:30:00', '2025-01-15 15:30:00'),
-- Section 5: Bắt đầu với React (Course 4)
(11, 5, 'React là gì? Tại sao chọn React?', 'VIDEO', 'https://videos.example.com/react/lesson-1.mp4', NULL, 480, 1, 1, '2025-01-18 10:00:00', '2025-01-18 10:00:00'),
(12, 5, 'Setup project với Vite', 'VIDEO', 'https://videos.example.com/react/lesson-2.mp4', NULL, 600, 2, 1, '2025-01-18 10:30:00', '2025-01-18 10:30:00'),
(13, 5, 'JSX cơ bản', 'VIDEO', 'https://videos.example.com/react/lesson-3.mp4', NULL, 720, 3, 0, '2025-01-18 11:00:00', '2025-01-18 11:00:00'),
-- Section 6: Components & Props (Course 4)
(14, 6, 'Functional Components', 'VIDEO', 'https://videos.example.com/react/lesson-4.mp4', NULL, 600, 1, 0, '2025-01-18 12:00:00', '2025-01-18 12:00:00'),
(15, 6, 'Props và truyền dữ liệu', 'VIDEO', 'https://videos.example.com/react/lesson-5.mp4', NULL, 780, 2, 0, '2025-01-18 12:30:00', '2025-01-18 12:30:00'),
-- Section 7: State & Hooks (Course 4)
(16, 7, 'useState Hook', 'VIDEO', 'https://videos.example.com/react/lesson-6.mp4', NULL, 900, 1, 0, '2025-01-18 13:00:00', '2025-01-18 13:00:00'),
(17, 7, 'useEffect Hook', 'VIDEO', 'https://videos.example.com/react/lesson-7.mp4', NULL, 840, 2, 0, '2025-01-18 13:30:00', '2025-01-18 13:30:00'),
-- Section 8: Python Fundamentals (Course 7)
(18, 8, 'Giới thiệu Python', 'VIDEO', 'https://videos.example.com/python/lesson-1.mp4', NULL, 540, 1, 1, '2025-01-16 10:00:00', '2025-01-16 10:00:00'),
(19, 8, 'Biến, kiểu dữ liệu, toán tử', 'VIDEO', 'https://videos.example.com/python/lesson-2.mp4', NULL, 720, 2, 0, '2025-01-16 10:30:00', '2025-01-16 10:30:00'),
(20, 8, 'Vòng lặp và điều kiện', 'VIDEO', 'https://videos.example.com/python/lesson-3.mp4', NULL, 660, 3, 0, '2025-01-16 11:00:00', '2025-01-16 11:00:00'),
-- Section 9: NumPy & Pandas (Course 7)
(21, 9, 'NumPy Arrays', 'VIDEO', 'https://videos.example.com/python/lesson-4.mp4', NULL, 900, 1, 0, '2025-01-16 12:00:00', '2025-01-16 12:00:00'),
(22, 9, 'Pandas DataFrame', 'VIDEO', 'https://videos.example.com/python/lesson-5.mp4', NULL, 1020, 2, 0, '2025-01-16 12:30:00', '2025-01-16 12:30:00'),
-- Section 10: Data Visualization (Course 7)
(23, 10, 'Matplotlib cơ bản', 'VIDEO', 'https://videos.example.com/python/lesson-6.mp4', NULL, 780, 1, 0, '2025-01-16 13:00:00', '2025-01-16 13:00:00'),
(24, 10, 'Seaborn cho biểu đồ đẹp', 'VIDEO', 'https://videos.example.com/python/lesson-7.mp4', NULL, 660, 2, 0, '2025-01-16 13:30:00', '2025-01-16 13:30:00'),
-- Section 11: Kiến trúc Microservices (Course 2)
(25, 11, 'Monolith vs Microservices', 'VIDEO', 'https://videos.example.com/microservices/lesson-1.mp4', NULL, 720, 1, 1, '2025-01-25 10:00:00', '2025-01-25 10:00:00'),
(26, 11, 'Domain Driven Design', 'VIDEO', 'https://videos.example.com/microservices/lesson-2.mp4', NULL, 900, 2, 0, '2025-01-25 10:30:00', '2025-01-25 10:30:00'),
-- Section 12: Service Discovery (Course 2)
(27, 12, 'Eureka Server', 'VIDEO', 'https://videos.example.com/microservices/lesson-3.mp4', NULL, 840, 1, 0, '2025-01-25 11:00:00', '2025-01-25 11:00:00'),
(28, 12, 'API Gateway với Spring Cloud Gateway', 'VIDEO', 'https://videos.example.com/microservices/lesson-4.mp4', NULL, 1080, 2, 0, '2025-01-25 11:30:00', '2025-01-25 11:30:00'),
-- Section 13: Giới thiệu ML (Course 8)
(29, 13, 'Machine Learning là gì?', 'VIDEO', 'https://videos.example.com/ml/lesson-1.mp4', NULL, 600, 1, 1, '2025-01-30 10:00:00', '2025-01-30 10:00:00'),
(30, 13, 'Supervised vs Unsupervised', 'VIDEO', 'https://videos.example.com/ml/lesson-2.mp4', NULL, 780, 2, 0, '2025-01-30 10:30:00', '2025-01-30 10:30:00'),
-- Section 14: Regression Models (Course 8)
(31, 14, 'Linear Regression', 'VIDEO', 'https://videos.example.com/ml/lesson-3.mp4', NULL, 1200, 1, 0, '2025-01-30 11:00:00', '2025-01-30 11:00:00'),
(32, 14, 'Polynomial Regression', 'VIDEO', 'https://videos.example.com/ml/lesson-4.mp4', NULL, 960, 2, 0, '2025-01-30 11:30:00', '2025-01-30 11:30:00'),
-- Section 15: TypeScript Basics (Course 5)
(33, 15, 'TypeScript là gì?', 'VIDEO', 'https://videos.example.com/ts/lesson-1.mp4', NULL, 480, 1, 1, '2025-01-28 10:00:00', '2025-01-28 10:00:00'),
(34, 15, 'Types & Interfaces', 'VIDEO', 'https://videos.example.com/ts/lesson-2.mp4', NULL, 720, 2, 0, '2025-01-28 10:30:00', '2025-01-28 10:30:00'),
-- Section 16: Advanced Types (Course 5)
(35, 16, 'Generics', 'VIDEO', 'https://videos.example.com/ts/lesson-3.mp4', NULL, 900, 1, 0, '2025-01-28 11:00:00', '2025-01-28 11:00:00'),
(36, 16, 'Utility Types', 'VIDEO', 'https://videos.example.com/ts/lesson-4.mp4', NULL, 660, 2, 0, '2025-01-28 11:30:00', '2025-01-28 11:30:00');
-- =============================================
-- 6. LESSON RESOURCES
-- =============================================
INSERT INTO `lesson_resources` (`id`, `lesson_id`, `file_name`, `file_url`, `file_size`, `created_at`) VALUES
(1, 2,  'setup-guide.pdf', '/resources/spring-boot/setup-guide.pdf', 2048000, '2025-01-15 10:30:00'),
(2, 6,  'dto-pattern-cheatsheet.pdf', '/resources/spring-boot/dto-cheatsheet.pdf', 1024000, '2025-01-15 13:00:00'),
(3, 7,  'entity-diagram.png', '/resources/spring-boot/entity-diagram.png', 512000, '2025-01-15 14:00:00'),
(4, 10, 'jwt-flow-diagram.pdf', '/resources/spring-boot/jwt-flow.pdf', 768000, '2025-01-15 15:30:00'),
(5, 12, 'vite-config-template.zip', '/resources/react/vite-template.zip', 4096000, '2025-01-18 10:30:00'),
(6, 21, 'numpy-exercises.ipynb', '/resources/python/numpy-exercises.ipynb', 1536000, '2025-01-16 12:00:00'),
(7, 22, 'sample-dataset.csv', '/resources/python/sample-dataset.csv', 3072000, '2025-01-16 12:30:00'),
(8, 31, 'linear-regression-notebook.ipynb', '/resources/ml/linear-regression.ipynb', 2048000, '2025-01-30 11:00:00');
-- =============================================
-- 7. PAYMENTS (VNPay transactions)
-- =============================================
INSERT INTO `payments` (`id`, `user_id`, `course_id`, `order_code`, `transaction_code`, `amount`, `payment_method`, `status`, `vnp_response_code`, `paid_at`, `created_at`, `updated_at`) VALUES
-- Student 5 mua Course 1 (Spring Boot) - SUCCESS
(1, 5, 1, 'ORD-20250210-000001', 'VNP14012345', 599000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-10 10:05:00', '2025-02-10 10:00:00', '2025-02-10 10:05:00'),
-- Student 5 mua Course 4 (React) - SUCCESS
(2, 5, 4, 'ORD-20250211-000002', 'VNP14012346', 399000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-11 14:15:00', '2025-02-11 14:10:00', '2025-02-11 14:15:00'),
-- Student 5 mua Course 7 (Python) - SUCCESS
(3, 5, 7, 'ORD-20250212-000003', 'VNP14012347', 449000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-12 09:20:00', '2025-02-12 09:15:00', '2025-02-12 09:20:00'),
-- Student 6 mua Course 1 (Spring Boot) - SUCCESS
(4, 6, 1, 'ORD-20250213-000004', 'VNP14012348', 599000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-13 11:10:00', '2025-02-13 11:05:00', '2025-02-13 11:10:00'),
-- Student 6 mua Course 7 (Python) - SUCCESS
(5, 6, 7, 'ORD-20250214-000005', 'VNP14012349', 449000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-14 16:25:00', '2025-02-14 16:20:00', '2025-02-14 16:25:00'),
-- Student 7 mua Course 4 (React) - SUCCESS
(6, 7, 4, 'ORD-20250215-000006', 'VNP14012350', 399000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-15 08:35:00', '2025-02-15 08:30:00', '2025-02-15 08:35:00'),
-- Student 7 mua Course 1 (Spring Boot) - SUCCESS
(7, 7, 1, 'ORD-20250215-000007', 'VNP14012351', 599000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-15 09:05:00', '2025-02-15 09:00:00', '2025-02-15 09:05:00'),
-- Student 8 mua Course 2 (Microservices) - SUCCESS
(8, 8, 2, 'ORD-20250216-000008', 'VNP14012352', 899000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-16 13:15:00', '2025-02-16 13:10:00', '2025-02-16 13:15:00'),
-- Student 9 (Google OAuth) mua Course 8 (ML) - SUCCESS
(9, 9, 8, 'ORD-20250217-000009', 'VNP14012353', 999000.00, 'VNPAY', 'SUCCESS', '00', '2025-02-17 10:25:00', '2025-02-17 10:20:00', '2025-02-17 10:25:00'),
-- Student 8 mua Course 1 - FAILED (để test)
(10, 8, 1, 'ORD-20250218-000010', NULL, 599000.00, 'VNPAY', 'FAILED', '24', NULL, '2025-02-18 15:00:00', '2025-02-18 15:05:00'),
-- Student 10 (FB OAuth) mua Course 7 - PENDING (để test)
(11, 10, 7, 'ORD-20250219-000011', NULL, 449000.00, 'VNPAY', 'PENDING', NULL, NULL, '2025-02-19 11:00:00', '2025-02-19 11:00:00');
-- =============================================
-- 8. ENROLLMENTS
-- =============================================
INSERT INTO `enrollments` (`id`, `user_id`, `course_id`, `payment_id`, `status`, `progress_percent`, `last_lesson_id`, `enrolled_at`, `completed_at`) VALUES
-- Student 5: enrolled in 3 courses
(1, 5, 1, 1, 'COMPLETED', 100.00, 10, '2025-02-10 10:05:00', '2025-02-20 18:00:00'),  -- Spring Boot - COMPLETED
(2, 5, 4, 2, 'ACTIVE',     42.86, 14, '2025-02-11 14:15:00', NULL),                     -- React - 3/7 lessons
(3, 5, 7, 3, 'ACTIVE',     28.57, 20, '2025-02-12 09:20:00', NULL),                     -- Python - 2/7 lessons
-- Student 6: enrolled in 2 courses
(4, 6, 1, 4, 'ACTIVE',     60.00, 6,  '2025-02-13 11:10:00', NULL),                     -- Spring Boot - 6/10 lessons
(5, 6, 7, 5, 'COMPLETED', 100.00, 24, '2025-02-14 16:25:00', '2025-02-22 20:00:00'),    -- Python - COMPLETED
-- Student 7: enrolled in 2 courses
(6, 7, 4, 6, 'ACTIVE',     71.43, 16, '2025-02-15 08:35:00', NULL),                     -- React - 5/7 lessons
(7, 7, 1, 7, 'ACTIVE',     20.00, 3,  '2025-02-15 09:05:00', NULL),                     -- Spring Boot - 2/10 lessons
-- Student 8: enrolled in Microservices
(8, 8, 2, 8, 'ACTIVE',     50.00, 27, '2025-02-16 13:15:00', NULL),                     -- Microservices - 2/4 lessons
-- Student 9 (Google): enrolled in ML
(9, 9, 8, 9, 'ACTIVE',     25.00, 30, '2025-02-17 10:25:00', NULL);                     -- ML - 1/4 lessons
-- =============================================
-- 9. LESSON PROGRESS
-- =============================================
INSERT INTO `lesson_progress` (`id`, `enrollment_id`, `lesson_id`, `is_completed`, `completed_at`) VALUES
-- Enrollment 1: Student 5, Course 1 (Spring Boot) - ALL 10 lessons completed
(1,  1, 1,  1, '2025-02-10 11:00:00'),
(2,  1, 2,  1, '2025-02-10 12:00:00'),
(3,  1, 3,  1, '2025-02-11 10:00:00'),
(4,  1, 4,  1, '2025-02-12 10:00:00'),
(5,  1, 5,  1, '2025-02-13 10:00:00'),
(6,  1, 6,  1, '2025-02-14 10:00:00'),
(7,  1, 7,  1, '2025-02-15 10:00:00'),
(8,  1, 8,  1, '2025-02-17 10:00:00'),
(9,  1, 9,  1, '2025-02-19 10:00:00'),
(10, 1, 10, 1, '2025-02-20 18:00:00'),
-- Enrollment 2: Student 5, Course 4 (React) - 3/7 lessons
(11, 2, 11, 1, '2025-02-11 15:00:00'),
(12, 2, 12, 1, '2025-02-12 10:00:00'),
(13, 2, 13, 1, '2025-02-13 14:00:00'),
(14, 2, 14, 0, NULL),
-- Enrollment 3: Student 5, Course 7 (Python) - 2/7 lessons
(15, 3, 18, 1, '2025-02-12 10:00:00'),
(16, 3, 19, 1, '2025-02-13 09:00:00'),
(17, 3, 20, 0, NULL),
-- Enrollment 4: Student 6, Course 1 (Spring Boot) - 6/10 lessons
(18, 4, 1,  1, '2025-02-13 12:00:00'),
(19, 4, 2,  1, '2025-02-13 13:00:00'),
(20, 4, 3,  1, '2025-02-14 10:00:00'),
(21, 4, 4,  1, '2025-02-14 14:00:00'),
(22, 4, 5,  1, '2025-02-15 10:00:00'),
(23, 4, 6,  1, '2025-02-16 10:00:00'),
-- Enrollment 5: Student 6, Course 7 (Python) - ALL 7 lessons completed
(24, 5, 18, 1, '2025-02-14 17:00:00'),
(25, 5, 19, 1, '2025-02-15 10:00:00'),
(26, 5, 20, 1, '2025-02-16 10:00:00'),
(27, 5, 21, 1, '2025-02-17 10:00:00'),
(28, 5, 22, 1, '2025-02-19 10:00:00'),
(29, 5, 23, 1, '2025-02-21 10:00:00'),
(30, 5, 24, 1, '2025-02-22 20:00:00'),
-- Enrollment 6: Student 7, Course 4 (React) - 5/7 lessons
(31, 6, 11, 1, '2025-02-15 09:00:00'),
(32, 6, 12, 1, '2025-02-15 10:00:00'),
(33, 6, 13, 1, '2025-02-15 14:00:00'),
(34, 6, 14, 1, '2025-02-16 10:00:00'),
(35, 6, 15, 1, '2025-02-16 14:00:00'),
(36, 6, 16, 0, NULL),
-- Enrollment 7: Student 7, Course 1 (Spring Boot) - 2/10 lessons
(37, 7, 1, 1, '2025-02-15 10:00:00'),
(38, 7, 2, 1, '2025-02-15 11:00:00'),
(39, 7, 3, 0, NULL),
-- Enrollment 8: Student 8, Course 2 (Microservices) - 2/4 lessons
(40, 8, 25, 1, '2025-02-16 14:00:00'),
(41, 8, 26, 1, '2025-02-17 10:00:00'),
(42, 8, 27, 0, NULL),
-- Enrollment 9: Student 9, Course 8 (ML) - 1/4 lessons
(43, 9, 29, 1, '2025-02-17 11:00:00'),
(44, 9, 30, 0, NULL);
-- =============================================
-- 10. CERTIFICATES (for completed enrollments)
-- =============================================
INSERT INTO `certificates` (`id`, `user_id`, `course_id`, `enrollment_id`, `certificate_code`, `file_url`, `issued_at`) VALUES
-- Student 5 completed Course 1 (Spring Boot)
(1, 5, 1, 1, 'CERT-MC-2025-000001', '/certificates/CERT-MC-2025-000001.pdf', '2025-02-20 18:05:00'),
-- Student 6 completed Course 7 (Python)
(2, 6, 7, 5, 'CERT-MC-2025-000002', '/certificates/CERT-MC-2025-000002.pdf', '2025-02-22 20:05:00');
-- =============================================
-- 11. REVIEWS (only enrolled students)
-- =============================================
INSERT INTO `reviews` (`id`, `user_id`, `course_id`, `rating`, `comment`, `created_at`, `updated_at`) VALUES
-- Reviews for Course 1 (Spring Boot) - avg: 4.5
(1, 5, 1, 5, 'Khóa học rất tuyệt vời! Giảng viên giải thích rõ ràng, dễ hiểu. Rất recommend cho ai muốn học Spring Boot.', '2025-02-20 19:00:00', '2025-02-20 19:00:00'),
(2, 6, 1, 4, 'Nội dung tốt, nhưng phần Spring Security có thể giải thích thêm chi tiết hơn.', '2025-02-18 20:00:00', '2025-02-18 20:00:00'),
-- Reviews for Course 4 (React) - avg: 4.75
(3, 5, 4, 5, 'React dạy rất dễ hiểu, phù hợp cho người mới bắt đầu. Các ví dụ thực tế rất hay!', '2025-02-15 20:00:00', '2025-02-15 20:00:00'),
(4, 7, 4, 4, 'Khóa học hay, nhưng muốn có thêm phần về Redux và React Query.', '2025-02-18 10:00:00', '2025-02-18 10:00:00'),
-- Reviews for Course 7 (Python) - avg: 5.0
(5, 5, 7, 5, 'Python cho Data Science rất hay! Dataset thực tế, bài tập phong phú.', '2025-02-16 15:00:00', '2025-02-16 15:00:00'),
(6, 6, 7, 5, 'Giảng viên rất có kinh nghiệm, giải thích NumPy và Pandas rất chi tiết.', '2025-02-22 21:00:00', '2025-02-22 21:00:00'),
-- Reviews for Course 2 (Microservices) - avg: 4.0
(7, 8, 2, 4, 'Nội dung Microservices rất sâu, đang học dở nhưng rất thích.', '2025-02-19 10:00:00', '2025-02-19 10:00:00'),
-- Reviews for Course 8 (ML) - avg: 4.5
(8, 9, 8, 5, 'Machine Learning explained very clearly! Great course for beginners.', '2025-02-20 10:00:00', '2025-02-20 10:00:00');
-- =============================================
-- 12. WISHLISTS
-- =============================================
INSERT INTO `wishlists` (`id`, `user_id`, `course_id`, `created_at`) VALUES
(1, 5, 2, '2025-02-15 10:00:00'),  -- Student 5 wishlist Microservices
(2, 5, 8, '2025-02-16 10:00:00'),  -- Student 5 wishlist ML
(3, 6, 4, '2025-02-15 09:00:00'),  -- Student 6 wishlist React
(4, 6, 2, '2025-02-17 10:00:00'),  -- Student 6 wishlist Microservices
(5, 7, 7, '2025-02-16 08:00:00'),  -- Student 7 wishlist Python
(6, 8, 7, '2025-02-18 10:00:00'),  -- Student 8 wishlist Python
(7, 9, 1, '2025-02-18 09:00:00'),  -- Student 9 (Google) wishlist Spring Boot
(8, 10, 4, '2025-02-19 12:00:00'); -- Student 10 (FB) wishlist React
-- =============================================
-- 13. NOTIFICATIONS
-- =============================================
INSERT INTO `notifications` (`id`, `user_id`, `type`, `title`, `message`, `reference_id`, `is_read`, `is_emailed`, `created_at`) VALUES
-- Payment success notifications
(1,  5, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Spring Boot từ Zero đến Hero". Chúc bạn học tập vui vẻ!', 1, 1, 1, '2025-02-10 10:05:00'),
(2,  5, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "React.js cho người mới bắt đầu". Chúc bạn học tập vui vẻ!', 2, 1, 1, '2025-02-11 14:15:00'),
(3,  5, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Python cho Data Science". Chúc bạn học tập vui vẻ!', 3, 1, 1, '2025-02-12 09:20:00'),
(4,  6, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Spring Boot từ Zero đến Hero". Chúc bạn học tập vui vẻ!', 4, 1, 1, '2025-02-13 11:10:00'),
(5,  6, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Python cho Data Science". Chúc bạn học tập vui vẻ!', 5, 0, 1, '2025-02-14 16:25:00'),
(6,  7, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "React.js cho người mới bắt đầu". Chúc bạn học tập vui vẻ!', 6, 1, 1, '2025-02-15 08:35:00'),
(7,  7, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Spring Boot từ Zero đến Hero". Chúc bạn học tập vui vẻ!', 7, 0, 1, '2025-02-15 09:05:00'),
(8,  8, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Microservices với Spring Cloud". Chúc bạn học tập vui vẻ!', 8, 1, 1, '2025-02-16 13:15:00'),
(9,  9, 'PAYMENT_SUCCESS', 'Thanh toán thành công', 'Bạn đã thanh toán thành công khóa học "Machine Learning A-Z". Chúc bạn học tập vui vẻ!', 9, 0, 1, '2025-02-17 10:25:00'),
-- Course approved notifications (to instructors)
(10, 2, 'COURSE_APPROVED', 'Khóa học đã được duyệt', 'Khóa học "Spring Boot từ Zero đến Hero" của bạn đã được admin duyệt và publish thành công!', 1, 1, 1, '2025-01-20 10:00:00'),
(11, 2, 'COURSE_APPROVED', 'Khóa học đã được duyệt', 'Khóa học "Microservices với Spring Cloud" của bạn đã được admin duyệt và publish thành công!', 2, 1, 1, '2025-02-01 10:00:00'),
(12, 3, 'COURSE_APPROVED', 'Khóa học đã được duyệt', 'Khóa học "React.js cho người mới bắt đầu" của bạn đã được admin duyệt và publish thành công!', 4, 1, 1, '2025-01-25 10:00:00'),
(13, 3, 'COURSE_APPROVED', 'Khóa học đã được duyệt', 'Khóa học "TypeScript Masterclass" của bạn đã được admin duyệt và publish thành công!', 5, 1, 1, '2025-02-05 10:00:00'),
(14, 4, 'COURSE_APPROVED', 'Khóa học đã được duyệt', 'Khóa học "Python cho Data Science" của bạn đã được admin duyệt và publish thành công!', 7, 1, 1, '2025-01-22 10:00:00'),
(15, 4, 'COURSE_APPROVED', 'Khóa học đã được duyệt', 'Khóa học "Machine Learning A-Z" của bạn đã được admin duyệt và publish thành công!', 8, 1, 1, '2025-02-03 10:00:00'),
-- Course rejected notification
(16, 3, 'COURSE_REJECTED', 'Khóa học bị từ chối', 'Khóa học "Flutter Crash Course" của bạn đã bị từ chối. Lý do: Nội dung chưa đầy đủ, cần bổ sung thêm section và bài tập thực hành.', 9, 1, 1, '2025-02-15 10:00:00'),
-- Certificate issued notifications
(17, 5, 'CERTIFICATE_ISSUED', 'Chứng chỉ đã được cấp', 'Chúc mừng! Bạn đã hoàn thành khóa học "Spring Boot từ Zero đến Hero" và nhận được chứng chỉ CERT-MC-2025-000001.', 1, 1, 1, '2025-02-20 18:05:00'),
(18, 6, 'CERTIFICATE_ISSUED', 'Chứng chỉ đã được cấp', 'Chúc mừng! Bạn đã hoàn thành khóa học "Python cho Data Science" và nhận được chứng chỉ CERT-MC-2025-000002.', 2, 0, 1, '2025-02-22 20:05:00');
SET FOREIGN_KEY_CHECKS = 1;
-- =============================================
-- SEED DATA SUMMARY
-- =============================================
-- Users:        10 (1 admin, 3 instructors, 4 local students, 1 Google, 1 Facebook)
-- Categories:    6
-- Courses:      10 (5 PUBLISHED, 1 DRAFT, 1 PENDING, 1 REJECTED, 1 soft-deleted, 1 PUBLISHED no students)
-- Sections:     16
-- Lessons:      36
-- Resources:     8
-- Payments:     11 (9 SUCCESS, 1 FAILED, 1 PENDING)
-- Enrollments:   9 (2 COMPLETED, 7 ACTIVE)
-- Progress:     44 lesson progress records
-- Certificates:  2
-- Reviews:       8
-- Wishlists:     8
-- Notifications: 18
--
-- Test credentials (LOCAL users):
--   Email: admin@minicourera.com     | Password: Password@123 | Role: ADMIN
--   Email: nguyen.vana@gmail.com     | Password: Password@123 | Role: INSTRUCTOR
--   Email: tran.thib@gmail.com       | Password: Password@123 | Role: INSTRUCTOR
--   Email: le.vanc@gmail.com         | Password: Password@123 | Role: INSTRUCTOR
--   Email: student1@gmail.com        | Password: Password@123 | Role: STUDENT
--   Email: student2@gmail.com        | Password: Password@123 | Role: STUDENT
--   Email: student3@gmail.com        | Password: Password@123 | Role: STUDENT
--   Email: student4@gmail.com        | Password: Password@123 | Role: STUDENT

-- =============================================
-- MINI COURSERA - DATABASE SCHEMA INITIALIZATION
-- MySQL 8+ | InnoDB | UTF8MB4
-- =============================================
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
CREATE DATABASE IF NOT EXISTS `mini_coursera`
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
USE `mini_coursera`;
-- =============================================
-- 1. USERS
-- =============================================
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `email`         VARCHAR(255)    NOT NULL,
    `password`      VARCHAR(255)    NULL COMMENT 'NULL for OAuth-only users',
    `full_name`     VARCHAR(255)    NOT NULL,
    `avatar_url`    VARCHAR(500)    NULL,
    `phone`         VARCHAR(20)     NULL,
    `bio`           TEXT            NULL,
    `auth_provider` ENUM('LOCAL','GOOGLE','FACEBOOK') NOT NULL DEFAULT 'LOCAL',
    `provider_id`   VARCHAR(255)    NULL COMMENT 'OAuth subject ID from provider',
    `role`          ENUM('STUDENT','INSTRUCTOR','ADMIN') NOT NULL DEFAULT 'STUDENT',
    `is_enabled`    TINYINT(1)      NOT NULL DEFAULT 1,
    `is_deleted`    TINYINT(1)      NOT NULL DEFAULT 0,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_users_email` (`email`),
    INDEX `idx_users_role` (`role`),
    INDEX `idx_users_auth_provider` (`auth_provider`, `provider_id`),
    INDEX `idx_users_is_deleted` (`is_deleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 2. REFRESH TOKENS
-- =============================================
DROP TABLE IF EXISTS `refresh_tokens`;
CREATE TABLE `refresh_tokens` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`       BIGINT          NOT NULL,
    `token`         VARCHAR(500)    NOT NULL,
    `expires_at`    DATETIME        NOT NULL,
    `revoked`       TINYINT(1)      NOT NULL DEFAULT 0,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_refresh_tokens_token` (`token`),
    INDEX `idx_refresh_tokens_user_id` (`user_id`),
    INDEX `idx_refresh_tokens_expires_at` (`expires_at`),
    CONSTRAINT `fk_refresh_tokens_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 3. CATEGORIES
-- =============================================
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `name`          VARCHAR(255)    NOT NULL,
    `slug`          VARCHAR(255)    NOT NULL,
    `description`   TEXT            NULL,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_categories_name` (`name`),
    UNIQUE KEY `uk_categories_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 4. COURSES
-- =============================================
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
    `id`                BIGINT          NOT NULL AUTO_INCREMENT,
    `instructor_id`     BIGINT          NOT NULL,
    `category_id`       BIGINT          NULL,
    `title`             VARCHAR(255)    NOT NULL,
    `slug`              VARCHAR(255)    NOT NULL,
    `description`       TEXT            NULL,
    `short_description` VARCHAR(500)    NULL,
    `thumbnail_url`     VARCHAR(500)    NULL,
    `level`             ENUM('BEGINNER','INTERMEDIATE','ADVANCED') NOT NULL DEFAULT 'BEGINNER',
    `price`             DECIMAL(12,2)   NOT NULL DEFAULT 0.00,
    `status`            ENUM('DRAFT','PENDING','PUBLISHED','REJECTED','LOCKED') NOT NULL DEFAULT 'DRAFT',
    `reject_reason`     TEXT            NULL,
    `average_rating`    DECIMAL(3,2)    NOT NULL DEFAULT 0.00,
    `total_students`    INT             NOT NULL DEFAULT 0,
    `is_deleted`        TINYINT(1)      NOT NULL DEFAULT 0 COMMENT 'Soft delete flag',
    `published_at`      DATETIME        NULL,
    `created_at`        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_courses_slug` (`slug`),
    INDEX `idx_courses_instructor_id` (`instructor_id`),
    INDEX `idx_courses_category_id` (`category_id`),
    INDEX `idx_courses_status` (`status`),
    INDEX `idx_courses_level` (`level`),
    INDEX `idx_courses_is_deleted` (`is_deleted`),
    FULLTEXT INDEX `ft_courses_title_desc` (`title`, `description`),
    CONSTRAINT `fk_courses_instructor`
        FOREIGN KEY (`instructor_id`) REFERENCES `users` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_courses_category`
        FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
        ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 5. SECTIONS
-- =============================================
DROP TABLE IF EXISTS `sections`;
CREATE TABLE `sections` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `course_id`     BIGINT          NOT NULL,
    `title`         VARCHAR(255)    NOT NULL,
    `sort_order`    INT             NOT NULL DEFAULT 0,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `idx_sections_course_id` (`course_id`),
    CONSTRAINT `fk_sections_course`
        FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 6. LESSONS
-- =============================================
DROP TABLE IF EXISTS `lessons`;
CREATE TABLE `lessons` (
    `id`                BIGINT          NOT NULL AUTO_INCREMENT,
    `section_id`        BIGINT          NOT NULL,
    `title`             VARCHAR(255)    NOT NULL,
    `content_type`      ENUM('VIDEO','TEXT') NOT NULL,
    `video_url`         VARCHAR(500)    NULL,
    `text_content`      LONGTEXT        NULL,
    `duration_seconds`  INT             NOT NULL DEFAULT 0 COMMENT 'Duration for video lessons',
    `sort_order`        INT             NOT NULL DEFAULT 0,
    `is_preview`        TINYINT(1)      NOT NULL DEFAULT 0 COMMENT 'Allow preview without enrollment',
    `created_at`        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `idx_lessons_section_id` (`section_id`),
    CONSTRAINT `fk_lessons_section`
        FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 7. LESSON RESOURCES
-- =============================================
DROP TABLE IF EXISTS `lesson_resources`;
CREATE TABLE `lesson_resources` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `lesson_id`     BIGINT          NOT NULL,
    `file_name`     VARCHAR(255)    NOT NULL,
    `file_url`      VARCHAR(500)    NOT NULL,
    `file_size`     BIGINT          NULL COMMENT 'File size in bytes',
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `idx_lesson_resources_lesson_id` (`lesson_id`),
    CONSTRAINT `fk_lesson_resources_lesson`
        FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 8. PAYMENTS
-- =============================================
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
    `id`                BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`           BIGINT          NOT NULL,
    `course_id`         BIGINT          NOT NULL,
    `order_code`        VARCHAR(100)    NOT NULL COMMENT 'App-generated order ID',
    `transaction_code`  VARCHAR(100)    NULL COMMENT 'VNPay vnp_TransactionNo',
    `amount`            DECIMAL(12,2)   NOT NULL,
    `payment_method`    VARCHAR(50)     NOT NULL DEFAULT 'VNPAY',
    `status`            ENUM('PENDING','SUCCESS','FAILED') NOT NULL DEFAULT 'PENDING',
    `vnp_response_code` VARCHAR(10)     NULL COMMENT 'VNPay response code',
    `paid_at`           DATETIME        NULL,
    `created_at`        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_payments_order_code` (`order_code`),
    INDEX `idx_payments_user_id` (`user_id`),
    INDEX `idx_payments_course_id` (`course_id`),
    INDEX `idx_payments_status` (`status`),
    INDEX `idx_payments_transaction_code` (`transaction_code`),
    CONSTRAINT `fk_payments_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_payments_course`
        FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 9. ENROLLMENTS
-- =============================================
DROP TABLE IF EXISTS `enrollments`;
CREATE TABLE `enrollments` (
    `id`                BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`           BIGINT          NOT NULL,
    `course_id`         BIGINT          NOT NULL,
    `payment_id`        BIGINT          NULL,
    `status`            ENUM('ACTIVE','COMPLETED') NOT NULL DEFAULT 'ACTIVE',
    `progress_percent`  DECIMAL(5,2)    NOT NULL DEFAULT 0.00,
    `last_lesson_id`    BIGINT          NULL COMMENT 'Last accessed lesson for continue learning',
    `enrolled_at`       DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `completed_at`      DATETIME        NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_enrollments_user_course` (`user_id`, `course_id`),
    INDEX `idx_enrollments_user_id` (`user_id`),
    INDEX `idx_enrollments_course_id` (`course_id`),
    INDEX `idx_enrollments_status` (`status`),
    CONSTRAINT `fk_enrollments_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_enrollments_course`
        FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_enrollments_payment`
        FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`)
        ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT `fk_enrollments_last_lesson`
        FOREIGN KEY (`last_lesson_id`) REFERENCES `lessons` (`id`)
        ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 10. LESSON PROGRESS
-- =============================================
DROP TABLE IF EXISTS `lesson_progress`;
CREATE TABLE `lesson_progress` (
    `id`                BIGINT          NOT NULL AUTO_INCREMENT,
    `enrollment_id`     BIGINT          NOT NULL,
    `lesson_id`         BIGINT          NOT NULL,
    `is_completed`      TINYINT(1)      NOT NULL DEFAULT 0,
    `completed_at`      DATETIME        NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_lesson_progress_enrollment_lesson` (`enrollment_id`, `lesson_id`),
    INDEX `idx_lesson_progress_enrollment_id` (`enrollment_id`),
    INDEX `idx_lesson_progress_lesson_id` (`lesson_id`),
    CONSTRAINT `fk_lesson_progress_enrollment`
        FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_lesson_progress_lesson`
        FOREIGN KEY (`lesson_id`) REFERENCES `lessons` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 11. CERTIFICATES
-- =============================================
DROP TABLE IF EXISTS `certificates`;
CREATE TABLE `certificates` (
    `id`                BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`           BIGINT          NOT NULL,
    `course_id`         BIGINT          NOT NULL,
    `enrollment_id`     BIGINT          NOT NULL,
    `certificate_code`  VARCHAR(100)    NOT NULL COMMENT 'Unique code for verification',
    `file_url`          VARCHAR(500)    NULL COMMENT 'Generated PDF/image path',
    `issued_at`         DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_certificates_code` (`certificate_code`),
    UNIQUE KEY `uk_certificates_user_course` (`user_id`, `course_id`),
    INDEX `idx_certificates_user_id` (`user_id`),
    INDEX `idx_certificates_course_id` (`course_id`),
    CONSTRAINT `fk_certificates_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_certificates_course`
        FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT `fk_certificates_enrollment`
        FOREIGN KEY (`enrollment_id`) REFERENCES `enrollments` (`id`)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 12. REVIEWS
-- =============================================
DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`       BIGINT          NOT NULL,
    `course_id`     BIGINT          NOT NULL,
    `rating`        TINYINT         NOT NULL,
    `comment`       TEXT            NULL,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_reviews_user_course` (`user_id`, `course_id`),
    INDEX `idx_reviews_course_id` (`course_id`),
    INDEX `idx_reviews_user_id` (`user_id`),
    CONSTRAINT `chk_reviews_rating` CHECK (`rating` >= 1 AND `rating` <= 5),
    CONSTRAINT `fk_reviews_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_reviews_course`
        FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 13. WISHLISTS
-- =============================================
DROP TABLE IF EXISTS `wishlists`;
CREATE TABLE `wishlists` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`       BIGINT          NOT NULL,
    `course_id`     BIGINT          NOT NULL,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_wishlists_user_course` (`user_id`, `course_id`),
    INDEX `idx_wishlists_user_id` (`user_id`),
    INDEX `idx_wishlists_course_id` (`course_id`),
    CONSTRAINT `fk_wishlists_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_wishlists_course`
        FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- =============================================
-- 14. NOTIFICATIONS
-- =============================================
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications` (
    `id`            BIGINT          NOT NULL AUTO_INCREMENT,
    `user_id`       BIGINT          NOT NULL,
    `type`          ENUM('PAYMENT_SUCCESS','COURSE_APPROVED','COURSE_REJECTED','CERTIFICATE_ISSUED') NOT NULL,
    `title`         VARCHAR(255)    NOT NULL,
    `message`       TEXT            NOT NULL,
    `reference_id`  BIGINT          NULL COMMENT 'Polymorphic reference to related entity ID',
    `is_read`       TINYINT(1)      NOT NULL DEFAULT 0,
    `is_emailed`    TINYINT(1)      NOT NULL DEFAULT 0,
    `created_at`    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `idx_notifications_user_read` (`user_id`, `is_read`),
    INDEX `idx_notifications_created_at` (`created_at`),
    CONSTRAINT `fk_notifications_user`
        FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SET FOREIGN_KEY_CHECKS = 1;
-- =============================================
-- SCHEMA SUMMARY
-- =============================================
-- 14 tables created:
--   1.  users              - User accounts (LOCAL/GOOGLE/FACEBOOK auth)
--   2.  refresh_tokens     - JWT refresh token storage
--   3.  categories         - Course categories
--   4.  courses            - Course catalog with soft delete
--   5.  sections           - Course sections/modules
--   6.  lessons            - Lessons (VIDEO/TEXT) within sections
--   7.  lesson_resources   - Downloadable files attached to lessons
--   8.  payments           - VNPay payment transactions
--   9.  enrollments        - Student enrollment (ACTIVE/COMPLETED)
--   10. lesson_progress    - Per-lesson completion tracking
--   11. certificates       - Generated certificates for completed courses
--   12. reviews            - Course ratings (1-5) and comments
--   13. wishlists          - User course wishlists
--   14. notifications      - In-app + email notifications

// =============================================
// MINI COURSERA - TypeScript Types
// =============================================

export type Role = 'STUDENT' | 'INSTRUCTOR' | 'ADMIN';
export type AuthProvider = 'LOCAL' | 'GOOGLE' | 'FACEBOOK';
export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type CourseStatus = 'DRAFT' | 'PENDING' | 'PUBLISHED' | 'REJECTED' | 'LOCKED';
export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED';
export type EnrollmentStatus = 'ACTIVE' | 'COMPLETED';
export type ContentType = 'VIDEO' | 'TEXT';
export type NotificationType = 'PAYMENT_SUCCESS' | 'COURSE_APPROVED' | 'COURSE_REJECTED' | 'CERTIFICATE_ISSUED';

export interface User {
    id: number;
    email: string;
    fullName: string;
    avatarUrl?: string;
    phone?: string;
    bio?: string;
    authProvider: AuthProvider;
    role: Role;
    isEnabled: boolean;
    createdAt: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
}

export interface Course {
    id: number;
    instructorId: number;
    instructorName?: string;
    categoryId?: number;
    categoryName?: string;
    title: string;
    slug: string;
    description?: string;
    shortDescription?: string;
    thumbnailUrl?: string;
    level: CourseLevel;
    price: number;
    status: CourseStatus;
    rejectReason?: string;
    averageRating: number;
    totalStudents: number;
    isDeleted: boolean;
    publishedAt?: string;
    createdAt: string;
    sections?: Section[];
}

export interface Section {
    id: number;
    courseId: number;
    title: string;
    sortOrder: number;
    lessons?: Lesson[];
}

export interface Lesson {
    id: number;
    sectionId: number;
    title: string;
    contentType: ContentType;
    videoUrl?: string;
    textContent?: string;
    durationSeconds: number;
    sortOrder: number;
    isPreview: boolean;
    resources?: LessonResource[];
}

export interface LessonResource {
    id: number;
    lessonId: number;
    fileName: string;
    fileUrl: string;
    fileSize?: number;
}

export interface Payment {
    id: number;
    userId: number;
    courseId: number;
    orderCode: string;
    transactionCode?: string;
    amount: number;
    paymentMethod: string;
    status: PaymentStatus;
    vnpResponseCode?: string;
    paidAt?: string;
    createdAt: string;
    courseName?: string;
    userName?: string;
}

export interface Enrollment {
    id: number;
    userId: number;
    courseId: number;
    paymentId?: number;
    status: EnrollmentStatus;
    progressPercent: number;
    lastLessonId?: number;
    enrolledAt: string;
    completedAt?: string;
    courseName?: string;
    courseThumbnail?: string;
}

export interface LessonProgress {
    id: number;
    enrollmentId: number;
    lessonId: number;
    isCompleted: boolean;
    completedAt?: string;
}

export interface Certificate {
    id: number;
    userId: number;
    courseId: number;
    enrollmentId: number;
    certificateCode: string;
    fileUrl?: string;
    issuedAt: string;
    courseName?: string;
}

export interface Review {
    id: number;
    userId: number;
    courseId: number;
    rating: number;
    comment?: string;
    createdAt: string;
    userName?: string;
    userAvatar?: string;
}

export interface Wishlist {
    id: number;
    userId: number;
    courseId: number;
    createdAt: string;
    course?: Course;
}

export interface Notification {
    id: number;
    userId: number;
    type: NotificationType;
    title: string;
    message: string;
    referenceId?: number;
    isRead: boolean;
    isEmailed: boolean;
    createdAt: string;
}

export interface PageResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
}


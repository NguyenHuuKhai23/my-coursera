import CourseCard from "../../../components/common/CourseCard.js";

const CoursesGrid = () => {
    const courses = [
        { title: 'Basic React', instructor: 'Nguyen A', duration: '8 hours' },
        { title: 'Java Spring Boot', instructor: 'Tran B', duration: '12 hours' },
        { title: 'Python for Data Analysis', instructor: 'Le C', duration: '10 hours' },
        { title: 'UI/UX Design', instructor: 'Pham D', duration: '6 hours' },
    ];

    return (
        <section className="py-8">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Featured Courses
                    </h2>
                    <a
                        href="/courses"
                        className="text-sm text-gray-700 dark:text-gray-200 hover:text-blue-700"
                    >
                        View all &rarr;
                    </a>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {courses.map((c) => (
                       <CourseCard course={c}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesGrid;

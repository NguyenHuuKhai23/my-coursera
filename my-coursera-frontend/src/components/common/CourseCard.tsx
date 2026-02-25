type Props = {
    course: {
        title: string;
        instructor: string;
        duration: string;
    };    
};

const CourseCard = ({course}: Props) => {
    return (
        <article
            key={course.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
        >
            <div className="h-36 bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center text-white text-lg font-semibold">
                {course.title}
            </div>
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {course.instructor} • {course.duration}
                </p>
                <div className="mt-4 flex items-center justify-between">
                    <a
                        href="/courses"
                        className="text-sm text-blue-600 font-medium"
                    >
                        Details
                    </a>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                        Enroll
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CourseCard;
import heroImg from '@/assets/images/hero.png';

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-16 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24
             lg:grid-cols-12">
                {/* Left: text */}
                <div className="place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-4xl xl:text-5xl text-gray-900 dark:text-white">
                        In-depth online learning
                        <br />
                        from leading experts
                    </h1>

                    <p className="max-w-2xl mb-6 font-medium text-gray-600 md:text-lg lg:text-l dark:text-gray-300">
                        Participate in hundreds of structured courses — with hands-on exercises, real-world projects, and certificates of completion. Start your learning journey today.
                    </p>

                    <div className="flex items-center flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                        <a href="/signup" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
                            Start learning now
                        </a>

                        <a href="/courses" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:focus:ring-gray-800">
                            Explore Courses
                        </a>
                    </div>

                    <div className="mt-6">
                        <form className="flex w-full max-w-md rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                            <label htmlFor="search-courses" className="sr-only">Search courses</label>
                            <input id="search-courses" type="search" placeholder="Find a course, for example: React, Java" className="flex-1 px-4 py-2 text-sm bg-transparent focus:outline-none" />
                            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-r-md hover:bg-blue-700">Search</button>
                        </form>
                        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Suggestion: Search by the name of the course or skill you want to learn.</p>
                    </div>
                </div>

                {/* Right: image */}
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
                    <img src={heroImg} alt="Hero illustration" className="w-full max-w-md object-contain" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
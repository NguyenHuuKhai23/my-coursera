const Features = () => {
    const items = [
        {
            title: 'Learn with a structured roadmap',
            desc: 'The roadmap is designed to help you progress step by step with practical exercises.',
            icon: (
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
                </svg>
            ),
        },
        {
            title: 'Trusted instructors',
            desc: 'Courses are taught by dedicated experts with real-world examples.',
            icon: (
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor" />
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4v-1z" fill="currentColor" />
                </svg>
            ),
        },
        {
            title: 'Certificate upon completion',
            desc: 'Receive a completion certificate to enhance your professional profile.',
            icon: (
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3 6 6 .5-4.5 3.8L19 20l-7-4-7 4 1.5-7.7L2 8.5 8 8 12 2z" fill="currentColor" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why choose Mini Coursera?</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((it) => (
                        <div key={it.title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                            <div className="flex items-center space-x-4 mb-4">{it.icon}<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{it.title}</h3></div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{it.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;


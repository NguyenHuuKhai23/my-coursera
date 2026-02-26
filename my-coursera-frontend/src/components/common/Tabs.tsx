import type { ReactNode } from "react";
import { useState } from "react";

interface Tab {
    key: string;
    label: string;
    icon?: ReactNode;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

export default function Tabs({ tabs, defaultTab, className = "" }: TabsProps) {
    const [activeKey, setActiveKey] = useState(defaultTab || tabs[0]?.key);

    const activeTab = tabs.find((t) => t.key === activeKey);

    return (
        <div className={className}>
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveKey(tab.key)}
                        className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors
                            ${activeKey === tab.key
                                ? "border-blue-600 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="pt-4">{activeTab?.content}</div>
        </div>
    );
}


"use client";

import { useLanguage } from "@/components/LanguageContext";

export function About() {
    const { t } = useLanguage();

    const skills = {
        Frontend: [
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Angular",
            "Next.js",
            "Axios",
            "Tailwind",
            "Bootstrap"
        ],
        Backend: ["Python", "Django", "Django REST Framework"],
        Databases: ["Relational databases", "NoSQL databases"],
        "DevOps & Cloud": [
            "Docker",
            "Docker Compose",
            "CI/CD",
            "Azure",
            "Nginx"
        ],
        Tools: [
            "Git",
            "Linux",
            "Windows"
        ],
        Concepts: [
            "Web application architecture",
            "Debugging",
            "Basic automated testing",
            "REST APIs"
        ]
    };

    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/5 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.about.title}</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    <div className="space-y-6 text-lg text-foreground/80 leading-relaxed lg:col-span-2">
                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>
                        <p>{t.about.p3}</p>
                    </div>

                    <div className="bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm lg:col-span-3">
                        <h3 className="text-xl font-semibold mb-6 text-foreground border-b border-foreground/5 pb-3">
                            {t.about.techTitle}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-6">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="space-y-3">
                                    <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-widest">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 bg-foreground/5 text-foreground/80 rounded border border-foreground/5 text-xs font-medium hover:bg-primary hover:text-white transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

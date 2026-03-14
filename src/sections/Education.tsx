"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export function Education() {
    const { t } = useLanguage();
    const educationItems = t.education.items;

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-foreground/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.education.title}</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col gap-6">
                    {educationItems.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start border-b border-foreground/5 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center gap-4 mb-3 sm:mb-0">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image
                                        src={item.logo}
                                        alt={`${item.school} logo`}
                                        fill
                                        className="object-cover rounded-full border border-foreground/10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{item.school}</h3>
                                    <p className="text-foreground/70">{item.degree}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-start sm:items-end sm:ml-4">
                                <span className="text-sm font-medium text-foreground/80 bg-foreground/5 border border-foreground/10 px-3 py-1 rounded-full whitespace-nowrap">
                                    {item.period}
                                </span>
                                <span className="text-sm text-foreground/50 mt-2 px-1 font-medium">
                                    {item.location}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

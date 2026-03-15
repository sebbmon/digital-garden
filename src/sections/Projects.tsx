"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";

import { Dictionary } from "@/components/dictionaries";

export type Project = Dictionary["projects"]["items"][0];

export function Projects() {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // body scroll off when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            setCurrentImageIndex(0);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/5 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.projects.title}</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
                        {t.projects.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {t.projects.items.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-foreground/5 rounded-2xl overflow-hidden border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="flex flex-col flex-grow p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/70 flex-grow mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold px-2.5 py-1 bg-background text-foreground/80 rounded border border-foreground/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto w-fit"
                                >
                                    {t.projects.viewDetails}
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
                        <a
                            href="https://github.com/sebbmon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xl font-semibold text-primary hover:text-primary/80 transition-colors mt-6 w-fit group"
                        >
                            {t.projects.seeGitHub}
                            <svg
                                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </p>
                </div>

                {/* modal projektu */}
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
                            onClick={() => setSelectedProject(null)}
                        ></div>

                        <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 animate-fade-in-up border border-foreground/10">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-foreground/20 hover:bg-foreground/30 text-white mix-blend-difference rounded-full transition-colors z-20"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative h-64 sm:h-80 w-full">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                            </div>

                            <div className="p-6 sm:p-8 -mt-20 relative z-10">
                                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 drop-shadow-sm">
                                    {selectedProject.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-6 text-foreground/80 leading-relaxed bg-background/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-foreground/5 shadow-sm">
                                    <div>
                                        <h4 className="text-xl font-semibold text-foreground mb-2">{t.projects.overview}</h4>
                                        <p>{selectedProject.longDescription}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold text-foreground mb-2">{t.projects.keyFeatures}</h4>
                                        <ul className="list-disc pl-5 space-y-1">
                                            {selectedProject.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {selectedProject.images && selectedProject.images.length > 0 && (
                                    <div className="mt-8 relative h-64 sm:h-96 w-full rounded-xl overflow-hidden group border border-foreground/10 bg-foreground/5">
                                        <Image
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={`${selectedProject.title} gallery image ${currentImageIndex + 1}`}
                                            fill
                                            className="object-cover transition-opacity duration-300"
                                        />

                                        {selectedProject.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1))}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-background/60 hover:bg-background/90 backdrop-blur-md text-foreground rounded-full transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg border border-foreground/10"
                                                    aria-label="Previous image"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => setCurrentImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1))}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-background/60 hover:bg-background/90 backdrop-blur-md text-foreground rounded-full transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg border border-foreground/10"
                                                    aria-label="Next image"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>

                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-background/50 backdrop-blur-md px-3 py-2 rounded-full border border-foreground/10">
                                                    {selectedProject.images.map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentImageIndex(idx)}
                                                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-primary w-6 shadow-[0_0_8px_rgba(var(--primary),0.8)]" : "bg-foreground/50 hover:bg-foreground/80 w-2"}`}
                                                            aria-label={`Go to slide ${idx + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
                                    >
                                        {t.projects.visitProject}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-6 py-3 bg-foreground/5 text-foreground rounded-lg font-medium hover:bg-foreground/10 transition-colors"
                                    >
                                        {t.projects.close}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
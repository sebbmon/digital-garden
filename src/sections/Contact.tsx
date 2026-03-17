"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export function Contact() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const data = new FormData(form);

        const res = await fetch("https://formspree.io/f/mgonppdj", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (res.ok) {
            setIsSubmitted(true);
            form.reset();
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.contact.title}</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-foreground/70 max-w-2xl mx-auto text-lg">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="bg-background rounded-2xl p-8 sm:p-12 shadow-sm border border-foreground/10 max-w-2xl mx-auto">
                    {isSubmitted ? (
                        <div className="text-center py-12 animate-fade-in-up">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{t.contact.successMsg}</h3>
                            <p className="text-foreground/70">
                                {t.contact.successDesc}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                                        {t.contact.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder={t.contact.namePlaceholder}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                                        {t.contact.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                                        placeholder={t.contact.emailPlaceholder}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                                    {t.contact.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                                    placeholder={t.contact.messagePlaceholder}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {t.contact.sending}
                                    </>
                                ) : (
                                    t.contact.send
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export const dictionaries = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            greeting: "Hello, my name is",
            name: "Sebastian",
            tagline: "I build exceptional and accessible digital experiences for the web. Focused on minimal design and simplicity.",
            viewWork: "View My Work",
            contactMe: "Contact Me"
        },
        about: {
            title: "About Me",
            p1: "I am a passionate Software Engineer with a strong focus on creating beautiful, intuitive, and highly performant web applications. With expertise in the modern web stack, I turn complex problems into elegant solutions.",
            p2: "My journey began in 2017 when I discovered the power of programming, and since then, I have been dedicated to learning new architecture patterns, optimizing rendering performance, and crafting smooth animations.",
            p3: "When I'm not coding, you can find me playing football or travelling.",
            techTitle: "Technologies I work with:"
        },
        education: {
            title: "Education",
            present: "Present",
            items: [
                {
                    id: 1,
                    school: "Zespół Szkół Mechaniczno Elektrycznych",
                    degree: "IT Technician",
                    period: "Sep 2017 - May 2021",
                    location: "Tarnów",
                    logo: "/images/uni/zsme.png"
                },
                {
                    id: 2,
                    school: "Uniwersytet Komisji Edukacji Narodowej",
                    degree: "B.Sc. in Computer Science",
                    period: "Oct 2022 - Feb 2026",
                    location: "Kraków",
                    logo: "/images/uni/uken.jpg"
                },
                {
                    id: 3,
                    school: "Politechnika Krakowska im. Tadeusza Kościuszki",
                    degree: "M.Sc. in Computer Science",
                    period: "Feb 2026 - Jun 2027",
                    location: "Kraków",
                    logo: "/images/uni/pk.jpg"
                }
            ]
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Here are a few projects I've worked on recently. Each project represents a unique challenge and a creative solution.",
            viewDetails: "View Details",
            seeGitHub: "See more projects on GitHub",
            overview: "Overview",
            keyFeatures: "Key Features",
            visitProject: "Visit Project",
            close: "Close",
            items: [
                {
                    id: 1,
                    title: "Remote Display Management Platform",
                    description: "A system for displaying multimedia content on electronic screens to share information, advertisements and announcements in real time.",
                    longDescription: "The main goal was to let admins control what content is shown and schedule it easily. I built the playlist and scheduling features using Angular and TypeScript, keeping the code modular so it is easier to maintain. I also set up Docker for the app, wrote a Docker Compose file to run multiple services together, and created a simple CI/CD pipeline to automate builds and deployments.",
                    features: ["User authentication", "Media content management", "Playlist management", "Scheduling", "RESTful API", "Real time device status"],
                    image: "/images/projects/signage/2.png",
                    tags: ["TypeScript", "Angular", "Docker", "CI/CD", "Linux"],
                    link: "https://github.com/sebbmon/digital-signage-frontend",
                    images: ["/images/projects/signage/1.png", "/images/projects/signage/2.png", "/images/projects/signage/3.png", "/images/projects/signage/4.png", "/images/projects/signage/5.png", "/images/projects/signage/6.png", "/images/projects/signage/7.png", "/images/projects/signage/8.png"]
                },
                {
                    id: 2,
                    title: "MonCar - Car Rental Company",
                    description: "Full-stack academic car rental system built with PHP, JavaScript and MySQL.",
                    longDescription: "The application allows users to browse the available fleet, post reviews, and features secure form handling to protect against SQL Injection attacks.",
                    features: ["User authentication", "User reviews", "Image gallery", "Contact form", "Fleet browsing", "Responsive Design"],
                    image: "/images/projects/moncar/1.png",
                    tags: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
                    link: "https://github.com/sebbmon/moncar-car-rental-fullstack",
                    images: ["/images/projects/moncar/1.png", "/images/projects/moncar/2.png", "/images/projects/moncar/3.png", "/images/projects/moncar/4.png"]
                },
                {
                    id: 3,
                    title: "Blog Application",
                    description: "A blog application built with Python, Django Templates which allows user to create and manage posts.",
                    longDescription: "Developed a blogging application using Django. Implemented user authentication, post and comment management, and user profile views. Designed relational database models and handled data validation and permissions at the backend level.",
                    features: ["User authentication", "Post management - Full CRUD", "Comments system", "User profiles", "Pagination", "Responsive Design"],
                    image: "/images/projects/blog/1.png",
                    tags: ["Python", "Django", "SQLite", "Bootstrap"],
                    link: "https://github.com/sebbmon/blog",
                    images: ["/images/projects/blog/1.png", "/images/projects/blog/2.png", "/images/projects/blog/3.png"]
                },
                {
                    id: 4,
                    title: "Simple ToDo Application",
                    description: "My first Django project which served as a key learning experience for building full-stack applications",
                    longDescription: "A simple Task Manager that allows users to create, edit, delete, and mark tasks as completed or incomplete",
                    features: ["Task management - Full CRUD", "Task status toggling", "Task prioritization", "Sorting and filtering", "ResponsiveDesign"],
                    image: "/images/projects/todo/1.png",
                    tags: ["Python", "Django", "SQLite", "Bootstrap"],
                    link: "https://github.com/sebbmon/todo",
                    images: ["/images/projects/todo/1.png"]
                }
            ]
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.",
            successMsg: "Message Sent!",
            successDesc: "Thank you for reaching out. I'll be in touch shortly.",
            name: "Name",
            email: "Email",
            message: "Message",
            namePlaceholder: "John Doe",
            emailPlaceholder: "john@example.com",
            messagePlaceholder: "How can I help you?",
            send: "Send Message",
            sending: "Sending..."
        },
        footer: {
            builtWith: "Built with Next.js 14 and Tailwind CSS v4."
        }
    },
    pl: {
        nav: {
            home: "Start",
            about: "O mnie",
            education: "Edukacja",
            projects: "Projekty",
            contact: "Kontakt"
        },
        hero: {
            greeting: "Cześć, jestem",
            name: "Sebastian",
            tagline: "Projektuję i tworzę nowoczesne aplikacje webowe, koncentrując się na prostocie i minimalistycznym designie.",
            viewWork: "Moje projekty",
            contactMe: "Skontaktuj się"
        },
        about: {
            title: "O mnie",
            p1: "Jestem inżynierem oprogramowania z pasją do tworzenia pięknych, intuicyjnych i wysoce wydajnych aplikacji internetowych. Dzięki doświadczeniu w nowoczesnych technologiach weebowych zamieniam skomplikowane problemy w proste, eleganckie rozwiązania.",
            p2: "Moja podróż z programowaniem rozpoczęła się w 2017 roku. Od tego czasu nieustannie zgłębiam nowe wzorce architektoniczne, optymalizuję wydajność i tworzę funkcjonalne aplikacje.",
            p3: "Kiedy nie koduję, najprawdopodobniej gram w piłkę nożną lub podróżuję.",
            techTitle: "Technologie, z którymi pracuję:"
        },
        education: {
            title: "Edukacja",
            present: "Obecnie",
            items: [
                {
                    id: 1,
                    school: "Zespół Szkół Mechaniczno Elektrycznych",
                    degree: "Technik Informatyk",
                    period: "Wrz 2017 - Maj 2021",
                    location: "Tarnów",
                    logo: "/images/uni/zsme.png"
                },
                {
                    id: 2,
                    school: "Uniwersytet Komisji Edukacji Narodowej",
                    degree: "Inżynier Informatyki",
                    period: "Paź 2022 - Lut 2026",
                    location: "Kraków",
                    logo: "/images/uni/uken.jpg"
                },
                {
                    id: 3,
                    school: "Politechnika Krakowska im. Tadeusza Kościuszki",
                    degree: "Magister Informatyki",
                    period: "Lut 2026 - Cze 2027",
                    location: "Kraków",
                    logo: "/images/uni/pk.jpg"
                }
            ]
        },
        projects: {
            title: "Wybrane Projekty",
            subtitle: "Oto kilka projektów, nad którymi ostatnio pracowałem. Każdy z nich stanowił unikalne wyzwanie, które wymagało kreatywnego rozwiązania.",
            viewDetails: "Zobacz Szczegóły",
            seeGitHub: "Zobacz więcej na GitHub",
            overview: "Opis",
            keyFeatures: "Kluczowe Funkcje",
            visitProject: "Odwiedź Projekt",
            close: "Zamknij",
            items: [
                {
                    id: 1,
                    title: "Zdalny System Zarządzania Treścią Wideo",
                    description: "System do wyświetlania treści multimedialnych na ekranach w celu udostępniania informacji, ogłoszeń i reklam w czasie rzeczywistym.",
                    longDescription: "Głównym celem było umożliwienie administratorom łatwego kontrolowania i harmonogramowania wyświetlanych treści. Stworzyłem funkcje zarządzania listami odtwarzania za pomocą Angulara i TypeScripta, dbając o modułowość kodu. Wdrożyłem również środowisko oparte o Docker/Docker Compose i prosty system ciągłej integracji CI/CD.",
                    features: ["Uwierzytelnianie", "Zarządzanie mediami", "Zarządzanie playlistami", "Harmonogramowanie", "RESTful API", "Status urządzeń w czasie rzeczywistym"],
                    image: "/images/projects/signage/2.png",
                    tags: ["TypeScript", "Angular", "Docker", "CI/CD", "Linux"],
                    link: "https://github.com/sebbmon/digital-signage-frontend",
                    images: ["/images/projects/signage/1.png", "/images/projects/signage/2.png", "/images/projects/signage/3.png", "/images/projects/signage/4.png", "/images/projects/signage/5.png", "/images/projects/signage/6.png", "/images/projects/signage/7.png", "/images/projects/signage/8.png"]
                },
                {
                    id: 2,
                    title: "MonCar - Wypożyczalnia samochodów",
                    description: "Akademicki projekt wypożyczalni samochodów oparty o PHP, JavaScript i MySQL.",
                    longDescription: "Aplikacja pozwala użytkownikom na przeglądanie dostępnej floty pojazdów, dodawanie recenzji, oraz oferuje bezpieczną obsługę formularzy (zabezpieczoną m.in. przed atakami typu SQL Injection).",
                    features: ["Uwierzytelnianie", "Recenzje użytkowników", "Galeria zdjęć", "Formularz kontaktowy", "Przegląd floty", "Responsywny design"],
                    image: "/images/projects/moncar/1.png",
                    tags: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
                    link: "https://github.com/sebbmon/moncar-car-rental-fullstack",
                    images: ["/images/projects/moncar/1.png", "/images/projects/moncar/2.png", "/images/projects/moncar/3.png", "/images/projects/moncar/4.png"]
                },
                {
                    id: 3,
                    title: "Aplikacja Blog",
                    description: "Aplikacja blogowa zbudowana z użyciem Pythona i Django Templates, pozwalająca użytkownikom na tworzenie i zarządzanie wpisami.",
                    longDescription: "Zaprojektowałem i wdrożyłem aplikację blogową. Implementacja obejmuje system kont użytkowników, zarządzanie wpisami, komentarzami oraz widokiem profilu. Zaprojektowałem relacyjną bazę danych z walidacją danych na poziomie serwera.",
                    features: ["Logowanie", "Pełny CRUD dla postów", "System komentarzy", "Profile użytkowników", "Paginacja", "Responsywny design"],
                    image: "/images/projects/blog/1.png",
                    tags: ["Python", "Django", "SQLite", "Bootstrap"],
                    link: "https://github.com/sebbmon/blog",
                    images: ["/images/projects/blog/1.png", "/images/projects/blog/2.png", "/images/projects/blog/3.png"]
                },
                {
                    id: 4,
                    title: "Prosta Aplikacja ToDo",
                    description: "Mój pierwszy projekt w technologii Django, który posłużył jako kluczowe środowisko do nauki tworzenia aplikacji full-stack.",
                    longDescription: "Prosty menedżer zadań, z możliwością tworzenia, edytowania, usuwania i zaznaczania zadań jako ukończone lub nieukończone.",
                    features: ["Zarządzanie zadaniami", "Zmiana statusów zadań", "Priorytetyzacja zadań", "Sortowanie i filtrowanie", "Responsywny design"],
                    image: "/images/projects/todo/1.png",
                    tags: ["Python", "Django", "SQLite", "Bootstrap"],
                    link: "https://github.com/sebbmon/todo",
                    images: ["/images/projects/todo/1.png"]
                }
            ]
        },
        contact: {
            title: "Skontaktuj się ze mną",
            subtitle: "Masz pytanie lub chcesz nawiązać współpracę? Zostaw swoje dane, a ja na pewno na nie odpowiem.",
            successMsg: "Wiadomość wysłana!",
            successDesc: "Dziękuję za kontakt. Odezwię się wkrótce.",
            name: "Imię",
            email: "Email",
            message: "Wiadomość",
            namePlaceholder: "Jan Kowalski",
            emailPlaceholder: "jan@example.com",
            messagePlaceholder: "W czym mogę pomóc?",
            send: "Wyślij wiadomość",
            sending: "Wysyłanie..."
        },
        footer: {
            builtWith: "Zbudowane w Next.js 14 oraz Tailwind CSS v4."
        }
    }
};

export type Language = keyof typeof dictionaries;
export type Dictionary = typeof dictionaries.en;

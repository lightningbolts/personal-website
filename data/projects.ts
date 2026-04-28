// Project data for portfolio showcase
export interface Project {
    id: string
    title: string
    description: string
    longDescription: string
    techStack: string[]
    image: string
    github?: string
    demo?: string
    featured: boolean
}

export const projects: Project[] = [
    {
        id: 'click-platforms',
        title: 'Click Platforms',
        description: 'Kotlin Multiplatform app for verified in-person connections. Supabase real-time chat, LiveKit calls, and memory capsules.',
        longDescription:
            'Click is a people-first social utility: Compose Multiplatform for Android and iOS, tri-factor proximity (BLE, ultrasonic, progressive GPS), Supabase real-time chat, LiveKit calls, and memory capsules—fewer infinite feeds, more real-world presence.',
        techStack: [
            'Kotlin',
            'Compose Multiplatform',
            'Android',
            'iOS',
            'Supabase',
            'LiveKit',
            'Ktor',
        ],
        image: '/projects/click_platforms.png',
        github: 'https://github.com/lightningbolts/click',
        featured: true,
    },
    {
        id: 'click-web',
        title: 'Click Web',
        description: 'Next.js companion: dashboard, chat, LiveKit, and venue insights.',
        longDescription:
            'The web companion to Click—App Router, Supabase auth and real-time data, in-browser voice via LiveKit, secure auth callbacks, and Click for Business analytics for venues and promoters. ',
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Supabase',
            'LiveKit',
        ],
        image: '/projects/click_web.png',
        github: 'https://github.com/lightningbolts/click-web',
        demo: 'https://click-web-delta.vercel.app',
        featured: true,
    },
    {
        id: 'statepulse',
        title: 'StatePulse',
        description: 'Interactive legislative tracking system. Powered by custom web scrapers, natural language processing, and a robust notification system to keep users informed of policy changes.',
        longDescription: 'A comprehensive platform for tracking legislative activity across multiple states in real-time. Powered by custom web scrapers, natural language processing, and a robust notification system to keep users informed of policy changes.',
        techStack: ['React', 'Next.js', 'Typescript', 'MongoDB', 'Python', 'Azure', 'Tailwind CSS', 'MapLibre GL', 'Gemini API'],
        image: '/projects/statepulse.png',
        github: 'https://github.com/lightningbolts/state-pulse',
        demo: 'https://statepulse.me',
        featured: true,
    },
    {
        id: 'anor',
        title: 'Anor',
        description: 'Privacy-first URL burner',
        longDescription: 'A secure, privacy-focused URL shortener with self-destructing links. Inspired by the Elvish word for "flame," Anor creates temporary links that expire after a set time or number of uses, ensuring your shared content stays private.',
        techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
        image: '/projects/anor.png',
        github: 'https://github.com/lightningbolts/anor',
        demo: 'https://anor-mine.vercel.app',
        featured: true,
    },
    {
        id: 'personal-website',
        title: 'Personal Website',
        description: 'The portfolio you are browsing—yes, it lists itself.',
        longDescription:
            'This site: Next.js App Router, Tailwind CSS, Framer Motion, MDX blog, and dark mode. Open source and deployed on Vercel.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MDX'],
        image: '/projects/personal_website.jpg',
        github: 'https://github.com/lightningbolts/personal-website',
        demo: 'https://kairui-cheng.vercel.app/',
        featured: false,
    },
    {
        id: 'tycoon',
        title: 'Tycoon',
        description: 'A modern take on the 1979 classic "Tycoon" game',
        longDescription: 'A web-based simulation game where players build and manage their own business empire. Inspired by the classic "Tycoon" game, it features modern theming and a dynamic economy system.',
        techStack: ['React', 'Node.js', 'Tailwind CSS'],
        image: '/projects/tycoon.png',
        github: 'https://github.com/lightningbolts/tycoon',
        demo: 'https://tycoon-1b.vercel.app',
        featured: false,
    },
    {
        id: 'baseball-sim',
        title: 'Baseball Simulator',
        description: 'MLB schedule–aware season simulator with Gemini',
        longDescription:
            'Simulates the 2026 season with real schedule loading, team data, and an AI Studio–style React + TypeScript + Vite stack.',
        techStack: ['TypeScript', 'React', 'Vite', 'Gemini API', 'Python'],
        image: '/projects/baseball_sim.jpg',
        github: 'https://github.com/lightningbolts/Baseball-Sim',
        demo: 'https://lightningbolts.github.io/Baseball-Sim/',
        featured: false,
    },
    {
        id: 'crop-connect',
        title: 'Crop Connect',
        description: 'Minimalist food volunteer and bank matching app',
        longDescription: 'A mobile-friendly web application that connects food donors with local food banks and pantries. Users can easily donate surplus food and find nearby food assistance resources.',
        techStack: ['React', 'Leaflet', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        image: '/projects/crop_connect.png',
        github: '',
        demo: 'https://crop-connect.vercel.app',
        featured: false,
    },
    {
        id: 'digit-recognition',
        title: 'Digit Recognition',
        description: 'Handwritten digit recognition using CNNs',
        longDescription: 'A machine learning project that utilizes convolutional neural networks (CNNs) to accurately recognize and classify handwritten digits from the MNIST dataset. The model is trained and evaluated using Python and TensorFlow.',
        github: 'https://github.com/lightningbolts/digit-recognition',
        image: '/projects/digit_recognition.png',
        techStack: ['Python', 'TensorFlow'],
        demo: '',
        featured: false,
    },
    {
        id: 'pathfinder',
        title: 'Pathfinder',
        description: 'Maze pathfinding visualizer',
        longDescription: 'An interactive web application that visualizes different pathfinding algorithms. Users can create custom grids, set start and end points, and watch as the algorithm finds the shortest path in real-time.',
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        image: '/projects/pathfinder.png',
        github: 'https://github.com/lightningbolts/pathfinder',
        demo: 'https://pathfinder-psi.vercel.app',
        featured: false,
    },
    // Older work — listed newest-first within this group; least recent appears last (Snake Game).
    {
        id: 'taipan-benchmarks',
        title: 'Taipan Benchmarks',
        description: 'Next.js site for publishing and comparing CPU benchmarks',
        longDescription:
            'A Next.js frontend where users download native benchmarks, run them, and results sync to the site—Taipan Benchmarks branding and straightforward downloads for Windows, macOS, and Linux.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
        image: '/projects/taipan_benchmarks.jpg',
        github: 'https://github.com/lightningbolts/taipan-benchmarks',
        demo: 'https://taipan-benchmarks.vercel.app/',
        featured: false,
    },
    {
        id: 'cpu-benchmark',
        title: 'CPU Benchmark',
        description: 'Native prime and numeric benchmarks (C) with a results UI',
        longDescription:
            'Cross-platform C benchmarks (Linux, macOS, Windows) with OpenSSL-linked builds, plus a web surface for exploring runs— oriented toward reproducible CPU measurements.',
        techStack: ['C', 'Python', 'JavaScript', 'Rust'],
        image: '/projects/cpu_benchmark.jpg',
        github: 'https://github.com/lightningbolts/CPU-Benchmark',
        featured: false,
    },
    {
        id: 'lichess-bot-leaderboards',
        title: 'Lichess Bot Leaderboards',
        description: 'Automated leaderboards for Lichess engine bots by time control',
        longDescription:
            'Python-driven pipeline that maintains text leaderboards for Lichess bots across bullet, blitz, rapid, classical, chess960, variants, and more.',
        techStack: ['Python'],
        image: '/projects/lichess_bot_leaderboards.jpg',
        github: 'https://github.com/lightningbolts/Lichess-Bot-Leaderboards',
        featured: false,
    },
    {
        id: 'taipan-server',
        title: 'Taipan-Server',
        description: 'Kotlin game server (Taipan ecosystem fork)',
        longDescription:
            'A Kotlin/Gradle server fork in the Taipan-Fusion lineage—game backend plumbing and networking for the Taipan stack.',
        techStack: ['Kotlin', 'Gradle'],
        image: '/projects/taipan_server.png',
        github: 'https://github.com/lightningbolts/Taipan-Server',
        featured: false,
    },
    {
        id: 'math-bot',
        title: 'Discord Math Bot',
        description: 'Discord bot for math commands and helpers',
        longDescription:
            'Node.js Discord bot with slash commands, modular commands/events, and deploy scripts—focused on math utilities in chat.',
        techStack: ['JavaScript', 'Node.js', 'Discord.js'],
        image: '/projects/math_bot.jpg',
        github: 'https://github.com/lightningbolts/mathBot',
        featured: false,
    },
    {
        id: 'calculus-calculator',
        title: 'Calculus Calculator',
        description: 'Web differential calculator with graphing notes powered by Desmos. Symbolic parsing and evaluation.',
        longDescription:
            'A simple differential calculator in the browser: expression input with LaTeX-style guidance, basic trig and ln support, and notes on graphing behavior.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        image: '/projects/calculus_calculator.jpg',
        github: 'https://github.com/lightningbolts/Calculus_Calculator',
        demo: 'https://lightningbolts.github.io/Calculus_Calculator/',
        featured: false,
    },
    {
        id: 'math-bot-server',
        title: 'Discord Math Bot Server',
        description: 'Python companion server for math bot workflows',
        longDescription:
            'Python backend (`prog_lang_app.py`) supporting Discord math bot scenarios—lightweight server-side logic separate from the Discord client.',
        techStack: ['Python'],
        image: '/projects/math_bot_server.png',
        github: 'https://github.com/lightningbolts/mathBotServer',
        featured: false,
    },
    {
        id: 'voice-interval-counter',
        title: 'Voice Interval Counter',
        description: 'Text-to-speech interval counter in the browser',
        longDescription:
            'Client-side interval counting with the Web Speech API: pick voice, volume, rate, and pitch; start, pause, resume, and reset timed counts.',
        techStack: ['JavaScript', 'HTML', 'CSS', 'Web Speech API'],
        image: '/projects/voice_interval_counter.jpg',
        github: 'https://github.com/lightningbolts/VoiceIntervalCounter',
        demo: 'https://lightningbolts.github.io/VoiceIntervalCounter/',
        featured: false,
    },
    {
        id: 'snake-game',
        title: 'Snake Game',
        description: 'Classic snake with board, snake colors, and grid size options',
        longDescription:
            'A browser snake game with customizable board, head, and body colors, selectable grid sizes, score tracking, and GitHub Pages hosting.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        image: '/projects/snake_game.jpg',
        github: 'https://github.com/lightningbolts/Snake-Game',
        demo: 'https://lightningbolts.github.io/Snake-Game/',
        featured: false,
    },
]

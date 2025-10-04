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
        id: 'statepulse',
        title: 'StatePulse',
        description: 'Interactive legislative tracking system',
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
    }
]

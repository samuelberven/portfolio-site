// Education data
export const education = [
    { degree: "B.Sc. in Computer Science", 
        school: "Oregon State University", 
        year: "2024",
        gpa: "3.8/4.0",
        location: "Corvallis, OR",
        coursework: "Data Structures & Algorithms, Web Development, Software Engineering, Computer Architecture & Assembly, Databases, Operating Systems, Parallel Programming"
    },
  ];

// Technical skills data
export const technicalSkills  = [
    // Languages
    { name: "JavaScript", category: "Languages & Databases", icon: null },
    { name: "TypeScript", category: "Languages", icon: null },
    { name: "Python", category: "Languages", icon: null },
    { name: "Ruby", category: "Languages", icon: null },
    // { name: "C#", category: "Languages", icon: null },
    // { name: "Go", category: "Languages", icon: null },
    // { name: "C/C++", category: "Languages", icon: null },

    { name: "SQL", category: "Languages", icon: null },
    { name: "PostgreSql", category: "Languages", icon: null },
    { name: "MySQL", category: "Languages", icon: null },

    { name: "NoSQL", category: "Languages", icon: null },
    { name: "HTML", category: "Languages", icon: null },
    { name: "CSS", category: "Languages", icon: null },

    { name: "React Native", category: "Framework Frameworks" },
    { name: "React", category: "Framework Frameworks" },
    { name: "Vue", category: "Frontend Frameworks", icon: null },

    { name: "Deno", category: "Backend Frameworks", icon: null },
    { name: "Node.js", category: "Backend Frameworks", icon: null },
    { name: "Express.js", category: "Backend Frameworks", icon: null },

    { name: "unittest", category: "Libraries", icon: null },
    { name: "pytest", category: "Libraries", icon: null },
    { name: "OpenGL", category: "Libraries", icon: null },

    { name: "Docker", category: "Cloud & Dev Ops", icon: null },
    { name: "Severless Functions", category: "Cloud & Dev Ops", icon: null },
    { name: "Supabase", category: "Cloud & Dev Ops", icon: null },
    { name: "CI/CD", category: "Cloud & Dev Ops", icon: null },

    { name: "Git", category: "Methodologies & Developer Tools", icon: null },
    { name: "GitHub", category: "Methodologies & Developer Tools", icon: null },
    { name: "Agile", category: "Methodologies & Developer Tools", icon: null },
    { name: "REST", category: "Methodologies & Developer Tools", icon: null },
    { name: "Test-driven Design", category: "Methodologies & Developer Tools", icon: null },
    { name: "Object Oriented Programming", category: "Methodologies & Developer Tools", icon: null },
    { name: "Microservices", category: "Methodologies & Developer Tools", icon: null },
    { name: "Bash", category: "Methodologies & Developer Tools", icon: null },
    { name: "Linux", category: "Methodologies & Developer Tools", icon: null },
]

  // Biography data
export const biography = [
    {
        "name": "Samuel Berven",
        "title": "Software Engineer",
        "description": [
            "Welcome to my portfolio. I'm a fresh Computer Science graduate from Oregon State University looking for a new grad/entry-level software engineering role where I can continue learning and work on real-world, impactful projects.",
            "My path is a bit unique, as I've worked as a professional Japanese-English translator for 10 years before transitioning into software engineering. That translation background has sharpened my attention to detail, deadline management, and teamwork—skills I now bring to software development."
        ]
    }
]

// Social media links
export const socialMedia = [
    { "name": "GitHub", "url": "https://github.com/samuelberven", "icon": null },
    { "name": "LinkedIn", "url": "https://www.linkedin.com/in/samuelberven", "icon": null }
]

// Technical skills data
export const skills = [
    {
        "frontend": [
            {
                "name": "HTML",
                "iconLink": ""
            },
            {
                "name": "CSS",
                "iconLink": ""
            },
            {
                "name": "JavaScript",
                "iconLink": ""
            },
            {
                "name": "TypeScript",
                "iconLink": ""
            },
            {
                "name": "React",
                "iconLink": ""
            },
            {
                "name": "React Native",
                "iconLink": ""
            },    
            {
                "name": "Figma",
                "iconLink": ""
            }     
        ],
        "backend": [
            {
                "name": "Python",
                "iconLink": ""
            },
            {
                "name": "Node.js",
                "iconLink": ""
            },
            {
                "name": "Express",
                "iconLink": ""
            },
            {
                "name": "Deno",
                "iconLink": ""
            },
            {
                "name": "Docker",
                "iconLink": ""
            }
        ],
        "databases": [
            {
                "name": "PostgreSQL",
                "iconLink": ""
            },
            {
                "name": "MySQL",
                "iconLink": ""
            },
            {
                "name": "MariaDB",
                "iconLink": ""
            },
            {
                "name": "Supabase",
                "iconLink": ""
            },
            {
                "name": "MongoDB",
                "iconLink": ""
            }
        ],
        "other": [
            {
                "name": "Bash",
                "iconLink": ""
            },
            {
                "name": "Linux",
                "iconLink": ""
            },
            {
                "name": "Thunder Client",
                "iconLink": ""
            },
            {
                "name": "Supabase Edge Functions",
                "iconLink": ""
            },
            {
                "name": "Netlify",
                "iconLink": ""
            }
        ]
    }
    
]

  // Projects data
export const projects = [
    // FitTogether data
    {   "name": "Fit Together - Mobile App",
        "stack": ["React Native (Expo)", "TypeScript", "Deno", "PostgreSQL", "Supabase"],
        "categories": ["Mobile", "Full Stack", "Web"],
        "description": [
            "Leveraged Supabase cloud functions for routes and utility functions, with CORS for data security",
            "Designed and optimized PostgreSQL database, with interaction via Supabase’s object-relational mapping (ORM)",
            "Full deployment process, including linting, GitHub Actions, and frontend deployment via Netlify",
            "Reduced cloud costs by configuring dev-use Node.js server, optimizing resource usage and deployment workflows"
        ],
        "github_url": "https://github.com/samuelberven/Crowd-sourced-Fitness-Challenge-App",
        "deploy_url": "https://fit-together-react-native.netlify.app"
    },

    // Lift Logger data
    {   "name": "Lift Logger",
        "stack": ["React", "TypeScript", "Rails", "Ruby", "SQLite"],
        "categories": ["Full Stack", "Web"],
        "description": [
            "Developed a full-stack web app with a REST API to connect the frontend and backend",
            "Built a dynamic SPA using React, using state management to handle user interactions and workout data",
            "Implemented MongoDB for efficient storage and retrieval of workout logs",
        ],
        "github_url": "https://github.com/samuelberven/lift-logger",
        "deploy_url": null
    },

    // StoreSync data
    {   "name": "Lift Logger",
        "stack": ["JavaScript", "Node.js", "Express.js", "MariaDB", "Python", "ZeroMQ"],
        "categories": ["Full Stack", "Web"],
        "description": [
            "Built a dynamic SPA using React, using state management to handle user interactions and workout data",
            "Implemented MariaDB for efficient storage and retrieval of workout logs",
            "Implemented a microservice architecture to ensure database scalability and separation of concerns",
            "Used ZeroMQ for low-latency, real-time communication between microservices and main app",
            "Enhanced data security by isolating internal and customer data",
            "Optimized SQL schema design and normalized tables for better data integrity and query performance",
            "Used ZeroMQ for low-latency, real-time communication between microservices and main app",
            "Designed a microservice architecture to ensure database scalability and separation of concerns"            
        ],
        "github_url": "https://github.com/samuelberven/lift-logger",
        "deploy_url": null
    },

    // Command Line Mancala data
    {   "name": "Command Line Mancala",
        "stack": ["Python", "pytest"],
        "categories": ["CLI", "Software"],
        "description": [
            "Developed an interactive Mancala variant with output shown in the terminal",
            "Implemented game logic for Mancala rules including stone capturing and sowing, scoring, and special rules",
            "Leveraged pytest to carry out test-driven development and ensure code functionality and quality"
        ],
        "github_url": "https://github.com/samuelberven/terminal-mancala",
        "deploy_url": null
    },
];







import { Github} from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: "House Price Prediction",
            description: "Built a Random Forest model to predict house prices, including data preprocessing, model evaluation (MAE, RMSE, R²), a prediction script for new datasets, and an interactive Streamlit web app for real-time predictions.",
            tech: ["Python", "scikit-learn", "Streamlit", "pandas", "joblib"],
            github: "https://github.com/Tharushi-Umesha/ml-house-price-predictor"
        },
        {
            title: "Expense Tracker",
            description: "Built a Windows desktop app for expense categorization, dashboards, and CRUD using WinForms and SQL Server (ADO.NET), enhancing skills in desktop design and database connectivity.",
            tech: ["C#", ".NET Framework 4.7.2", "SQL Server", "WinForms"],
            github: "https://github.com/Tharushi-Umesha/Expense-Tracker"
        },
        {
            title: "School Management System",
            description: "Comprehensive management system with student/teacher modules, grade tracking, role-based authentication, and MySQL database.",
            tech: ["Next.js", "FastAPI", "MySQL"],
            github: "https://github.com/Tharushi-Umesha/school-management-system"
        },
        {
            title: "News API Analyzer",
            description: "News analysis application with data parsing, content categorization, and REST API integration for Programming Paradigms module.",
            tech: ["Go", "REST APIs"],
            github: "https://github.com/Tharushi-Umesha/news-api-analyzer"
        },
        {
            title: "Library Room Booking System",
            description: "Built a full-stack web app with room booking, cancellation, and availability tracking. Designed a responsive frontend and integrated an AI chatbot for booking support and admin management.",
            tech: ["Python", "HTML", "CSS", "JavaScript", "AI Chatbot"],
            github: "https://github.com/Tharushi-Umesha/library-management-system"
        },
        {
            title: "Project Management System",
            description: "A modern task and project management system built with Next.js (frontend) and FastAPI with Python (backend). Features secure user authentication, role-based access control, comprehensive task management, and a beautiful responsive UI.",
            tech: ["Next.js", "FastAPI", "MySQL"],
            github: "https://github.com/Tharushi-Umesha/novavantix_project"
        },
        {
            title: "Business AI Agent",
            description: "Developed an AI-powered task management assistant that interprets natural-language requests and uses LLM tool calling to manage business tasks. Integrated Python tools with PostgreSQL for persistent task creation, retrieval, completion, and deletion, using a locally running Qwen 2.5 3B model through Ollama.",
            tech: [
                "Python",
                "Streamlit",
                "Ollama",
                "Qwen 2.5 3B",
                "PostgreSQL",
                "LLM Tool Calling"
            ],
            github: "https://github.com/Tharushi-Umesha/business-ai-agent"
        }
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center relative px-4 py-20"
        >
            <div className="max-w-6xl mx-auto w-full px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects showcasing my skills in full-stack development,
                        machine learning, and software engineering.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-6 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 transition-all duration-300 hover:bg-blue-500/30 hover:scale-105"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                >
                                    <Github size={18} />
                                    <span className="text-sm font-medium">View Code</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Tharushi-Umesha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105"
                    >
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
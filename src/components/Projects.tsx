import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

interface ProjectModal {
  problem: string;
  architecture: string[];
  decisions: string[];
  challenges: string[];
  capabilities: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  modal: ProjectModal;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'devOrbit — AI Bug Intelligence',
    description:
      'Built a multi-user bug intelligence platform enabling role-based collaboration and secure issue tracking. Architected using Next.js, MongoDB, and JWT/OAuth authentication. Integrated AI-based severity classification for automated triage.',
    modal: {
      problem:
        'Engineering teams lack centralized, intelligent workflows for bug tracking. Most tools treat bugs as flat tickets without severity context. devOrbit solves this by combining role-based team collaboration with AI-powered bug analysis to automate triage and prioritization.',
      architecture: [
        'Frontend: Next.js with TypeScript and TailwindCSS',
        'Backend: Next.js API routes with server-side logic',
        'Database: MongoDB with Mongoose ODM',
        'Auth: JWT tokens + Social OAuth (Google, GitHub)',
        'AI: Xenova/Transformers for on-device severity classification',
        'Deployment: Vercel (frontend + API)',
      ],
      decisions: [
        'JWT over sessions — enables stateless authentication across serverless API routes, reducing cold-start complexity on Vercel',
        'OAuth 2.0 — lowers friction for developer sign-up using existing GitHub/Google accounts',
        'MongoDB — flexible document schema adapts to evolving bug metadata without migrations',
        'On-device AI (Xenova) — avoids external API latency and costs for severity inference while keeping data private',
      ],
      challenges: [
        'Token refresh flow across page navigations without interrupting user state',
        'Role-based access control enforcement at both API middleware and UI component level',
        'AI model cold-start latency on first classification request',
        'Concurrent team member updates on the same bug without state conflicts',
      ],
      capabilities: [
        'Multi-tenant team workspaces with configurable roles',
        'Stateless JWT authentication with refresh token rotation',
        'AI-powered bug severity classification (zero external API calls)',
        'Real-time dashboard with team activity metrics',
      ],
    },
    image: '/placeholder.svg',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS', 'JWT', 'OAuth'],
    githubUrl: 'https://github.com/Jagadeesh9110/devOrbit',
    liveUrl: 'https://dev-orbit-rust.vercel.app/',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'AI-Powered Medical Chatbot',
    description:
      'Engineered a real-time medical chat system connecting users with AI-powered diagnostic responses. Built on React.js frontend and Node.js/Express backend with MongoDB persistence. Integrated Google Gemini API for production inference with JWT-secured endpoints.',
    modal: {
      problem:
        'Medical Q&A systems require low-latency, contextually accurate responses while maintaining conversation history and user privacy. This system provides real-time AI-powered medical consultation with persistent chat history and secure authentication.',
      architecture: [
        'Frontend: React.js with optimized state management',
        'Backend: Node.js + Express.js REST API',
        'Database: MongoDB for conversation persistence',
        'AI: Google Gemini API for production inference',
        'Auth: JWT-based session management',
        'Protocol: WebSocket-ready architecture for streaming responses',
      ],
      decisions: [
        'Gemini API over custom model — production-grade accuracy without training infrastructure; custom model prototyped for future domain-specific fine-tuning',
        'MongoDB — natural fit for chat history: each conversation is a document with nested message arrays',
        'JWT auth — ensures stateless API security; tokens carry user context without server-side session storage',
        'Express.js — lightweight middleware stack for clean request validation and error handling',
      ],
      challenges: [
        'Managing streaming AI responses without blocking the event loop',
        'Token expiration handling mid-conversation without losing chat context',
        'Rate limiting API calls to Gemini while maintaining responsive UX',
        'Sanitizing medical responses to avoid dangerous advice pass-through',
      ],
      capabilities: [
        'Real-time AI-powered medical consultation',
        'Persistent conversation history per user',
        'Stateless JWT authentication',
        'Configurable AI model switching (Gemini production / custom prototype)',
      ],
    },
    image: '/placeholder.svg',
    technologies: ['React.js', 'Node.js', 'WebSockets', 'MongoDB', 'Express.js', 'Gemini API'],
    githubUrl: 'https://github.com/Jagadeesh9110/React-App-LLM',
    liveUrl: 'https://github.com/Jagadeesh9110/React-App-LLM',
    featured: false,
    category: 'AI/ML',
  },
  {
    id: 3,
    title: 'NetViz Pro — Reliable Transport Simulator',
    description:
      'Simulated TCP-reliable transport over UDP with sliding window ARQ, congestion control, and binary file segmentation. Architected a distributed system: Java core engine streaming packet telemetry via Node.js/WebSocket bridge to a React dashboard. Achieved 100% data integrity under 30% simulated packet loss.',
    modal: {
      problem:
        'Understanding reliable transport protocols requires more than theory — it demands hands-on simulation of packet loss, retransmission, and flow control. NetViz Pro provides a visual, interactive environment to observe TCP reliability mechanics operating at the byte level over an unreliable UDP channel.',
      architecture: [
        'Core Engine: Java — handles UDP socket programming, sliding window management, and binary segmentation',
        'Bridge: Node.js — translates Java engine telemetry into WebSocket streams for the dashboard',
        'Frontend: React — renders real-time packet flow visualization, window states, and throughput metrics',
        'Protocol: Custom Reliable UDP with configurable loss simulation',
        'Transport: WebSocket bridge between Java and browser',
      ],
      decisions: [
        'Java for core engine — direct access to low-level UDP sockets and byte-level buffer manipulation; essential for accurate protocol simulation',
        'Node.js WebSocket bridge — decouples the Java engine from the browser; enables real-time telemetry streaming without modifying the core protocol logic',
        'Hybrid Sliding Window ARQ — combines Go-Back-N efficiency with selective repeat for better throughput under high loss conditions',
        'Cumulative ACKs — reduces ACK traffic overhead while still enabling the sender to detect gaps and trigger retransmissions',
        'UDP over TCP — intentionally unreliable base layer forces the custom protocol to handle all reliability guarantees',
      ],
      challenges: [
        'Maintaining binary segmentation integrity across packet boundaries during file transfer',
        'Packet loss recovery without corrupting sliding window state',
        'Synchronizing real-time telemetry between Java process and WebSocket bridge under high-throughput conditions',
        'Congestion window adjustment when loss rate fluctuates dynamically',
        'Timer-based retransmission without creating duplicate delivery cascades',
      ],
      capabilities: [
        'Configurable packet loss simulation (0–50%)',
        'Binary-safe file transfer with integrity verification',
        '100% data integrity under 30% simulated packet loss',
        'Real-time sliding window state visualization',
        'Throughput and retransmission metrics dashboard',
      ],
    },
    image: '/placeholder.svg',
    technologies: ['Java', 'Node.js', 'React', 'UDP', 'WebSockets'],
    githubUrl: 'https://github.com/Jagadeesh9110/NetViz',
    liveUrl: 'https://github.com/Jagadeesh9110/NetViz',
    featured: false,
    category: 'Systems Engineering',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleCardMouseEnter = useCallback((projectId: number) => {
    setHoveredCard(projectId);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-dark-navy">
      {/* Section Header */}
      <div className="pt-20 pb-20 bg-gradient-to-b from-dark-navy to-light-navy">
        <div className="max-w-6xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="font-mono text-neon-blue mr-4">04.</span>
              My Projects
            </h1>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Systems I've designed and shipped — full-stack platforms, AI integrations, and protocol-level engineering.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-light-navy">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projectsData.map((project) => {
              const isHovered = hoveredCard === project.id;

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group"
                >
                  <Card
                    className="glass-effect hover-glow h-full transition-all duration-500 group-hover:scale-105 cursor-pointer overflow-hidden cursor-target"
                    onMouseEnter={() => handleCardMouseEnter(project.id)}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <div className="relative">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <motion.div
                          className="w-full h-full bg-gradient-to-br from-lightest-navy to-light-navy flex items-center justify-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <div className="text-4xl font-bold text-neon-blue/30">
                            {project.title.charAt(0)}
                          </div>
                        </motion.div>
                      </div>

                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-neon-green text-dark-navy">
                            <FiStar className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-dark-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                          className="bg-lightest-navy hover:bg-neon-blue hover:text-dark-navy"
                        >
                          <FiGithub className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, '_blank');
                          }}
                          className="bg-lightest-navy hover:bg-neon-blue hover:text-dark-navy"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-6" onClick={() => handleSelectProject(project)}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-lightest-slate group-hover:text-neon-blue transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-light-slate text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-lightest-navy/50 text-light-slate"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Animated Text Container */}
                      <div className="h-6 overflow-hidden relative">
                        <motion.div
                          animate={{
                            y: isHovered ? -24 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {/* Default State */}
                          <div className="h-6 flex items-center text-sm text-light-slate">
                            {project.category}
                          </div>

                          {/* Hover State */}
                          <div className="h-6 flex items-center gap-2 text-sm text-neon-blue mt-0">
                            Show project
                            <span className="w-8 h-px bg-neon-blue"></span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={handleCloseModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-effect border-neon-blue/20">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-lightest-navy to-light-navy flex items-center justify-center rounded-lg">
                <div className="text-6xl font-bold text-neon-blue/30">
                  {selectedProject.title.charAt(0)}
                </div>
              </div>
            </div>

            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-lightest-slate mb-6">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="flex justify-end space-x-3">
                <Button
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className="bg-lightest-navy hover:bg-neon-blue hover:text-dark-navy"
                >
                  <FiGithub className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="bg-neon-blue hover:bg-neon-blue/90 text-dark-navy"
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>

              {/* Problem */}
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">Problem</h3>
                <p className="text-light-slate leading-relaxed">
                  {selectedProject.modal.problem}
                </p>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">Architecture</h3>
                <ul className="space-y-2">
                  {selectedProject.modal.architecture.map((item, i) => (
                    <li key={i} className="flex items-start text-light-slate">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Decisions */}
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">Engineering Decisions</h3>
                <ul className="space-y-2">
                  {selectedProject.modal.decisions.map((item, i) => (
                    <li key={i} className="flex items-start text-light-slate">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Edge Cases */}
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">Challenges & Edge Cases</h3>
                <ul className="space-y-2">
                  {selectedProject.modal.challenges.map((item, i) => (
                    <li key={i} className="flex items-start text-light-slate">
                      <div className="w-2 h-2 bg-neon-green rounded-full mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* System Capabilities */}
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">System Capabilities</h3>
                <ul className="space-y-2">
                  {selectedProject.modal.capabilities.map((item, i) => (
                    <li key={i} className="flex items-start text-light-slate">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mr-3 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-lightest-navy/50 text-light-slate border border-neon-blue/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
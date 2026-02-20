import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

// 1. Moved static data outside
const quickQuestions = [
  "What are Jagadeeswar's main skills?",
  'Tell me about his projects',
  "What's his educational background?",
  'How can I contact him?',
];

// 2. Moved pure helper function outside
const generateBotResponse = (question: string) => {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes('skill')) {
    return "Jagadeeswar's core stack includes Next.js, Node.js, TypeScript, MongoDB, Socket.IO, and JWT. On the backend side, he works with Express.js, REST APIs, OAuth 2.0, and RBAC. For databases, he uses MongoDB, PostgreSQL, and Mongoose. His infrastructure stack includes AWS EC2, Vercel, Render, and PM2.";
  } else if (lowerQuestion.includes('project') || lowerQuestion.includes('work')) {
    return "He's built three notable projects: devOrbit — a multi-user bug intelligence platform with AI-powered triage; an AI Medical Chatbot using Google Gemini API for real-time diagnostic responses; and NetViz Pro — a reliable transport simulator that achieves 100% data integrity under 30% packet loss using custom sliding window ARQ over UDP.";
  } else if (lowerQuestion.includes('education') || lowerQuestion.includes('study') || lowerQuestion.includes('college')) {
    return "He's pursuing a B.Tech in Data Science and Artificial Intelligence at IIIT Dharwad (expected 2027) with a GPA of 8.21. His core coursework includes DSA, OOP, DBMS, Operating Systems, and Computer Networks.";
  } else if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email')) {
    return "You can reach Jagadeeswar via email at manyamjagadeeswar7989@gmail.com, on GitHub (Jagadeesh9110), or LinkedIn (jagadeeswar-reddy-manyam). All links are in the contact section below!";
  } else if (lowerQuestion.includes('intern') || lowerQuestion.includes('role') || lowerQuestion.includes('hire') || lowerQuestion.includes('position')) {
    return "Jagadeeswar is actively seeking SDE / Full-Stack internship roles where he can contribute to real engineering teams and production systems. He brings hands-on experience with full-stack platforms, secure auth flows, real-time systems, and distributed protocol engineering.";
  } else {
    return "Jagadeeswar is a Full-Stack Developer who builds production-grade systems with clean architecture. Feel free to ask about his skills, projects, education, or how to contact him!";
  }
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Jagadeeswar's AI assistant. Ask me about his skills, projects, or experience!",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  // 3. Memoized event handlers
  const toggleOpen = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSendMessage = useCallback(
    (textToSend: string) => {
      if (!textToSend.trim()) return;

      const userMessage = { id: Date.now(), text: textToSend, isBot: false };
      setMessages((prev) => [...prev, userMessage]);

      // Simulate AI response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: generateBotResponse(textToSend),
          isBot: true,
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);

      setInputValue('');
    },
    [], // setMessages and setInputValue are stable
  );

  const handleFormSubmit = useCallback(
    (e: React.FormEvent | React.KeyboardEvent) => {
      e.preventDefault();
      handleSendMessage(inputValue);
    },
    [inputValue, handleSendMessage],
  );

  const handleQuickQuestion = useCallback(
    (question: string) => {
      handleSendMessage(question);
    },
    [handleSendMessage],
  );

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          onClick={toggleOpen} // Use memoized handler
          className="cursor-target w-14 h-14 rounded-full bg-neon-blue hover:bg-neon-blue/90 text-dark-navy shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
        >
          <FiMessageSquare className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
            onClick={closeModal} // Use memoized handler
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <Card className="glass-effect border-neon-blue/20 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-full flex items-center justify-center">
                      <span className="text-dark-navy font-bold text-sm">
                        AI
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lightest-slate">
                        AI Assistant
                      </h3>
                      <p className="text-xs text-slate">Ask me anything!</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeModal} // Use memoized handler
                    className="text-slate hover:text-lightest-slate"
                  >
                    <FiX className="w-4 h-4" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="h-80 overflow-y-auto custom-scrollbar p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'
                        }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${message.isBot
                          ? 'bg-lightest-navy text-light-slate'
                          : 'bg-neon-blue text-dark-navy'
                          }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="p-4 border-t border-white/10">
                    <p className="text-xs text-slate mb-3">
                      Quick questions:
                    </p>
                    <div className="space-y-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickQuestion(question)} // Use memoized handler
                          className="w-full text-left p-2 text-xs text-light-slate bg-lightest-navy/30 rounded-lg hover:bg-lightest-navy/50 transition-colors duration-200"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <form
                  onSubmit={handleFormSubmit}
                  className="p-4 border-t border-white/10"
                >
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask me anything..."
                      className="flex-1 bg-lightest-navy/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-lightest-slate placeholder-slate focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="cursor-target bg-neon-blue hover:bg-neon-blue/90 text-dark-navy"
                    >
                      <FiSend className="w-4 h-4" />
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
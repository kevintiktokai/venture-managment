"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMessageRoundedDots, BiX, BiSend } from "react-icons/bi";

const QUICK_QUESTIONS = [
  "What properties do you have for sale?",
  "How does buying from abroad work?",
  "Which suburb is best for families?",
  "How do you verify title deeds?",
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block size-1.5 rounded-full"
          style={{ background: "var(--color-warm-gray)" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser ? "rounded-br-md" : "rounded-bl-md"
        }`}
        style={
          isUser
            ? {
                background: "var(--color-forest)",
                color: "#fff",
              }
            : {
                background: "rgba(43,36,32,0.06)",
                color: "var(--text-secondary)",
              }
        }
      >
        {content.split("\n").map((line, i) => (
          <p key={i} className={i > 0 ? "mt-2" : ""}>
            {/* Convert **bold** to <strong> and links to <a> */}
            {line.split(/(\*\*[^*]+\*\*|https?:\/\/\S+)/g).map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
              }
              if (part.match(/^https?:\/\//)) {
                return (
                  <a
                    key={j}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                    style={{ color: isUser ? "#c8e0f0" : "var(--color-forest)" }}
                  >
                    {part.includes("wa.me") ? "WhatsApp us" : part}
                  </a>
                );
              }
              return part;
            })}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Show greeting on first open
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setMessages([
        {
          role: "assistant",
          content:
            "Welcome to Venture Management! I'm here to help you with anything about Harare real estate — properties for sale or rent, suburb guides, the buying process, or diaspora purchasing.\n\nHow can I help you today?",
        },
      ]);
    }
  }, [isOpen, hasGreeted]);

  const sendMessage = async (text) => {
    const userMsg = text.trim();
    if (!userMsg || isLoading) return;

    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || data.error || "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. You can reach our team directly on WhatsApp at https://wa.me/263771681728",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-5 z-50 flex size-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 md:bottom-8 md:right-8"
            style={{
              background: "var(--color-forest)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(48,85,104,0.4)",
            }}
            aria-label="Open chat"
          >
            <BiMessageRoundedDots className="size-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col sm:bottom-4 sm:right-4 sm:h-[580px] sm:w-[400px]"
            style={{
              background: "#fff",
              boxShadow: "0 12px 48px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(43,36,32,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 sm:rounded-t-2xl"
              style={{
                background: "var(--color-forest)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: "var(--color-gold)", fontFamily: "var(--font-display)" }}
                  >
                    VM
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Venture Management</p>
                  <div className="flex items-center gap-1.5">
                    <span className="block size-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-white/60">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
                aria-label="Close chat"
              >
                <BiX className="size-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4"
              style={{ background: "#faf7f4" }}
            >
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <MessageBubble key={i} role={msg.role} content={msg.content} />
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div
                      className="rounded-2xl rounded-bl-md"
                      style={{ background: "rgba(43,36,32,0.06)" }}
                    >
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick questions — shown only at start */}
              {messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="rounded-full px-3.5 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{
                        background: "#fff",
                        color: "var(--color-forest)",
                        border: "1px solid rgba(48,85,104,0.2)",
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t px-4 py-3"
              style={{ borderColor: "rgba(43,36,32,0.08)", background: "#fff" }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about properties, suburbs, buying..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                style={{ color: "var(--text-secondary)" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex size-9 items-center justify-center rounded-lg transition-all disabled:opacity-30"
                style={{
                  background: input.trim() ? "var(--color-forest)" : "rgba(43,36,32,0.08)",
                  color: input.trim() ? "#fff" : "var(--text-muted)",
                }}
                aria-label="Send message"
              >
                <BiSend className="size-4" />
              </button>
            </form>

            {/* Powered by line */}
            <div
              className="px-4 pb-3 pt-0 text-center text-[10px] sm:rounded-b-2xl"
              style={{ color: "var(--text-muted)", background: "#fff" }}
            >
              Powered by Venture Management AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

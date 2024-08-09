import styles from "./chatbot.module.css";
import { Container, Box, Button } from "@mui/material";
import { useState, useEffect, useRef } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Chatbot({ isOpen, setIsOpen }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);

    // Automated responses from Venie
    const venieResponses = [
        "Hello! How can I assist you today?",
        "Sure, I'm here to help!",
        "Let's see what we can do about that.",
        "Please tell me more.",
        "I'm on it!"
    ];

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessages = [...messages, { text: message, sender: 'user' }];
            setMessages(newMessages);
            setMessage('');

            // Simulate a response from Venie after a short delay
            setTimeout(() => {
                const venieMessage = venieResponses[Math.floor(Math.random() * venieResponses.length)];
                setMessages(prevMessages => [...prevMessages, { text: venieMessage, sender: 'venie' }]);
            }, 1000);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    useEffect(() => {
        // Automatically scroll to the bottom when a new message is added
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <Container>
            <Box className={`${styles.chatbox} ${isOpen ? styles["chatbox--active"] : ""}`}>
                <Box className={styles.chatbox__header}>
                    <img src="/assets/venie.jpg" alt="Chatbox Header Image" className={styles.chatbox__image__header} />
                    <div className={styles.chatbox__content__header}>
                        <h4 className={styles.chatbox__heading__header}>Chat support</h4>
                        <p className={styles.chatbox__description__header}>I'm Venie! Do you need help? Chat with me now!</p>
                    </div>
                    <Button onClick={() => setIsOpen(false)} className={styles.chatbox__closeButton}>
                        <HighlightOffIcon />
                    </Button>
                </Box>
                <Box className={styles.chatbox__messages}>
                    {messages.map((msg, index) => (
                        <Box
                            key={index}
                            className={`${styles.messages__item} ${msg.sender === 'venie' ? styles.messages__item_operator : styles.messages__item_visitor}`}
                        >
                            {msg.text}
                        </Box>
                    ))}
                    <div ref={messagesEndRef} />
                </Box>
                <Box className={styles.chatbox__footer}>
                    <input
                        type="text"
                        placeholder="Write a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className={`${styles.chatbox__send__footer} ${styles.send__button}`}
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </Box>
            </Box>
            <Box className={styles.chatbox__button} sx={{ display: isOpen ? 'none' : 'block' }}>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    <img src="/assets/chats.png" width={60} alt="Chatbox icon" />
                </Button>
            </Box>
        </Container>
    );
}

import styles from "./chatbot.module.css";
import { Container, Box, Button } from "@mui/material";
import { useState, useEffect, useRef } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

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

    const getMessageResponse = async (userMessage) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/predict`, {
                method: 'POST',
                body: JSON.stringify({ message: userMessage }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.answer;
        } catch (error) {
            console.error('Error:', error);
            return "Sorry, I'm having trouble connecting to the server. Please ensure the server is running and try again.";
        }
    };

    const handleSendMessage = async () => {
        if (message.trim()) {
            const newUserMessage = { text: message, sender: 'user' };
            setMessages(prevMessages => [...prevMessages, newUserMessage]);
            setMessage('');

            try {
                const botResponse = await getMessageResponse(message);
                const newBotMessage = { text: botResponse, sender: 'venie' };
                setMessages(prevMessages => [...prevMessages, newBotMessage]);
            } catch (error) {
                console.error('Failed to get bot response:', error);
                const errorMessage = { text: "Sorry, I couldn't process your request. Please try again later.", sender: 'venie' };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }
        }
    };

    // const handleSendMessage = () => {
    //     if (message.trim()) {
    //         const newMessages = [...messages, { text: message, sender: 'user' }];
    //         setMessages(newMessages);
    //         setMessage('');
    //         getMessageResponse(message)
    //         // Simulate a response from Venie after a short delay
    //         // setTimeout(() => {
    //         //     const venieMessage = venieResponses[Math.floor(Math.random() * venieResponses.length)];
    //         //     setMessages(prevMessages => [...prevMessages, { text: venieMessage, sender: 'venie' }]);
    //         //     // setMessages(prevMessages => [...prevMessages, getResponse(message)]);
    //         // }, 1000);
    //     }
    // };

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
                        {/* <h4 className={styles.chatbox__heading__header}>Chat support</h4> */}
                        {/* <p className={styles.chatbox__description__header}>I'm Venie! Do you need help? Chat with me now!</p> */}
                    </div>
                    <Button onClick={() => setIsOpen(false)} className={styles.chatbox__closeButton}>
                        <HighlightOffIcon />
                    </Button>
                </Box>
                <Box className={styles.chatbox__messages}>
                        <Box
                            className={`${styles.messages__item} ${styles.messages__item_operator}`}
                        >
                            I'm Venie! What can I help you with today?
                        </Box>
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

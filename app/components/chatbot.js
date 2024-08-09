import styles from "./chatbot.module.css";
import { Container, Typography, Rating, Image, Box, Button } from "@mui/material";
import { Chatbox } from "./app";
import { useState, useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        //TODO: implement send message function
        console.log('Sending Message', message);
        setMessage('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };


    // TODO: update below code to match react form and styling

    // const chatbox = new Chatbox();
    // chatbox.display();

    // Don't think this code is necessary for chat bot but will look more into it if error populates
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();

    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });


    return (
        <Container>
            <Box className={styles.chatbox} id={styles.chatbox_id} >
                <Box className={styles.chatbox__support} sx={{ display: isOpen ? 'flex' : 'none', zIndex: 10,}}>
                    <Box className={styles.chatbox__header}>
                        <Box className={styles.chatbox__image__header}>
                            <img src="/assets/venie.jpg" width={60} alt="image" />
                            </Box>
                        <div className={styles.chatbox__content__header}>
                            <h4 className={styles.chatbox__heading__header}>Chat support</h4>
                            <p className={styles.chatbox__description__header}>I'm Venie! Do you need help? Chat with me now!</p>
                            
                        </div>
                        <Button onClick={() => setIsOpen(false)}><HighlightOffIcon></HighlightOffIcon></Button>
                    </Box>
                    <Box className={styles.chatbox__messages}>
                        {/* Messages will be displayed here */}
                   </Box>
                   {/* TODO add this back once ratings put in place */}
                   {/* <Box className="ratings" sx={{margin: 2}}>
                    <Typography component="legend" sx={{color: '#d0cfcfdc'}}>Rate your experience</Typography>
                    <Rating
                        name="chat-rating"
                        value={ratingValue}
                        onChange={(event, newValue) => setRatingValue(newValue)}
                    /></Box> */}
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
                <Box className={styles.chatbox__button} sx={{display: isOpen ? 'none' : 'block'}}>
                    <Button onClick={() => {
                        setIsOpen(!isOpen);
                        console.log('button pressed', isOpen);
                        }} >
                        <img src="/assets/chats.png" width={60} alt="Chatbox icon" />
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

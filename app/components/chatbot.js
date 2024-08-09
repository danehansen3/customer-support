import styles from "./chatbot.module.css";
import { Container } from "@mui/material";
import { Chatbox } from "./app";
import { useState, useEffect } from 'react'

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);


    // TODO: update below code to match react form and styling

    function handleOpen() {
        useEffect(() =>
            setIsOpen(true)
        ), []
    }

    function handleClose() {
        useEffect(() => {
            setIsOpen(false)
        }), []
    }

    const chatbox = new Chatbox();
    chatbox.display();

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
            <div class={styles.chatbox} id={styles.chatbox_id}>
                <div class={styles.chatbox__support}>
                    <div class={styles.chatbox__header}>
                        <div class={styles.chatbox__image - header}>
                            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
                        </div>
                        <div class={styles.chatbox__content - header}>
                            <h4 class={styles.chatbox__heading - header}>Chat support</h4>
                            <p class={styles.chatbox__description - header}>I'm Venie! Do you need help? Chat with me now!</p>
                        </div>
                    </div>
                    <div class={styles.chatbox__messages}>
                        <div></div>
                    </div>
                    <div class={styles.chatbox__footer}>
                        <input type="text" placeholder="Write a message..." />
                        <button class={`${styles.chatbox__send - footer} ${styles.send__button}`}>Send</button>
                    </div>
                </div>
                <div class={styles.chatbox__button}>
                    <button onClick={isOpen ? handleClose: handleOpen}><img src="./images/chatbox-icon.svg" /></button>
                </div>
            </div>
        </Container>
    );
};

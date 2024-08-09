import styles from "./chatbot.module.css";
import { Container } from "@mui/material";
import {Chatbox} from "./app";

export default function Chatbot() {
    const chatbox = new Chatbox();
chatbox.display();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('chat-with-venie-btn').addEventListener('click', function() {
    document.getElementById('venie-popup').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function() {
    const closePopupButton = document.getElementById('close-popup');
    if (closePopupButton) {
        closePopupButton.addEventListener('click', function() {
            document.getElementById('venie-popup').style.display = 'none';
        });
    } else {
        console.error("Element with ID 'close-popup' not found");
    }
});

window.onclick = function(event) {
    if (event.target === document.getElementById('venie-popup')) {
        document.getElementById('venie-popup').style.display = 'none';
    }
}

    return (
        <Container>
    <div class={styles.chatbox} id="styles.chatbox_id">
        <div class="styles.chatbox__support">
            <div class="styles.chatbox__header">
                <div class="styles.chatbox__image--header">
                    <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image"/>
                </div>
                <div class="styles.chatbox__content--header">
                    <h4 class="styles.chatbox__heading--header">Chat support</h4>
                    <p class="styles.chatbox__description--header">I'm Venie! Do you need help? Chat with me now!</p>
                </div>
            </div>
            <div class="styles.chatbox__messages">
                <div></div>
            </div>
            <div class="styles.chatbox__footer">
                <input type="text" placeholder="Write a message..."/>
                <button class="styles.chatbox__send--footer styles.send__button">Send</button>
            </div>
        </div>
        <div class="styles.chatbox__button">
            <button><img src="./images/chatbox-icon.svg" /></button>
        </div>
    </div>
</Container>
    );
};

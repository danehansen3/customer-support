import React, { useState } from 'react';

const faqs = [
    {
        question: "What is Venmo?",
        answer: "Venmo is a mobile payment service that allows you to easily pay friends and split bills."
    },
    {
        question: "How do I sign up for Venmo?",
        answer: "You can sign up for Venmo by downloading the app and creating an account with your email address or phone number."
    },
    {
        question: "Is Venmo safe to use?",
        answer: "Yes, Venmo uses encryption to help protect your account information and monitors your account activity to help detect unauthorized transactions."
    },
    {
        question: "How do I send money on Venmo?",
        answer: "To send money, open the Venmo app, enter the amount, select the recipient, and press 'Pay'."
    },
    {
        question: "Can I use Venmo internationally?",
        answer: "No, Venmo is currently only available in the United States."
    },
    {
        question: "What is Venie?",
        answer: "Venie is Venmo's AI-powered chatbot genie designed to help you with your Venmo-related queries. Whether you need assistance with sending money, checking your transaction history, or managing your account, Venie is here to provide quick and accurate answers."
    },
    {
        question: "How do I start a conversation with Venie?",
        answer: "You can start a conversation with Venie by clicking on the chat icon within the Venmo app or on the Venmo website. Venie will then prompt you to ask any questions you might have about your Venmo account or transactions."
    },
    {
        question: "What kind of questions can I ask Venie?",
        answer: "You can ask Venie a wide range of questions related to your Venmo account, including how to send and receive money, how to split bills, how to update your profile, and how to secure your account. Venie is also capable of answering questions about Venmo's features and services."
    },
    {
        question: "Can Venie help me with transaction issues?",
        answer: "Yes, Venie can assist you with transaction-related queries such as checking the status of a payment, finding transaction history, and providing guidance on how to resolve issues like failed or pending transactions."
    },
    {
        question: "Is Venie available 24/7?",
        answer: "Yes, Venie is available 24/7 to assist you with your Venmo inquiries. Whether it's early in the morning or late at night, Venie is always ready to help."
    },
    {
        question: "How accurate is Venie in answering questions?",
        answer: "Venie is powered by advanced AI technology, which enables it to understand and respond to your queries accurately. However, if Venie is unable to answer your question or if you need more detailed assistance, Venie can guide you on how to reach Venmo's customer support."
    },
    {
        question: "Can Venie perform transactions for me?",
        answer: "No, Venie is designed to provide information and guidance but cannot perform transactions on your behalf. For security reasons, you will need to initiate and authorize all transactions directly through the Venmo app or website."
    },
    {
        question: "Is my conversation with Venie secure?",
        answer: "Yes, your conversations with Venie are secure. Venmo uses encryption and other security measures to protect your data. However, it’s important to avoid sharing sensitive information like your password during the chat."
    },
    {
        question: "Can Venie help me set up my Venmo account?",
        answer: "Yes, Venie can guide you through the process of setting up your Venmo account, including linking your bank account, verifying your identity, and customizing your profile."
    },
    {
        question: "What should I do if Venie can't answer my question?",
        answer: "If Venie is unable to answer your question, it will provide instructions on how to contact Venmo's customer support team for further assistance."
    }

];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className={`faq ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">
                        {faq.question}
                    </div>
                    {index === activeIndex && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
            <style jsx>{`
                .faq-container {
                    border-top: 1px solid #e0e0e0;
                }

                .faq {
                    cursor: pointer;
                    padding: 20px;
                    border-bottom: 1px solid #e0e0e0;
                    transition: background-color 0.3s ease;
                }

                .faq:hover {
                    background-color: #f9f9f9;
                }

                .faq-question {
                    font-size: 1.2rem;
                    color: #003c6b;
                }

                .faq-answer {
                    margin-top: 10px;
                    font-size: 1rem;
                    color: #555;
                    line-height: 1.5;
                }

                .active .faq-question {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default Faq;

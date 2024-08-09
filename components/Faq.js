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
    }
];

const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-page">
            <h1>Frequently Asked Questions</h1>
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
            </div>
            <style jsx>{`
                .faq-page {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: 'Arial', sans-serif;
                }

                h1 {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 2.5rem;
                    color: #003c6b;
                }

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

export default FaqPage;

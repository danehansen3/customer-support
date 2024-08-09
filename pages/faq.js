import React from 'react';
import Faq from '../components/Faq';

const FaqPage = () => {
    return (
        <div className="faq-page">
            <h1>Frequently Asked Questions</h1>
            <Faq />
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
            `}</style>
        </div>
    );
};

export default FaqPage;

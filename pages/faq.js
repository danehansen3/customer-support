import React from 'react';
import Faq from '../components/Faq';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FaqPage = () => {
    return (
        <div className="faq-page">
            <div className="back-arrow">
                <Link href="/">
                    <ArrowBackIcon className="arrow-icon" />
                </Link>
            </div>
            <h1>Frequently Asked Questions</h1>
            <Faq />
            <div className="back-to-home">
                <Link href="/" className="home-link">
                    Back to Home
                </Link>
            </div>
            <style jsx>{`
                .faq-page {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: 'Arial', sans-serif;
                }
                
                .back-arrow {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    cursor: pointer;
                }

                .arrow-icon {
                    font-size: 2rem;
                    color: #003c6b;
                }

                h1 {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 2.5rem;
                    color: #003c6b;
                }

                .back-to-home {
                    text-align: center;
                    margin-top: 40px;
                }

                .home-link {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #003c6b;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 1.2rem;
                }

                .home-link:hover {
                    background-color: #002a4f;
                }
            `}</style>
        </div>
    );
};

export default FaqPage;

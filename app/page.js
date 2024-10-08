'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Container, Box, Typography, Button, ImageList, ImageListItem } from "@mui/material";
import Chatbot from "./components/chatbot";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const hasAnimated = localStorage.getItem('hasAnimated');
    if (!hasAnimated) {
      setIsFirstLoad(true);
      localStorage.setItem('hasAnimated', 'true');
    } else {
      setIsFirstLoad(false);
    }
    setIsLoaded(true);
  }, []);

  const itemData = [
    {
      img: '/assets/coffee-with-friends.jpg',
      title: "Coffee with a friend",
      rows: '2',
      cols: '2'
    },
    {
      img: '/assets/brunch-with-friends.jpg',
      title: "Brunch with friends",
      rows: '2',
      cols: '2'
    }
  ];

  return (
    <Container id='main' maxWidth="lg" sx={{
      display: "flex", flexDirection: 'column', p: 1,
      m: 1, margin: 'auto'
    }}>
      {/* Re-add if Log in and Sign up added */}
      {/* <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        mb: 2
      }}>
        <Button variant="outlined" sx={{ mr: 1 }}>Log In</Button>
        <Button variant="contained">Sign Up</Button>
      </Box> */}
      <Box sx={{
        display: "flex",
        flexDirection: 'row',
        width: '100%'
      }}>
        {/* INTRO BOX */}
        <Box
          sx={{
            p: 1,
            m: 1,
            height: '80vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "350px", bgcolor: "white", textAlign: 'center' }}>
            <Typography variant="caption" sx={{ fontWeight: "700", color: "var(--accent-color)", letterSpacing: "0.2em" }} >
              VENMO'S AI CUSTOMER SUPPORT BOT
            </Typography>
          </Box>
          <Box position="relative" sx={{ height: 'fit-content', width: 'fit-content' }}>
            <Typography
              variant='h1'
              sx={{
                margin: '12px 2px',
                color: 'rgba(245, 245, 245, 0.25)',
                position: 'relative',
                fontSize: '120px',
                zIndex: 1,
                opacity: isFirstLoad ? 0 : 1,
                animation: isLoaded && isFirstLoad ? 'fadeIn 1s ease-out forwards' : 'none',
                animationDelay: '0.5s'
              }}
              className="rubik-bubbles-regular"
            >
              VENIE
            </Typography>
            <Typography
              variant="h1"
              sx={{
                margin: '12px 2px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -60%)',
                zIndex: 2,
                opacity: isFirstLoad ? 0 : 1,
                animation: isLoaded && isFirstLoad ? 'fadeIn 1s ease-out forwards' : 'none',
                animationDelay: '1.5s'
              }}
              className='primary-text m-plus-rounded-1c-black'
            >
              VENIE
            </Typography>
          </Box>
          <Typography variant='h6' className="primary-text" margin={'12px'} textAlign={'center'}>
            Venie is here to help you with any questions you might have. Ask Venie about payments, transactions, and more!
          </Typography>
          <Container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, marginTop: "12px" }}>
            <Button variant="outlined" fullWidth onClick={() => setIsChatOpen(true)}>Chat with Venie</Button>
            <Link href="/faq" passHref legacyBehavior>
              <Button variant="outlined" fullWidth>FAQs</Button>
            </Link>
          </Container>
        </Box>

        {/* Optional Image Section */}
        {/* Uncomment if needed */}
        {/* <Box sx={{ p: 1, m: 1 }}>
          <ImageList 
            sx={{ width: 500, height: 450 }} 
            variant="quilted" 
            cols={4}
            rowHeight={121}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <img  src={item.img} width={121 * item.cols} height={121 * item.rows}
                  alt={item.title}
                  loading="lazy" />
                  <Box>Test Box</Box>
                </ImageListItem>
              ))}
          </ImageList>
        </Box> */}
        
        {/* Uncomment if needed */}
        {/* <Box sx={{ display: 'absolute', bottom: '5px', right: '5px', alignContent: 'end' }}>
          <Image width='120' height='120' src='/assets/venie.jpg' aria-label='Venie AI chatbot'></Image>
        </Box> */}
      </Box>
      <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </Container>
  );
}

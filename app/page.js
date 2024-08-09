'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Container, Box, Typography, Button, ImageList, ImageListItem } from "@mui/material";
import Chatbot from "./components/chatbot";
import { useEffect, useState } from "react";

// TODO: move global styles that are specific to landing page to 
// page.modules.css and update classNames and ids to {styles.className}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
  ]
  
  return (
    <Container id='main' maxWidth="lg" sx={{
      display: "flex", flexDirection: 'column', p: 1,
      m: 1, margin: 'auto'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        mb: 2
      }}>
        <Button variant="outlined" sx={{ mr: 1 }}>Log In</Button>
        <Button variant="contained">Sign Up</Button>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: 'row',
        width: '100%'
      }}>
        <Box
          sx={{
            p: 1,
            m: 1,
            height: '80vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
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
                opacity: 0,
                animation: isLoaded ? 'fadeIn 1s ease-out forwards': 'none',
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
                opacity: 0,
                animation: isLoaded ? 'fadeIn 1s ease-out forwards' : 'none',
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
            <Button variant="outlined" fullWidth>Chat with Venie</Button>
            <Button variant="outlined" fullWidth>FAQs</Button>
          </Container>
        </Box>
        <Box sx={{
          p: 1,
          m: 1,
          // width: '100%',
          // height: '80vh',
          // position: 'relative',
          // bgcolor: "#003d6b56",
          // borderRadius: '8px',
          // overflow: 'hidden'
        }}>
          {/* <ImageList 
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
          </ImageList> */}
          {/* <Image src={"/assets/brunch-with-friends.jpg"} width={250} height={250} aria-label='Brunch with Friends'></Image>
          <Image src={"/assets/coffee-with-friends.jpg"} width={250} height={250} aria-label="Coffee with friend"></Image> */}
        </Box>
        {/* <Box sx={{
          // display: 'absolute',
          // bottom: '5px',
          // right: '5px',
          alignContent: 'end'
        }}>
          <Image width='120' height='120' src='/assets/venie.jpg' aria-label='Venie AI chatbot'></Image>
        </Box> */}
        {/* <Chatbot /> */}
      </Box>
    </Container>
  );
}

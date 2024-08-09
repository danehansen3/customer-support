import Image from "next/image";
import styles from "./page.module.css";
import { Container, Box, Typography, Button, ImageList, ImageListItem } from "@mui/material";
import Chatbot from "./components/chatbot";

export default function Home() {

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
      display: "flex", flexDirection: 'row', p: 1,
      m: 1, margin: 'auto'
    }}>
      <Box
        sx={{
          p: 1,
          m: 1,
          height: '90vh',
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
              zIndex: 1
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
              zIndex: 2
            }}
            className='primary-text m-plus-rounded-1c-black'
          >
            VENIE
          </Typography>
        </Box>
        <Typography variant='body1' className="primary-text" margin={'12px'}>Venie is here to help you with any questions you might have. Ask Venie about payments, transactions, and more!</Typography>
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
            </ImageListItem>
          ))}
        </ImageList>
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
    </Container>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}

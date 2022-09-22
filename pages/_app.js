import '../styles/globals.css'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  return (
    // <AnimatePresence exitBeforeEnter>

      // <motion.div
      //   key={router.route}
      //   initial = {{ 
      //     // y: "100vh",
      //     // x :"100vw"
      //     opacity: 0,
      //     // closed
      //     // clipPath : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          
      //   }}
      //   animate = {{ 
      //     // y: 0,
      //     // x: 0,
      //     // open
      //     opacity:1,
      //     // clipPath : "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      //     // clipPath : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      //   }}
      //   exit = {{ 
      //     // opacity: 0,
      //     // x: "-100vw"
      //     opacity: 0,
      //     // closed
      //     // clipPath : "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      //   }}
      //   transition = {{duration : .75 , ease: 'easeInOut'}}
      
      // >
        <Component {...pageProps} />
    //   </motion.div>

    // </AnimatePresence>
  )
}

export default MyApp

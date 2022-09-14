
// // this is how you get the data from the api


// export const getStaticProps = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	const data = await res.json();

// 	return {
// 		props : {
// 			fetchedData: data
// 		}
// 	}
// }



// export default function PopupGfg({fetchedData}) {
// 	return (
// 		<div>
// 			{ fetchedData.map(ninja => (
// 				<div key={ninja.id}>
// 					<h1>{ninja.name}</h1>
// 				</div>
// 			) )}
// 		</div>
// 	)
// };
import { motion } from 'framer-motion'
import styles from '../styles/Hero.module.css'
function test() {
  return (
    <motion.div
      className={styles.center}

      
      >
      <motion.h1 drag
        whileTap={{ cursor: "grabbing" }}
        className={styles.center}
      >b</motion.h1>

    </ motion.div>
  )
}

export default test

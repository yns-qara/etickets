
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

import FetchPosts from '../components/fetchPosts'
function test() {
  return (
	<FetchPosts />
  )
}

export default test

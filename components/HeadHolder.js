import styles from '../styles/headholder.module.css'
const HeadHolder = props => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}


export default HeadHolder
import styles from "./Lined.module.css"

function Lined({children}){
    return <span className={styles.Lined}>{children}</span>;
}

export default Lined;
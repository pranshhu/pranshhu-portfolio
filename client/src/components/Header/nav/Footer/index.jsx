import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a>X (Twitter)</a>
        <a>Github</a>
        <a>LinkedIn</a>
        <a>Read.cv</a>
    </div>
  )
}

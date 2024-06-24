import { Link } from 'react-router-dom'
import styles from './header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}> 
        <Link to="/"><img className={styles.logo} src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg" alt="Logo Netflix"  /></Link>
        <Link to="/" className={styles.links}>Home</Link>
        <Link to="./Series" className={styles.links}>Series</Link>
        <Link to="./Filmes" className={styles.links}>Filmes</Link>
        <Link to="./Categorias" className={styles.links}>Categorias</Link>
        <Link to="./Mylist" className={styles.links}>Mylist</Link>
      </nav>
    </header>
  )
}

import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import cover from '../assets/cover.png';
import { Avatar } from '../components/Avatar.tsx';

export function Sidebar() {
  return <aside className={styles.sidebar}>
    <img className={styles.cover} src={cover} alt={''} />
    <div className={styles.profile}>
      <Avatar />
      <strong>Lorem ipsum</strong>
      <span>Web Developer</span>
    </div>
    <footer>
      <a href={'#'}>
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>;
}

import Link from 'next/link'; // Usamos el componente Link para navegar entre rutas
import styles from './page.module.css';
import { TodoList } from './components/TodoList';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <nav>
          <ul>
            <li>
              <Link href="/profile">Perfil de Usuario</Link>
            </li>
            <li>
              <Link href="/products">Productos</Link>
            </li>
          </ul>
        </nav>
        <TodoList />
      </main>
    </div>
  );
}

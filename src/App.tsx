import './App.css';
import styles from './App.module.css';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { IPost, Post } from './components/Post.tsx';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mateusdotcc.png',
      name: 'Mateus Henrique',
      role: 'CTO'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2024-01-11 08:13:30'),},
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2025-01-08 20:04:30'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => <Post key={post.id} post={post} />)}
        </main>
      </div>
    </>
  )
}

export default App

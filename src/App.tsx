import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50",
      name: "Joh Doe",
      role: "Full Stack Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "devonlane.design" }
    ],
    publishedAt: new Date("2022-12-02 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      name: "Jane Doe",
      role: "Web Design"
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },
      { type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻. Acesse e deixe seu feedback 👇" },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-11-28 16:05:00")
  },
];

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </>
  )
}

export default App


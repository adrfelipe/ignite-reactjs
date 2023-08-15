import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="André"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam consequuntur ullam saepe molestias odio, perferendis ratione quasi, ea sunt praesentium sint voluptatum modi? Ea culpa ad accusantium aliquid sed."
          />
          <Post author="João" content="Um texto bem top" />
        </main>
      </div>
    </div>
  );
}

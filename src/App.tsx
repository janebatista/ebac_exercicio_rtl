import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/600x1000/2571/2571273/produto/210238062/batmovel-1966-classic-tv-figura-batman-robin-jada-toys-1-24-jad-98259_6_1200-5ouom7jscz.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;

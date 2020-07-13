import React from 'react';
import Header from './components/header/index'
import styles from './app.module.css';
import Aside from './components/aside';
import Origami from './components/origamis';
import Footer from './components/footer';


function App() {
  return (
    <div className={styles.app}>
     <Header/>
     <div className={styles.container}>
        <Aside/>
        <Origami/>
     </div> 
      <Footer/>
    </div>
  );
}

export default App;

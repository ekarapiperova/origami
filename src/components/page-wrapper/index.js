import React from 'react';
import Header from '../header/index'
import styles from './index.module.css';
import Aside from '../aside';

import Footer from '../footer';


function PageWrapper(props) {
  return (
    <div className={styles.app}>
     <Header/>
     <div className={styles.container}>
        <Aside/>
        <div className={styles.main}>
        {props.children}
        </div>
     </div> 
      <Footer/>
    </div>
  );
}

export default PageWrapper;

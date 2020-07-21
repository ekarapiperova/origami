import React from 'react';

import styles from './index.module.css';

import PageWrapper from '../../components/page-wrapper';
import Title from '../../components/title';
import SubmitBtn from '../../components/button';
import Origami from '../../components/origamis';


function ShareThoughtsPage() {
  return (
    <PageWrapper>
      <Title title="Share your thoughts..."/>
      <div className={styles.Input}>
        <textarea>Publication...</textarea>
      <SubmitBtn title="Post"/>
      </div>
      
      <Origami lenght={3} />
    </PageWrapper>
  );
}

export default ShareThoughtsPage;

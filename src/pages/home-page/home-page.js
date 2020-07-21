import React from 'react';
import styles from './home-page.module.css';

import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Origami from '../../components/origamis';
const Publications=()=>{
      
        return(
          <PageWrapper>
                <Title title='Publications'/>
                <Origami/>
            </PageWrapper>
        )
}

export default Publications;

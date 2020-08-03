import React, { Component } from 'react';
import styles from './home-page.module.css';

import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Origami from '../../components/origamis';
import UserContext from '../../Context';
class Publications extends Component{
  
       static contextType=UserContext;
       render(){
        return(
         
          <PageWrapper>
                <Title title='Publications'/>
                <Origami/>
            </PageWrapper>
        )
      }
}

export default Publications;

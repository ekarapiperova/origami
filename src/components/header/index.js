import React from'react'
import styles from './index.module.css'
import logo from '../../image/white-origami-bird.png'
import LinkComp from '../link'
import getNavigation from '../../utils/navigation'
const Header=()=>{
    const links=getNavigation()
    return(
        <header className={styles.navigation}>
                <img  alt="" src={logo}/>
               {
                   links.map(
                       nav=>{
                           return(
                               <LinkComp 
                               key={nav.title}
                               href={nav.link} 
                               title={nav.title} 
                               type="header"></LinkComp>
                           )
                       }
                   )
               }
            

        </header>
    )

}

export default Header
import React from'react'
import styles from './index.module.css'
import logo from '../../image/white-origami-bird.png'
import Link from '../link'
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
                               <Link href={nav.link} title={nav.title} type="header"></Link>
                           )
                       }
                   )
               }
            

        </header>
    )

}

export default Header
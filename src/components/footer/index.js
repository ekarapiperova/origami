import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../image/blue-origami-bird-flipped.png'
import getNavigation from '../../utils/navigation'
const Footer=()=>{
const links=getNavigation()
    return(
        <footer>
            <div className={styles.footer}>
            {
                   links.map(
                       nav=>{
                           return(
                               <Link key={nav.title} href={nav.link} title={nav.title} type="footer"></Link>
                           )
                       }
                   )
               }

                <img alt='' src={logo}/>
                <p className={styles.p}>Software University 2019 </p>
            </div>
           
        </footer>
    )

}
export default Footer
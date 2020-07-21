import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import getNavigation from '../../utils/navigation'

const Aside=({title,href,type})=>{
    const links=getNavigation()
    return(
       <aside className={styles.aside}>
           {
                   links.map(
                       nav=>{
                           return(
                               <Link  key={nav.title} href={nav.link} title={nav.title} type="aside"></Link>
                           )
                       }
                   )
               }
            
       </aside>
    )

}

export default Aside
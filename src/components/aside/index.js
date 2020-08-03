import React, { Component } from 'react'
import styles from './index.module.css'
import Link from '../link'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Aside extends Component{
    static contextType=UserContext
    render(){
        const{
            loggedIn,
            user
        }=this.context

    const links=getNavigation(loggedIn,user && user.id)
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
}
export default Aside
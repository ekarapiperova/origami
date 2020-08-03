import React, { Component } from 'react'
import styles from './index.module.css'
import LinkComp from '../link'
import logo from '../../image/blue-origami-bird-flipped.png'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'
class Footer extends Component{
    static contextType = UserContext

    render(){
        const{
            loggedIn,
            user
        }=this.context

    const links=getNavigation(loggedIn,user)
    return(
       <footer className={styles.footer}>
           {
                   links.map(
                       nav=>{
                           return(
                               <LinkComp  key={nav.title} href={nav.link} title={nav.title} type="footer"></LinkComp>
                           )
                       }
                   )
               }
            <p className={styles.p}>Software University 2019</p>
       </footer>
    )

}
}
export default Footer
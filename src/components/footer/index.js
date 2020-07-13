import React from 'react'
import styles from './index.module.css'
import Link from '../link'
import logo from '../../image/blue-origami-bird-flipped.png'
const Footer=()=>{

    return(
        <footer>
            <div className={styles.footer}>
                <Link href="#" title="Going to 1" type="footer"/>
                <Link href="#" title="Going to 2" type="footer"/>
                <Link href="#" title="Going to 3" type="footer"/>
                <Link href="#" title="Going to 4" type="footer"/>
                <Link href="#" title="Going to 5" type="footer"/>
                <Link href="#" title="Going to 6" type="footer"/> 

                <img alt='' src={logo}/>
                <p className={styles.p}>Software University 2019 </p>
            </div>
           
        </footer>
    )

}
export default Footer
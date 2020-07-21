import React from 'react'
import styles from './index.module.css'
import logo from '../../image/blue-origami-bird.png'
const Origam=({description, author,index})=>{

    return(
        <div className={styles.post}>
            <img alt=""className={styles.img} src={logo}/>
        <p className={styles.description}> 
    <span>{index} - </span>
         {description} 
         </p>
         <div>
         <span className={styles.user}>
             <small>Author: </small>
             {author}</span>
         </div>
       
        
        
        </div>
    )
}

export default Origam
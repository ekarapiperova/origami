import React from 'react'
import styles from './index.module.css'
import {
    Link
} from 'react-router-dom'
const LinkComp=({title,href,type})=>{
    return(
        <div className={styles[`${type}-listItem`]} >
            <Link to={href} className={styles[`${type}-link`]}>
                {title}
            </Link>
        </div>
    )

}

export default LinkComp
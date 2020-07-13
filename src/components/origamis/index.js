import React from 'react'
import styles from './index.module.css'
import Origam from '../origam'
class Origami extends React.Component{

    constructor(props){
        super(props)

        this.state={
            origami:[]
        }
    }

    getOrigami=async()=>{
        const promise=await fetch('http://localhost:9999/api/origami')
        const origami=await promise.json()

        this.setState({
            origami
        })
    }

    renderOrigami(){
        const {
            origami
        }=this.state
       return origami.map(origam=>{
            return(
                <Origam key={origam._id} {...origam}/>
            )
        })

    }
    componentDidMount(){
        this.getOrigami()
    }
    render(){
        
        return(
            <div className={styles.main}>
                <h1 className={styles.h1}>Origami</h1>
                <div className={styles.posts}>
                   {this.renderOrigami()}
                </div>
            </div>
        )
    }
}

export default Origami
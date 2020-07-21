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
        const {length}=this.props
        const promise=await fetch(`http://localhost:9999/api/origami?lenght=${length}`)
        const origami=await promise.json()

        this.setState({
            origami
        })
    }

    renderOrigami(){
        const {
            origami
        }=this.state
       return origami.map((origam, index)=>{
            return(
                <Origam key={origam._id} index={index} {...origam}/>
            )
        })

    }
    componentDidMount(){
        this.getOrigami()
    }
    render(){
        
        return(
            <div className={styles.posts}>
            {this.renderOrigami()}
         </div>
        )
    }
}

export default Origami
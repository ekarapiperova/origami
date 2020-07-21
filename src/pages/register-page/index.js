import React from 'react'
import Title from '../../components/title'
import SubmitBtn from '../../components/button'
import PageWrapper from '../../components/page-wrapper'
import Input from '../../components/input'
import styles from './index.module.css'

class RegisterPage extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            repassword:''
        }
    }

    onChage=(event,type)=>{
        const newState={}
            newState[type]=event.target.value
        this.setState(newState)
    }


    render(){  
        
        const {
            email,
            password,
            repassword
        }=this.state
        
        
        return(
        <PageWrapper>
        <div className={styles.Register}>
            <Title title="Regiser"/>
            <Input
            value={email}
            onChange={(e)=>this.onChage(e,'email')}
            label="Email"
            id="email"/>
            <Input
            value={password}
            onChange={(e)=>this.onChage(e,'password')}
            label="Password"
            id="password"/>
            <Input
            value={repassword}
            onChange={(e)=>this.onChage(e,'repassword')}
            label="Re-Password"
            id="repassword"/>
            <SubmitBtn title="Register"/>
        </div>
        </PageWrapper>
    )
    }
}
export default RegisterPage
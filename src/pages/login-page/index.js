import React from 'react'
import Title from '../../components/title'
import SubmitBtn from '../../components/button'
import PageWrapper from '../../components/page-wrapper'
import Input from '../../components/input'
import styles from './index.module.css'

class LoginPage extends React.Component{

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
           
        }=this.state
        
        
        return(
        <PageWrapper>
        <div className={styles.Login}>
            <Title title="Login"/>
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
           
            <SubmitBtn title="Login"/>
        </div>
        </PageWrapper>
    )
    }
}
export default LoginPage
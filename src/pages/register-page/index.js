import React from 'react'
import Title from '../../components/title'
import SubmitBtn from '../../components/button'
import PageWrapper from '../../components/page-wrapper'
import Input from '../../components/input'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context' 

class RegisterPage extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username:'',
            password:'',
            repassword:''
        }
    }
    static contextType = UserContext

    onChage=(event,type)=>{
        const newState={}
            newState[type]=event.target.value
        this.setState(newState)
    }

    handleSubmit=async(event)=>{
        event.preventDefault()
        const{
            username,
            password,
            repassword
        }=this.state

        //fetch

        await authenticate('http://localhost:9999/api/user/register',{
            username,
            password,
            repassword
        },(user)=>{
            this.context.login(user)
            this.props.history.push('/')
        },(e)=>{
            console.log("errrorororor",e);
        })
    }

    render(){  
        
        const {
            username,
            password,
            repassword
        }=this.state
        
        
        return(
        <PageWrapper>
        <form className={styles.Register} onSubmit={this.handleSubmit}>
            <Title title="Regiser"/>
            <Input
            value={username}
            onChange={(e)=>this.onChage(e,'username')}
            label="Username"
            id="username"/>
            <Input
            type="password"
            value={password}
            onChange={(e)=>this.onChage(e,'password')}
            label="Password"
            id="password"/>
            <Input
            type="password"
            value={repassword}
            onChange={(e)=>this.onChage(e,'repassword')}
            label="Re-Password"
            id="repassword"/>
            <SubmitBtn title="Register"/>
        </form>
        </PageWrapper>
    )
    }
}
export default RegisterPage
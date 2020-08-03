import React from 'react'
import Title from '../../components/title'
import SubmitBtn from '../../components/button'
import PageWrapper from '../../components/page-wrapper'
import Input from '../../components/input'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'
class LoginPage extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username:'',
            password:''
        }
    }
    static contextType=UserContext;


    handleChage=(event,type)=>{
        const newState={}
            newState[type]=event.target.value
        this.setState(newState)
    }

    handleSubmit=async(event)=>{
        event.preventDefault()
        const{
            username,
            password
        }=this.state


        //fetch
        await authenticate('http://localhost:9999/api/user/login',{
            username,
            password
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
           
        }=this.state
        
        
        return(
        <PageWrapper>
        <form className={styles.Login} onSubmit={this.handleSubmit}>
            <Title title="Login"/>
            <Input
            
            value={username}
            onChange={(e)=>this.handleChage(e,'username')}
            label="Username"
            id="username"/>
            <Input
            type="password"
            value={password}
            onChange={(e)=>this.handleChage(e,'password')}
            label="Password"
            id="password"/>
           
            <SubmitBtn  title="Login"/>
        </form>
        </PageWrapper>
    )
    }
}
export default LoginPage
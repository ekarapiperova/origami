import React from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-wrapper'
import Origami from '../../components/origamis'
import UserContext from '../../Context'
class ProfilePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username:null,
            posts:null
        }
    }
static contextType=UserContext
    
componentDidMount(){
      this.getUser(this.props.match.params.userid)
    }

    getUser=async(id)=>{
        const response=await fetch(`http://localhost:9999/api/user?id=${id}`)
        
     if(!response.ok) {
        this.props.history.push('/error')
      }
  
      const user = await response.json()
      this.setState({
        username: user.username,
        posts: user.posts && user.posts.length
      })
    
  
    }

    logout=()=>{
      this.context.logout();
      this.props.history.push('/')
    }
    
    render(){
        const {
            username,
            posts
        }=this.state
        
        if(!username) {
            return (
              <PageWrapper>
                <div>Loading....</div>
              </PageWrapper>
            )
          }
        return(
            <PageWrapper>
                <div>
                    <p>User:{username}</p>
                    <p>posts:{posts}</p>

                    <button onClick={this.logout}>Logout</button>
                </div>
                <Origami length={3}/>
            </PageWrapper>
        )
    }

}

export default ProfilePage
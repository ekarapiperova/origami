import React from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-wrapper'
import Origami from '../../components/origamis'
class ProfilePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username:null,
            posts:null
        }
    }

    
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
                </div>
                <Origami length={3}/>
            </PageWrapper>
        )
    }

}

export default ProfilePage
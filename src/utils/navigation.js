const getNavigation=(loggedIn,user)=>{
    const authLInks=[
    {
        title:"Publications",
        link:'/'
    },
    {
        title:"Share your thoughts",
        link:'/share'
    },
    {
        title:"Profile",
        link:`/profile/${user && user.id}`
    }

]
const guestLInks=[
    {
        title:"Publications",
        link:'/'
    },
    {
        title:"Register",
        link:'/register'
    },
    {
        title:"Login",
        link:'/login'
    },

]
return loggedIn ? authLInks:guestLInks
}

export default getNavigation
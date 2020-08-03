const authenticate=async(url,body,onSuccess, onFail)=>{
    try{

        const promise= await fetch(url,{
               method:'POST',
               body: JSON.stringify(body),
               headers:{
                   'Content-Type':'application/json'
               }
           })
   
           const authToken=promise.headers.get('Authorization')
           document.cookie=`x-auth-token=${authToken}`
   
           const response=await promise.json()
   
           if(response.username && authToken){
               onSuccess({
                   username: response.username,
                   id:response._id
               })
           }
           else{
               onFail()
           }
        
       }catch(e){
           onFail(e)
       }
}
export default authenticate
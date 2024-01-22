const Posts=[];
const user ={
    ussename:"Shraiy",
    lastactivetime:"12-jan-2023"
}

const Prepost= async ()=>{

       const createPost=new Promise((resolve,reject)=>{
           Posts.push('title:Post1')
           resolve('Post Is created')
       })
 
       const updateLastUserActivityTime= new Promise((resolve,reject)=>
       {
          setTimeout(()=>{
            user.lastactivetime=new Date().getTime();
            resolve(user.lastactivetime);
          },1000)
       })

   const deletePost= new Promise((resolve,reject)=>{
          if(Posts.length>0)
          {
            const del=Posts.pop();
            resolve(del);
          }
          else{
            reject("Error")
          }
    })
  
    let crete=await createPost;
    console.log(`${crete}`)
    let ActivityTime=await updateLastUserActivityTime
    console.log(`user activity time is ${ActivityTime}`)

    let del=await deletePost;

    console.log('Post is deleted')
    let ActivityTime1=await updateLastUserActivityTime
    

   
    return ActivityTime1

}

Prepost().then((t)=>console.log(`User last active time is ${t}`))




        
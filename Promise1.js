
console.log("Person1: Shows ticket")
console.log("Person2: Shows ticket")

const premovie = async ()=>{
    const wifebringingtickets= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("tickets");
        },3000);
    })

    const getPopcorn = new Promise((resolve,reject)=>{
        resolve('Popcorn')
    })

    const getButter =new Promise((resolve,reject)=>{
        resolve('butter')
    })

    const getColdrinks= new Promise((resolve,reject)=>{
        resolve('Cold Drinks')
    })


    let ticket= await wifebringingtickets;
    
    console.log(`wife: i have ${ticket}`);
    console.log("Husband: we should go in");
    console.log("wife: no i am hungry");

    let Popcorn=await getPopcorn;
    
    console.log(`Husband: here is ${Popcorn}`);
    console.log("Husband: we should go in");
    console.log("wife: no i want butter in my popcorn");

    let butter=await getButter;

    console.log(`Husband: i have ${butter}`);
    console.log("Husband: Anything else baby?");
    console.log("wife: yes I want coldrinks");

    let coldrinks=await getColdrinks;

    console.log(`husband: now lets go here is ${coldrinks}`);
    console.log("Husband: we should go in");
    console.log("wife: okay lets go ");

    return ticket;
}

premovie().then(t=>console.log(`Person3: Shows ${t}`));


console.log("Person4: Shows ticket")
console.log("Person5: Shows ticket")




function getTodos()
{
    // axios({
    //     method:'get',
    //     url:'https://jsonplaceholder.typicode.com/todos',
    //     params:{
    //         _limit:5
    //     }
    // })
    //   .then(res => showOutput(res))
    //   .catch(res=>console.log(res))

     axios.get('https://jsonplaceholder.typicode.com/todos',{
        params:{
            _limit:5
        }
     })
    .then(res=>showOutput(res))
    .catch(res=>showOutput(res))
}

function addTodo()
{
    axios({
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'New data',
            completed:true
        }
    }).then(res=>showOutput(res))
    .catch(res=>console.log(res))

}

function updateTodo()
{
    axios({
        method:'put',
        url:'https://jsonplaceholder.typicode.com/todos/1',
        data:{
            title:'Updated todo',
            completed:true
        }
        
    }).then(res=>showOutput(res))
}

function removeTodo()
{
    axios({
        method:'delete',
        url:'https://jsonplaceholder.typicode.com/todos/1'
      
        
    }).then(res=>showOutput(res));
}

function getData()
{
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/todos')
    ]).then(axios.spread((todos,posts)=>showOutput(posts)))
    .catch(res=>console.log(res))
}

axios.interceptors.request.use(config=>{
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);
    return config

},error=>{
    return Promise.reject(error);
}
);
function customHeaders()
{
    const config={
        headers:{
           'Content-type':'application/json',
           Authorization:'sometoken'
        }
    }

    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:'New post',
        completed:true
    },config
    ).then(res=>showOutput(res))
    .catch(res=>console.log(res))
}

function transformResponse()
{
    const option={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:'Hello World'
        },
        transformResponse:axios.defaults.transformResponse.concat(data=>{
            data.title=data.title.toUpperCase();
            return data
        })

    }
    axios(option).then(res=>showOutput(res))
}

function errorHandling()
{
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>showOutput(res))
    .catch(err=>{
        if(err.response)
        {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

            if(err.response.status==404)
            {
                alert('Page not found');
            }
        }else if(err.request)
        {
            console.log(err.request)
        }else{
            console.log(err.message)
        }
      
    })
}
function cancelToken()
{   
    const source=axios.CancelToken.source();
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        cancelToken:source.token
    })
    .then(res=>showOutput(res))
    .catch(thrown=>{
        if(axios.isCancel(thrown))
        {
            console.log("Request canceled",thrown.message);
        }
    });

    if(true)
    {
        source.cancel('Request canceled');
    }
}

const axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

// axiosInstance.get('/comemnts').then(res=>showOutput(res));

function showOutput(res)
{ 
document.getElementById('res').innerHTML=`

<div class="card card-body mb-4">
<h5>Status: ${res.status}</h5>
</div>

<div class="card mt-3">
<div class="card-header">
  Headers
</div>
<div class="card-body">
  <pre>${JSON.stringify(res.headers, null, 2)}</pre>
</div>
</div>

<div class="card mt-3">
<div class="card-header">
  Data
</div>
<div class="card-body">
  <pre>${JSON.stringify(res.data, null, 2)}</pre>
</div>
</div>

<div class="card mt-3">
<div class="card-header">
  Config
</div>
<div class="card-body">
  <pre>${JSON.stringify(res.config, null, 2)}</pre>
</div>
</div>`;
   

}



document.getElementById('get').addEventListener('click',getTodos);
document.getElementById('post').addEventListener('click',addTodo);
document.getElementById('update').addEventListener('click',updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click',getData);
document.getElementById('headers').addEventListener('click',customHeaders);
document.getElementById('transform').addEventListener('click',transformResponse);
document.getElementById('error').addEventListener('click',errorHandling);
document.getElementById('cancel').addEventListener('click',cancelToken);





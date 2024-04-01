const main=document.getElementById('para')

function  fun(url)
{

    fetch(url)
    .then(res=> res.json())
    .then(data=>
        {
            main.textContent=''
            console.log(data)
            console.log(data.quote)
            const d=document.createElement('div')

            const p=document.createElement('p')
            p.textContent=data.quote
            const a=document.createElement('p')
            a.textContent="-- "+data.author
             const butn=document.createElement('button')
             butn.textContent="save"
             butn.addEventListener('click',()=>save(data))
            d.append(p,a,butn)
            main.append(d)
 
        })
 
    
}



const btn=document.getElementById('btn')
btn.addEventListener('click',fun1)
function fun1()
{
   const id= document.getElementById('search').value
   fun(`https://dummyjson.com/quotes/${id}`)
    
}
const sitems=document.getElementById('para')
function save(sd)
{
    console.log(sd)
    console.log(sd.quote)
    const d=document.createElement('div')

    const p=document.createElement('p')
    p.textContent=sd.quote
    const a=document.createElement('p')
    a.textContent="-- "+sd.author
     const butn=document.createElement('button')
     butn.textContent="remove"
     butn.addEventListener('click',remove)
    d.append(p,a,butn)
    sitems.append(d)
}
function remove()
{
    fun2(`https://dummyjson.com/quotes/000000`)
}
function  fun2(ur)
{

    fetch(ur)
   
    .then(res=>{ console.log(res)
        return res.json()})
    
}


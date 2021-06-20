let apiURL= 'https://ipinfo.io/json'

const getIP=async()=>{
  
   let IPData= await fetch(apiURL).then(j=>j.json()) 
   console.log(IPData)
   // {ip: "167.99.230.64", city: "North Bergen",  …}
}
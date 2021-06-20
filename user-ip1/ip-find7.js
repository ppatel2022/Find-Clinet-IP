let apiURL= 'https://ip-address-js.herokuapp.com/' //my heroku server url.
let apiURLfull= 'https://ip-address-js.herokuapp.com/IPwithData'

const getIP=async()=>{
  
   let IP= await fetch(apiURL).then(t=>t.text()) 
    console.log(IP) // 445.142.8.9 => String
    
   let IPData= await fetch(apiURLfull).then(j=>j.json()) 
    console.log(IPData)
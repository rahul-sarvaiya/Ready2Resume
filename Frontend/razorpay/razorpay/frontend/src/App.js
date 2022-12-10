import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Swal from "sweetalert2"; 
import Navbar from './navbar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';




function loadScript(src)
{
return new Promise(resolve => {



const script=document.createElement('script')
script.src = src
script.onload = () =>{
resolve(true)
}
script.onerror = () =>{
resolve(false)
}
document.body.appendChild(script)
})

}




const __DEV__ = document.domain === 'localhost'




function App() {





let user=JSON.parse(localStorage.getItem('user-info'));


async function displayRazorpay(){

    var email=user[0].email;
    var img="tmp4";

   let item={email,img};


   let result= await fetch("http://127.0.0.1:8000/api/put_p",{
     method:'PUT',
     headers:{
       "Content-Type":'application/json',
       "Accept":'application/json'
     },
     body: JSON.stringify(item)

 });
 result=await result.json();



if(result=="Something went wrong")
 {
     Swal.fire
     ({
         text: "Please reload this page",
         icon: "warning",
         buttons: true,
         dangerMode: true,
     });
 }
 else if(result=="updated")
 {
  



var res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')




if(!res){
alert('razropay SDK failed to load')
return
}



const data = await fetch('http://localhost:1337/razorpay',{method: 'POST' }).then(t => t.json())






console.log(data)



const options = {
key: __DEV__ ? 'rzp_test_buwq2Rog4l5rqo' : 'PRODUCTION_KEY',
currency: data.currency,
amount: data.amount.toString(),
order_id: data.id,
handler:function (response){
    Swal.fire({
        text: "Payment Successfully Done",
        icon: "success",
      }).then(function() {
        window.location = "http://localhost:3001/right2";
    });
        },
name: 'Resume',
description: 'Test',
image: 'https://example.com/your_logo',
prefill: {
email: user[0].email,
contact: ''
},
}
const paymentObject = new window.Razorpay(options);
paymentObject.open();




}
}
return (
<div className="App">
<Navbar/>
<h1>You are about to make transaction of 50rs for premium template.</h1>
  
<Button
className="bu"
onClick={displayRazorpay}
target="_blank"
rel="noopener noreferrer">Continue</Button>

</div>
);
}



export default App;
import React from "react";





async function Razorpay()
{

    const __DEV__ = document.domain === 'localhost'
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
callback_url: 'sbmp.ac.in',
name: 'Resume',
description: 'Test',
image: 'https://example.com/your_logo',
prefill: {
name: '',
email: '',
contact: ''
},
}
const paymentObject = new window.Razorpay(options);
paymentObject.open();


}

export default Razorpay;
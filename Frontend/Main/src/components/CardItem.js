import React ,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Visibility } from '@material-ui/icons';
import Swal from "sweetalert2"; 

function CardItem(props) {

  const history=useHistory();


async function path(){


  if(!localStorage.getItem('user-info'))
  {
    history.push("/sign-In");
  }
  else {
      var id
         id = (props.id);
        var view
        view =(props.view);
        view=view+1;

        let item={view,id};


        let result= await fetch("http://127.0.0.1:8000/api/view",{
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
        window.location.href = (props.path);
      }
  
    }

      

        
     
        
  }
 

  return (
<>
  
          



    <div class="flip-card">

  <div class="flip-card-inner">
    <div class="flip-card-front">
    
      <img src={props.src} alt="tmp"  />
    </div>
    <div class="flip-card-back">
    <img src={props.src} alt="tmp"  />
    

<button 
 type="submit" 
 onClick={path}>

 <div class="ic"><Visibility/></div> 
 <div class="text1">Use This Tamplate</div>

</button>

    </div>
  </div>
</div>


    
</>
  );

}

export default CardItem;

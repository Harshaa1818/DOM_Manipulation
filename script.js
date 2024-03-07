

    var istatus=document.querySelector("h3");
    var btn=document.querySelector("button");
    
    var check=0;

    btn.addEventListener("click",function(){
        
       if(check==0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        btn.innerHTML="Remove friend"
        btn.style.backgroundColor="grey"
        check=1;
       }
       
       else{
       istatus.innerHTML="Strangers";
       istatus.style.color="red";
       btn.innerHTML="Add friend";
       btn.style.backgroundColor="aquamarine"
       check=0;
       }
    })
   

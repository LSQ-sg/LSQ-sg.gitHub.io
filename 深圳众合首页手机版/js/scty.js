
let indexsele=document.querySelector(".emd")
let indexsebox=document.querySelector(".amd")
let i=0;
indexsele.addEventListener("click",function(){
    if(i==0){
        indexsebox.style.display="block";
        i=1;
    }else{
        indexsebox.style.display="none";
        i=0;
    }
    
})

let btn=document.querySelector("#mode");
let body=document.querySelector("body");
let text=document.querySelector ("p");
let curMode="light";
btn.addEventListener("click",()=>{
    if(curMode ==="light"){
        body.style.backgroundColor="Black";
        curMode ="dark";
        text.style.color="Cyan";
        btn.style.backgroundColor="cyan";
        btn.style.color="black";
    }
    else{
        body.style.backgroundColor="Cyan";
        curMode="light";
        text.style.color="Black";
        btn.style.backgroundColor="black";
        btn.style.color="cyan";
    }

});

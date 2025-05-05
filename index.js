let Countel=document.getElementById("count-el");
let saveel=document.getElementById("save-el");
let count=0;
function increment(){
    count+=1;
    Countel.innerText=count;
}

function save(){
    let countstr=count+" - "
    saveel.innerHTML+=countstr;
    Countel.innerText = 0;
    count = 0;
}
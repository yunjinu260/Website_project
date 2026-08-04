const btnres = document.querySelector("#restart");
const btnsub = document.querySelector("#submit");
const btnans = document.querySelector("#answer");
const play = document.querySelector(".play");
const list = document.querySelector("#list");
const papers = document.querySelectorAll(".paper");
const n = document.querySelectorAll(".card");

let ans = [];

btnres.addEventListener("click", ()=>{
    ans = [];
    while(ans.length < 4){
        let num = (Math.floor(Math.random()*9)+1);
        if(!ans.includes(num)){
        ans.push(num);}
    }

    for(let i = 0; i<4; i++){
       n[i].textContent = ans[i];
    }

});
papers.forEach((input, index) => {
     input.addEventListener("input", ()=>{
     
        if(input.value.length ==1 && index< papers.length-1){

            papers[index +1 ].focus();
        }

     });  
      input.addEventListener("keydown", (e)=>{
         if(e.key == "Backspace" && input.value==""&& index>0){
            papers[index-1].focus();
         }
    });
});

function submit(){
    for(let i of papers){
    if(i.value==""){
        return;
    }}
    let num = 0;
    for(let j = 0; j<4; j++){
        num = num + papers[i]*(10^(3-i));
    }
    const item = document.createElement("div");
    item.textContent = `${num}`;

    list.appendChild(item);
}
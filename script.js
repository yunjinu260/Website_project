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
        let num = Number((Math.floor(Math.random()*9)+1));
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
    let num = "";
    for(let i of papers){
        num = num + `${i.value} `;
    }

    let s = 0;
    let b = 0;

    for(let i = 0; i<4; i++){
       for(let j = 0; j<4; j++){
        if(ans[i] == Number(papers[j].value) && i == j){
            s++;
        }
        else if(ans[i] == Number(papers[j].value) && i != j){
            b++;
        }
       }
    }


    const item = document.createElement("div");
    item.classList.add("item");

    const reply = document.createElement("div");
    reply.textContent = num;
    item.appendChild(reply);

    const hint = document.createElement("div");
    hint.textContent = `${s}S ${b}B`;
    if(s+b >= 4){
        hint.textContent = "정답!";
        hint.style.color = "red";
    }
    else if(s+b >= 3){
        hint.style.color = "orange";
    }
    else if(s+b >= 2){
        hint.style.color = "green";
    }

    item.appendChild(hint);
   
   
    

    list.appendChild(item);
}
btnsub.addEventListener("click", ()=>{
    submit();
});

const entry = document.querySelector("#entry");
const First=document.querySelector("#First");
const Second=document.querySelector("#Second");
const numButtons = document.querySelectorAll(".numberButton");
const zerobtn=document.querySelector(".zero")
const addbtn=document.querySelector("#addition");
const opbtn=document.querySelector("#operate");
const subbtn=document.querySelector("#subtraction")
const mulbtn=document.querySelector("#multiply")
const delbtn=document.querySelector("#delete")

let store = [];
let result =[];

numButtons.forEach(function(btn) {
btn.addEventListener("click", function(e) {
if(result[0]==1){    
entry.value=[]
entry.value += this.value;
result[0]=0
console.log("result")
First.textContent=`${store[0]} +`
store[2]=""
 Second.textContent=``

}
else {
  entry.value+=this.value
  console.log("entry")
}
});
});
    
zerobtn.addEventListener("click", function(e){
if(!entry.value){
    return null
}else{
entry.value += this.value;
}
    
}
)
delbtn.addEventListener("click",function(e){
    clear()
  });
 
function clear(){
     store=[];
     entry.value=""
     First.textContent="-"
     Second.textContent="-"
     result=[];
     console.log(store,"delete")
}

addbtn.addEventListener("click",function(e){
    add()
  });

function add(){
    if(store[0]==null){
      store[0]=entry.value
      store[1]="+"
      First.textContent=`${store[0]} +`
      entry.value=""
      console.log(store,"was empty")
    }
    else if(store[1]=="+"){
      if(entry.value==""){
        store[2]=0
        console.log(store,"second number is 0")
        First.textContent=`${store[0]} +`
        Second.textContent=`${store[2]} =`
        entry.value=parseInt(store[0])+parseInt(store[2])
        store[0]=entry.value 
        result[0]=1
        console.log(store,"result")
     
      }
      else{
        store[2]=entry.value
        console.log(store,"second number")
        First.textContent=`${store[0]} +`
        Second.textContent=`${store[2]} =`
        entry.value=parseInt(store[0])+parseInt(store[2])
        store[0]=entry.value 
        result[0]=1
        console.log(store,"result")
    }
}}

opbtn.addEventListener("click",function(e){
  operate()
});

function operate(){
  
}

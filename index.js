const txtArea=document.getElementById("input");
const charCount=document.getElementById("count");
const remCount=document.getElementById("rcount");
txtArea.addEventListener("keyup",()=>{
    update();
})
function update(){
   charCount.innerText=txtArea.value.length;
    remCount.innerText=txtArea.getAttribute("maxLength")- txtArea.value.length;

}
//your JS code here. If required.
let count=0;
let para=document.getElementById("counter");
let incBtn=document.getElementById("incrementBtn");
incBtn.addEventListener("click", ()=>{
	count++;
	para.innerText=count;
})

//dom//
let settingbtn = document.querySelector(".setting");

function rendersetting(){
let settingopen = document.querySelector("#setting");
settingopen.classList.add("opensetting");
  let body = document.querySelector("body");
  body.classList.add("body-locked") ; 
};
settingbtn.addEventListener("click",rendersetting );

function removesetting(){
    let settingclose = document.querySelector("#setting");
    settingclose.classList.remove("opensetting");
    let body = document.querySelector("body");
    body.classList.remove("body-locked") ;
};

let closesetting = document.querySelector(".removesetting");

closesetting.addEventListener("click", removesetting );


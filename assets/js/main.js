import {renderInfo, } from  "./Dom.js"
import{renderTableassets , renderTableTheadAssets , renderTableTbodyAssets , tbodyinfoassets } from "./Dom2.js"
import {getAssetslist , updateCurrentoffset} from "./server.js" 

renderInfo();
renderTableassets();
renderTableTheadAssets();
renderTableTbodyAssets();

let tbodyTable = document.querySelector(".tbodyClass");

//error//

function renderError(msg){
  let errorcontainer = document.createElement("tr");
  errorcontainer.classList.add("tbodytr");
  tbodyTable.appendChild(errorcontainer);

  let tderror = document.createElement("td");
  tderror.classList.add("error");
  tderror.setAttribute("colspan","8"); 
  tderror.textContent=msg;
  errorcontainer.appendChild(tderror);

}

//loading//

function renderloading(){
  let loadingcontainer = document.createElement("tr");
  loadingcontainer.classList.add("tbodytr2");
  tbodyTable.appendChild(loadingcontainer);

  let tdloading = document.createElement("td");
  tdloading.classList.add("loading");
  tdloading.setAttribute("colspan","8"); 
  tdloading.textContent= "loading...";
  loadingcontainer.appendChild(tdloading);
}

function removeloading(){
  let loadingEl = document.querySelector(".tbodytr2");
  tbodyTable.removeChild(loadingEl);
}


//run//

async function renderTbodyTrTd(){
  let listofTrTd = await getAssetslist();
listofTrTd.forEach( function(item){
  tbodyinfoassets(item);
})
}

renderloading();
renderTbodyTrTd().catch(function(error){
  renderError("There is a problem...");
}).finally(function(){
  removeloading();
})

  //BTN//

function renderbtn(){
  let btncontainer = document.querySelector(".btn");
  let creatBtn = document.createElement("button");
  creatBtn.classList.add("btnclass");
  creatBtn.textContent="View More";
 btncontainer.appendChild(creatBtn);
creatBtn.addEventListener("click" , function () {
  updateCurrentoffset(20);
  renderTbodyTrTd() ;

});

}

renderbtn();





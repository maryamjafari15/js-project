import {renderInfo, } from  "./Dom.js"
import { renderTAble , renderTableTheadExchanges , renderTableTbodyExchanges , tbodytrexchanges } from "./Dom2.js"
import {getExchangeslist , getMarketlist} from "./server.js"


renderInfo();
renderTAble();
renderTableTheadExchanges();
renderTableTbodyExchanges(); 
let tbodyexchangesTable= document.querySelector(".tbodyClass");

  //error//

  function renderError(msg){
    let errorcontainer = document.createElement("tr");
    errorcontainer.classList.add("tbodytr");
    tbodyexchangesTable.appendChild(errorcontainer);
 
    let tderror = document.createElement("td");
    tderror.classList.add("error");
    tderror.setAttribute("colspan","7"); 
    tderror.textContent=msg;
    errorcontainer.appendChild(tderror);

  }

  //loading//

  function renderloading(){
    let loadingcontainer = document.createElement("tr");
    loadingcontainer.classList.add("tbodytr");
    tbodyexchangesTable.appendChild(loadingcontainer);
 
    let tdloading = document.createElement("td");
    tdloading.classList.add("loading");
    tdloading.setAttribute("colspan","7"); 
    tdloading.textContent= "loading...";
    loadingcontainer.appendChild(tdloading);
  }
 
  function removeloading(){
    let loadingEl = document.querySelector(".tbodytr");
    tbodyexchangesTable.removeChild(loadingEl);
  }
  
  
  //run //
  let startIndex= 0;
  const itemsperpage = 20;

  async function renderExchangeslist(){
    let list = await getExchangeslist();
   let listsorted = list.sort((a, b) => a.rank - b.rank);
    
   let selectedItem = listsorted.slice(startIndex , startIndex + itemsperpage);

    selectedItem.forEach( function(item){
      tbodytrexchanges(item);
    })
    
    startIndex += itemsperpage ;
  }

  


  renderloading();
  renderExchangeslist().catch(function (error){
    renderError("There is a problem...");
  }).finally( function(){
    removeloading();
  })

  //BTN//

  function renderExchangesbtn(){
    let btncontainer = document.querySelector(".btn");
    let creatBtn = document.createElement("button");
    creatBtn.classList.add("btnclass");
    creatBtn.textContent="View More";
   btncontainer.appendChild(creatBtn);
   creatBtn.addEventListener("click",
    renderExchangeslist
   )
  }
  renderExchangesbtn();

  
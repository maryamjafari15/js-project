// Dom//
//part1//

let info =[
   
    {
      "id": "Market Cap",
      "number": "$2.58T",
    },
    {
      "id": "Exchange Vol",
      "number": "$32.18B",
    } ,
    { 
      "id": "Assets",
      "number": "2,299",
    } ,
    {
      "id": "Exchanges",
      "number": "116",
    },
     {
      "id": "Markets",
      "number": "7,232",
    },
     {
      "id": "BTC Dom Index",
      "number": "41.6%",
    } 
  ] 
  
  let section1 = document.querySelector(".section1");
  function renderInfo(){

    let mainSection1 = document.createElement("div");
    mainSection1.classList.add("mainsection1");
    section1.appendChild(mainSection1)
  
    let mainSection2 = document.createElement("div");
    mainSection2.classList.add("mainsection2");
    mainSection1.appendChild(mainSection2);
  
  function renderBaseInfo(infoItem){
    let baseInfo = document.createElement("div");
    baseInfo.classList.add("base-info");
    mainSection2.appendChild(baseInfo);
  
    let labelBaseInfo = document.createElement("div");
    labelBaseInfo.classList.add("label");
    let final= (infoItem.id).toUpperCase();
    labelBaseInfo.textContent= final;
    baseInfo.appendChild(labelBaseInfo);
  
    let numberBaseInfo = document.createElement("span");
    numberBaseInfo.classList.add("number-baseinfo");
    numberBaseInfo.textContent =  infoItem.number;
    baseInfo.appendChild(numberBaseInfo);
  }
   info.forEach(renderBaseInfo);
  };
  renderInfo();

  //part2//

let titleExchangestable=[ "Rank", "Name " , "Trading Pairs" , " Top Pair", "Volume(24Hr)" , "Total(%)" , "Status"];


let containermain= document.querySelector(".exchangesList");

 function renderTAble(){
let containerTable =  document.createElement("div");
containerTable.classList.add("container-table");
containermain.appendChild(containerTable);

let exchangesTable = document.createElement("table");
exchangesTable.classList.add("exchangestable");
containerTable.appendChild(exchangesTable);
 }

 renderTAble();

 let container = document.querySelector(".exchangestable")

function renderTableTheadExchanges(){
let theadexchangestable = document.createElement("thead");
theadexchangestable.classList.add("theadexchangestable");
container.appendChild(theadexchangestable);

let theadTr = document.createElement("tr");
theadTr.classList.add("theadtr");
theadexchangestable.appendChild(theadTr);

function rendertd (exchangestitle){
  
let theadTd = document.createElement("th");
theadTd.classList.add("theadth");
theadTd.textContent = exchangestitle;
theadTr.appendChild(theadTd);
}
titleExchangestable.forEach(rendertd);
};
renderTableTheadExchanges();

//part3//

function renderTableTbodyExchanges(){
   let tbodyexchangesTable = document.createElement("tbody");
   tbodyexchangesTable.classList.add("tbodyClass");
   container.appendChild(tbodyexchangesTable);

}

renderTableTbodyExchanges();

let tbodyexchangesTable= document.querySelector(".tbodyClass");

function tbodytrexchanges(data){

let exchangesTbodyTableTr = document.createElement("tr");
   exchangesTbodyTableTr.classList.add("tbodytr");
   tbodyexchangesTable.appendChild(exchangesTbodyTableTr);


   let TbodyTdRank = document.createElement("td");
    TbodyTdRank.classList.add("Tbodytd2");
    exchangesTbodyTableTr.appendChild(TbodyTdRank);
    TbodyTdRank.textContent= data.rank; 

    let TbodyTdName = document.createElement("td");
    TbodyTdName.classList.add("Tbodytd1");
    exchangesTbodyTableTr.appendChild(TbodyTdName);
    TbodyTdName.textContent= data.name;
    
    let TbodyTdTrading = document.createElement("td");
    TbodyTdTrading.classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdTrading);
    TbodyTdTrading.textContent=data.tradingPairs;

    let TbodyTdtopPair = document.createElement("td");
    TbodyTdtopPair .classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdtopPair );
    TbodyTdtopPair .textContent="USDT";

    let TbodyTdVolume = document.createElement("td");
    TbodyTdVolume.classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdVolume );
   if ( data.volumeUsd < 1){
    TbodyTdVolume .textContent ="-"
   }else {
    TbodyTdVolume .textContent= numeral(data.volumeUsd).format("($0.00a)");
   }
   
    let TbodyTdTotal = document.createElement("td");
    TbodyTdTotal.classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdTotal );

    if(data.percentTotalVolume<0.00000001){
      TbodyTdTotal.textContent= "-";
    }else{ TbodyTdTotal .textContent= Number.parseFloat(data.percentTotalVolume).toFixed(2)+ "%";};
   
    
    let TbodyTdStatus= document.createElement("td");
    exchangesTbodyTableTr.appendChild(TbodyTdStatus );
    TbodyTdStatus.classList.add( "Tbodytd" );
    TbodyTdStatus .textContent=" ";

    let TbodyTdStatus2= document.createElement("div");
    TbodyTdStatus.appendChild(TbodyTdStatus2);
    TbodyTdStatus2.textContent=" ";

    if (data.socket == true ){
    TbodyTdStatus2.classList.add("greencircle");}
    else if (data.socket == false){
      TbodyTdStatus2.classList.add("redcircle");
    } else{
      TbodyTdStatus2.classList.add("yellowcircle");
    };

  }
  
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
    loadingcontainer.classList.add("tbodytr2");
    tbodyexchangesTable.appendChild(loadingcontainer);
 

    let tdloading = document.createElement("td");
    tdloading.classList.add("loading");
    tdloading.setAttribute("colspan","7"); 
    tdloading.textContent= "loading...";
    loadingcontainer.appendChild(tdloading);
  }
 

 
  function removeloading(){
    let loadingEl = document.querySelector(".tbodytr2");
    tbodyexchangesTable.removeChild(loadingEl);
  }
  

  //fetch//

  async function getExchangeslist(){
    let baseUrl = "https://api.coincap.io/v2";
    let exchangesUrl = baseUrl + "/exchanges?offset=0&limit=120";
      let response = await fetch(exchangesUrl);
      let body = await response.json();
  
      return body.data;
  }

  async function getMarketlist(){
    let baseUrl = "https://api.coincap.io/v2";
    let MarketssUrl = baseUrl + "/markets";
      let response = await fetch(MarketssUrl);
      let body = await response.json();
  
      return body.data;
  }
  
  //run //
  async function renderExchangeslist(){
    let list = await getExchangeslist();
   let listsorted = list.sort((a, b) => a.rank - b.rank);
    listsorted.forEach( function(item){
      tbodytrexchanges(item);
    })
    
  }

  


  renderloading();
  renderExchangeslist().catch(function (error){
    renderError("There is a problem...");
  }).finally( function(){
    removeloading();
  })

  //BTN//

  // function renderExchangesbtn(){
  //   let btncontainer = document.querySelector(".btn");
  //   let creatBtn = document.createElement("button");
  //   creatBtn.classList.add("btnclass");
  //   creatBtn.textContent="View More";
  //  btncontainer.appendChild(creatBtn);
  // }
  
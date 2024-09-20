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

let container= document.querySelector(".exchangestable");

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
    TbodyTdtopPair .textContent=data.tradingPairs;

    let TbodyTdVolume = document.createElement("td");
    TbodyTdVolume.classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdVolume );
    TbodyTdVolume .textContent=data.volumeUsd;
   
   
    let TbodyTdTotal = document.createElement("td");
    TbodyTdTotal.classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdTotal );
    TbodyTdTotal .textContent=data.percentTotalVolume;
   
    
    let TbodyTdStatus= document.createElement("td");
    TbodyTdStatus.classList.add("Tbodytd");
    exchangesTbodyTableTr.appendChild(TbodyTdStatus );
    TbodyTdStatus .textContent=data.socket;

  }
  

  //fetch//

  async function getExchangeslist(){
    let baseUrl = "https://api.coincap.io/v2";
    let exchangesUrl = baseUrl + "/exchanges";
      let response = await fetch(exchangesUrl);
      let body = await response.json();
  
      return body.data;
  }
  
  async function renderExchangeslist(){
    let list = await getExchangeslist();
    
    list.forEach( function(item){
      tbodytrexchanges(item);
    })
  }
  renderExchangeslist();
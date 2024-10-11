//assets//

let title = [
    "Rank" , "Name" , "Price" , "Market Cap" , "VWAP(24Hr)" , "Supply", "Volume(24Hr)" , "Change(24Hr)"
  ]
  
  let assetsList = document.querySelector(".assetsList");
  
 export function renderTableassets(){
  
    let assetsTableContainer = document.createElement("div");
    assetsTableContainer.classList.add("container-table");
    assetsList.appendChild(assetsTableContainer);
  
    let assetsTable = document.createElement("table");
    assetsTable.classList.add("assetstable");
    assetsTableContainer.appendChild(assetsTable);
  
  }
  

  export function renderTableTheadAssets(){
    let assetsTable = document.querySelector(".assetstable"); 
    let theadTable = document.createElement("thead");
    theadTable.classList.add ("theadassetstable");
    assetsTable.appendChild(theadTable);
  
    let assetsTableTr = document.createElement("tr");
    assetsTableTr.classList.add("theadtr");
    assetsTableTr.classList.add("thead-remove");
    theadTable.appendChild(assetsTableTr);
  
  function renderTheadTd(assetsTitle){
  
     let headTd = document.createElement("th");
     headTd.classList.add("theadth");
     assetsTableTr.appendChild(headTd);
     headTd.textContent= assetsTitle;
  
  
  }
  
  
  title.forEach(renderTheadTd);
  }
  
 
 export  function renderTableTbodyAssets(){
    let assetsTable = document.querySelector(".assetstable"); 
    let tbodyTable = document.createElement("tbody");
    tbodyTable.classList.add ("tbodyClass");
    assetsTable.appendChild(tbodyTable);
  }
  

  
   export function tbodyinfoassets(data){
    
    let tbodyTable = document.querySelector(".tbodyClass");
    let assetsTbodyTableTr = document.createElement("tr");
    assetsTbodyTableTr.classList.add("tbodytr");
    tbodyTable.appendChild(assetsTbodyTableTr);
  
    let TbodyTdRank = document.createElement("td");
    TbodyTdRank.classList.add("Tbodytd2");
    assetsTbodyTableTr.appendChild(TbodyTdRank);
    TbodyTdRank.textContent=data.rank + "  ";
  
    let TbodyTdName = document.createElement("td");
    TbodyTdName.classList.add("Tbodytd1");
    assetsTbodyTableTr.appendChild(TbodyTdName);
    let tbodyTdimg = document.createElement("img");
    tbodyTdimg.classList.add("tdimg");
    TbodyTdName.appendChild(tbodyTdimg);
    let lowercasedSymbol = (data.symbol).toLowerCase();
    let imglogo = "https://assets.coincap.io/assets/icons/"+ lowercasedSymbol+ "@2x.png";
    tbodyTdimg.src=imglogo;
  
    let tbodytdname2 = document.createElement("a");
    tbodytdname2.classList.add("tbodyname2");
    tbodytdname2.href= ` /assets.html?coin=${data.id}`;
    TbodyTdName.appendChild(tbodytdname2);
  
    let tbodyname3 = document.createElement("p");
    tbodyname3.classList.add("smallname");
    tbodytdname2.appendChild(tbodyname3);
    tbodyname3.textContent=data.name;
  
    let tbodyname4 = document.createElement("p");
    tbodyname4.classList.add("smallname2");
    tbodytdname2.appendChild(tbodyname4);
    tbodyname4.textContent=data.symbol;
  
    function formatNumber(num) {
      if (num >= 1e12) {
       return (num / 1e12).toFixed(2) + "t" ;}
        else if (num >= 1e9) { return (num / 1e9).toFixed(2) + "b"; 
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + "m";
      }
      else{return num.toFixed(2)}
      
    }
    function formatNumber2(num) {
      if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + "t" ;}
         else if (num >= 1e9) { return (num / 1e9).toFixed(2) + "b"; 
       } else if (num >= 1e6) {
         return (num / 1e6).toFixed(2) + "m";
       } else if (num>= 1e3){
        return(num / 1e3).toFixed(2) + "k";
       }
       else{return num.toFixed(2)}
    }
  
    let TbodyTdPrice = document.createElement("td");
    TbodyTdPrice.classList.add("Tbodytd");
    TbodyTdPrice.classList.add("res-class3");
    assetsTbodyTableTr.appendChild(TbodyTdPrice);
    TbodyTdPrice.textContent=numeral(data.priceUsd ).format("($0,0.00)");
  
    let TbodyTdMarket = document.createElement("td");
    TbodyTdMarket.classList.add("Tbodytd");
    TbodyTdMarket.classList.add("res-class3");
    assetsTbodyTableTr.appendChild(TbodyTdMarket);
    TbodyTdMarket.textContent="$"+formatNumber( Number.parseFloat(data.marketCapUsd));
  
  
    let TbodyTdVWAP = document.createElement("td");
    TbodyTdVWAP.classList.add("Tbodytd");
    TbodyTdVWAP.classList.add("remove-col");
    assetsTbodyTableTr.appendChild(TbodyTdVWAP);
    TbodyTdVWAP.textContent=numeral(data.vwap24Hr).format("($0,0.00)");
  
    let TbodyTdSupply = document.createElement("td"); 
    TbodyTdSupply.classList.add("Tbodytd");
    TbodyTdSupply.classList.add("remove-col");
    assetsTbodyTableTr.appendChild(TbodyTdSupply);
    TbodyTdSupply.textContent= formatNumber2 (Number.parseFloat(data.supply));
  
    let TbodyTdVolume = document.createElement("td");
    TbodyTdVolume.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdVolume);
    TbodyTdVolume.textContent="$"+ formatNumber2 (Number.parseFloat(data.volumeUsd24Hr ));
  
  
    let TbodyTdChange = document.createElement("td");
    
    assetsTbodyTableTr.appendChild(TbodyTdChange );
    if (data.changePercent24Hr<0){
      TbodyTdChange .classList.add("Tbodytd4");
    }else {
      TbodyTdChange .classList.add("Tbodytd5");
    }
    TbodyTdChange .textContent= (Number.parseFloat(data.changePercent24Hr).toFixed(2)) +"%";
  }

//exchanges//

let titleExchangestable=[ "Rank", "Name " , "Trading Pairs" , " Top Pair", "Volume(24Hr)" , "Total(%)" , "Status"];


let containermain= document.querySelector(".exchangesList");

 export function renderTAble(){
let containerTable =  document.createElement("div");
containerTable.classList.add("container-table");
containermain.appendChild(containerTable);

let exchangesTable = document.createElement("table");
exchangesTable.classList.add("exchangestable");
containerTable.appendChild(exchangesTable);
 }



export function renderTableTheadExchanges(){
  let container = document.querySelector(".exchangestable")
let theadexchangestable = document.createElement("thead");
theadexchangestable.classList.add("theadexchangestable");
container.appendChild(theadexchangestable);

let theadTr = document.createElement("tr");
theadTr.classList.add("theadtr");
theadTr.classList.add("thead-remove");
theadexchangestable.appendChild(theadTr);

function rendertd (exchangestitle){
  
let theadTd = document.createElement("th");
theadTd.classList.add("theadth");
theadTd.textContent = exchangestitle;
theadTr.appendChild(theadTd);
}
titleExchangestable.forEach(rendertd);
};



 export function renderTableTbodyExchanges(){
  let container = document.querySelector(".exchangestable")
   let tbodyexchangesTable = document.createElement("tbody");
   tbodyexchangesTable.classList.add("tbodyClass");
   container.appendChild(tbodyexchangesTable);
}




export function tbodytrexchanges(data){

let tbodyexchangesTable= document.querySelector(".tbodyClass");

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
    TbodyTdTrading.classList.add("res-class3");
    exchangesTbodyTableTr.appendChild(TbodyTdTrading);
    TbodyTdTrading.textContent=data.tradingPairs;

    let TbodyTdtopPair = document.createElement("td");
    TbodyTdtopPair .classList.add("Tbodytd");
    TbodyTdtopPair .classList.add("res-class3");
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
    TbodyTdTotal.classList.add("res-class3");
    exchangesTbodyTableTr.appendChild(TbodyTdTotal );

    if(data.percentTotalVolume<0.00000001){
      TbodyTdTotal.textContent= "-";
    }else{ TbodyTdTotal .textContent= Number.parseFloat(data.percentTotalVolume).toFixed(2)+ "%";};
   
    
    let TbodyTdStatus= document.createElement("td");
    exchangesTbodyTableTr.appendChild(TbodyTdStatus );
    TbodyTdStatus.classList.add( "Tbodytd" );
    TbodyTdStatus.classList.add( "remove-col" );
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
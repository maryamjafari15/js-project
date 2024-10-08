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
  mainSection2.classList.add("res-class");
  mainSection2.classList.add("res3");
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
 let title = [
  "Rank" , "Name" , "Price" , "Market Cap" , "VWAP(24Hr)" , "Supply", "Volume(24Hr)" , "Change(24Hr)"
]

let assetsList = document.querySelector(".assetsList");

function renderTableassets(){

  let assetsTableContainer = document.createElement("div");
  assetsTableContainer.classList.add("container-table");
  assetsList.appendChild(assetsTableContainer);

  let assetsTable = document.createElement("table");
  assetsTable.classList.add("assetstable");
  assetsTableContainer.appendChild(assetsTable);

}

renderTableassets()

let assetsTable = document.querySelector(".assetstable");

function renderTableTheadAssets(){
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

renderTableTheadAssets();



//part3//

function renderTableTbodyAssets(){
  let tbodyTable = document.createElement("tbody");
  tbodyTable.classList.add ("tbodyClass");
  assetsTable.appendChild(tbodyTable);
}

renderTableTbodyAssets();

let tbodyTable = document.querySelector(".tbodyClass");

function tbodyinfoassets(data){

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


//fetch//

let currentOffset = 0;
let limit = 20 ;

async function getAssetslist(){
 let baseUrl = "https://api.coincap.io/v2";
 let assetsUrl = baseUrl + "/assets?offset="+ currentOffset + "&limit=" + limit;
   let response = await fetch(assetsUrl);
   let body = await response.json();

   return body.data;
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
  currentOffset += 20;
  limit=20;
  renderTbodyTrTd() ;

});

}

renderbtn();





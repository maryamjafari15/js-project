//در مرحله اول باید اطلاعات رو از سرور بگیریم//

let baseUrl = "https://api.coincap.io/v2";
let assetsUrl = baseUrl + "/assets";

async function getAssetslist(){
    let response = await fetch(assetsUrl);
    let body = await response.json();

    return body.data;
}

//برای نمایش اطلاعات در صفحه باید المنت های موردنیاز را ایجاد کنیم//

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

function renderInfo(){
  let section1 = document.querySelector(".section1");

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
  labelBaseInfo.textContent= infoItem.id;
  baseInfo.appendChild(labelBaseInfo);

  let numberBaseInfo = document.createElement("span");
  numberBaseInfo.classList.add("number-baseinfo");
  numberBaseInfo.textContent =  infoItem.number;
  baseInfo.appendChild(numberBaseInfo);
}
 info.forEach(renderBaseInfo);
}

//بخش جدول را ایجاد میکنیم//
let title = [
  "Rank" , "Name" , "Price" , "Market Cap" , "VWAP(24Hr)" , "Supply", "Volume(24Hr)" , "Change (24Hr)"
]
function renderAssetsList (){ 
    let assetsList = document.querySelector(".assetsList");

    let assetsTableContainer = document.createElement("div");
    assetsTableContainer.classList.add("container-table");
    assetsList.appendChild(assetsTableContainer);

    let assetsTable = document.createElement("table");
    assetsTable.classList.add("assetstable");
    assetsTableContainer.appendChild(assetsTable);

    let theadTable = document.createElement("thead");
    theadTable.classList.add ("theadassetstable");
    assetsTable.appendChild(theadTable);

    let assetsTableTr = document.createElement("tr");
    assetsTableTr.classList.add("theadtr");
    theadTable.appendChild(assetsTableTr);

  function renderTheadTd(assetsTitle){

     let headTd = document.createElement("td");
     headTd.classList.add("theadtd");
     assetsTableTr.appendChild(headTd);
     headTd.textContent= assetsTitle;
}
   title.forEach(renderTheadTd);

   let tbodyTable = document.createElement("tbody");
   tbodyTable.classList.add ("tbodyClass");
   assetsTable.appendChild(tbodyTable);

   function tableTrTd(tdRank , tdName , tdPrice , tdMarket ,tdVWAP ,tdSupply ,tdVolume  , tdChange){
    let assetsTbodyTableTr = document.createElement("tr");
    assetsTbodyTableTr.classList.add("tbodytr");
    tbodyTable.appendChild(assetsTbodyTableTr);

    let TbodyTdRank = document.createElement("td");
    TbodyTdRank.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdRank);
    TbodyTdRank.textContent=tdRank;

    let TbodyTdName = document.createElement("td");
    TbodyTdName.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdName);
    TbodyTdName.textContent=tdName;

    function formatNumber(num) {
      if (num >= 1e12) {
       return (num / 1e12).toFixed(2) + "t" ;}
        else if (num >= 1e9) { return (num / 1e9).toFixed(2) + "b"; 
      } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + "m";
      }
      else{return num.toFixed(2)}
      
    }

    let TbodyTdPrice = document.createElement("td");
    TbodyTdPrice.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdPrice);
    TbodyTdPrice.textContent="$"+ Number.parseFloat(tdPrice).toFixed(2);

    let TbodyTdMarket = document.createElement("td");
    TbodyTdMarket.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdMarket);
    TbodyTdMarket.textContent="$"+formatNumber( Number.parseFloat(tdMarket));


    let TbodyTdVWAP = document.createElement("td");
    TbodyTdVWAP.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdVWAP);
    TbodyTdVWAP.textContent="$"+ Number.parseFloat(tdVWAP).toFixed(2);

    let TbodyTdSupply = document.createElement("td"); 
    TbodyTdSupply.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdSupply);
    TbodyTdSupply.textContent= formatNumber (Number.parseFloat(tdSupply));

    let TbodyTdVolume = document.createElement("td");
    TbodyTdVolume.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdVolume);
    TbodyTdVolume.textContent="$"+ formatNumber (Number.parseFloat(tdVolume));


    let TbodyTdChange = document.createElement("td");
    TbodyTdChange .classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdChange );
    TbodyTdChange .textContent= Number.parseFloat(tdChange).toFixed(2);
  }

  
  async function renderTbodyTrTd(){
    let listofTrTd = await getAssetslist();
  for (let i=0 ; i<listofTrTd.length ; i++){
    let itemofTrTd = listofTrTd[i];
     tableTrTd(itemofTrTd.rank , itemofTrTd.name , itemofTrTd.priceUsd , itemofTrTd.marketCapUsd ,itemofTrTd.vwap24Hr , itemofTrTd.supply , itemofTrTd.volumeUsd24Hr , itemofTrTd.changePercent24Hr);
  }

  
  };
  renderTbodyTrTd();

 
  
}



renderInfo();
renderAssetsList();


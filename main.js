//در مرحله اول باید اطلاعات رو از سرور بگیریم//

 let currentOffset = 0 ;
 let limit = 20 ;

async function getAssetslist(){
  let baseUrl = "https://api.coincap.io/v2";
  let assetsUrl = baseUrl + "/assets?offset="+ currentOffset + "&limit=" + limit;
    let response = await fetch(assetsUrl);
    let body = await response.json();

    return body.data;
}

getAssetslist();
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
//بخش جدول را ایجاد میکنیم//
let title = [
  "Rank" , "Name" , "Price" , "Market Cap" , "VWAP(24Hr)" , "Supply", "Volume(24Hr)" , "Change(24Hr)"
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

     let headTd = document.createElement("th");
     headTd.classList.add("theadth");
     assetsTableTr.appendChild(headTd);
     headTd.textContent= assetsTitle;


}
   title.forEach(renderTheadTd);
    


   let tbodyTable = document.createElement("tbody");
   tbodyTable.classList.add ("tbodyClass");
   assetsTable.appendChild(tbodyTable);

   function tableTrTd(tdRank ,symbol, imglogo , tdName , tdPrice , tdMarket ,tdVWAP ,tdSupply ,tdVolume  , tdChange){
    let assetsTbodyTableTr = document.createElement("tr");
    assetsTbodyTableTr.classList.add("tbodytr");
    tbodyTable.appendChild(assetsTbodyTableTr);

    let TbodyTdRank = document.createElement("td");
    TbodyTdRank.classList.add("Tbodytd2");
    assetsTbodyTableTr.appendChild(TbodyTdRank);
    TbodyTdRank.textContent=tdRank + "  ";

    let TbodyTdName = document.createElement("td");
    TbodyTdName.classList.add("Tbodytd1");
    assetsTbodyTableTr.appendChild(TbodyTdName);
    let tbodyTdimg = document.createElement("img");
    tbodyTdimg.classList.add("tdimg");
    TbodyTdName.appendChild(tbodyTdimg);
    tbodyTdimg.src=imglogo;

    let tbodytdname2 = document.createElement("a");
    tbodytdname2.classList.add("tbodyname2");
    TbodyTdName.appendChild(tbodytdname2);

    let tbodyname3 = document.createElement("p");
    tbodyname3.classList.add("smallname");
    tbodytdname2.appendChild(tbodyname3);
    tbodyname3.textContent=tdName;

    let tbodyname4 = document.createElement("p");
    tbodyname4.classList.add("smallname2");
    tbodytdname2.appendChild(tbodyname4);
    tbodyname4.textContent=symbol;


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
    assetsTbodyTableTr.appendChild(TbodyTdPrice);
    TbodyTdPrice.textContent=numeral(tdPrice).format("($0,0.00)");

    let TbodyTdMarket = document.createElement("td");
    TbodyTdMarket.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdMarket);
    TbodyTdMarket.textContent="$"+formatNumber( Number.parseFloat(tdMarket));


    let TbodyTdVWAP = document.createElement("td");
    TbodyTdVWAP.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdVWAP);
    TbodyTdVWAP.textContent=numeral(tdVWAP).format("($0,0.00)");

    let TbodyTdSupply = document.createElement("td"); 
    TbodyTdSupply.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdSupply);
    TbodyTdSupply.textContent= formatNumber2 (Number.parseFloat(tdSupply));

    let TbodyTdVolume = document.createElement("td");
    TbodyTdVolume.classList.add("Tbodytd");
    assetsTbodyTableTr.appendChild(TbodyTdVolume);
    TbodyTdVolume.textContent="$"+ formatNumber2 (Number.parseFloat(tdVolume));


    let TbodyTdChange = document.createElement("td");
    
    assetsTbodyTableTr.appendChild(TbodyTdChange );
    if (tdChange<0){
      TbodyTdChange .classList.add("Tbodytd4");
    }else {
      TbodyTdChange .classList.add("Tbodytd5");
    }
    TbodyTdChange .textContent= (Number.parseFloat(tdChange).toFixed(2)) +"%";
  }

  
  async function renderTbodyTrTd(list){
    let listofTrTd = await getAssetslist();
  for (let i=0 ; i<list ; i++){
    let itemofTrTd = listofTrTd[i];
    let lowercasedSymbol = (itemofTrTd.symbol).toLowerCase();
    let renderimg = "https://assets.coincap.io/assets/icons/"+ lowercasedSymbol+ "@2x.png";
     tableTrTd(itemofTrTd.rank ,itemofTrTd.symbol, renderimg , itemofTrTd.name , itemofTrTd.priceUsd , itemofTrTd.marketCapUsd ,itemofTrTd.vwap24Hr , itemofTrTd.supply , itemofTrTd.volumeUsd24Hr , itemofTrTd.changePercent24Hr);
  }

  
  };
  renderTbodyTrTd(20);
  
  // حالا بخش دکمه رو ایجاد میکنیم//

  function renderbtn(){
    let btncontainer = document.querySelector(".btn");
    let creatBtn = document.createElement("button");
    creatBtn.classList.add("btnclass");
    creatBtn.textContent="View More";
   btncontainer.appendChild(creatBtn);
  creatBtn.addEventListener("click" , function () {
    currentOffset += 20;
    limit=20;
    renderTbodyTrTd(20) ;
  
  });


  }
 
  renderbtn();

}


renderAssetsList();




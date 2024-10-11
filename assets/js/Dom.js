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
 export function renderInfo(){
   
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



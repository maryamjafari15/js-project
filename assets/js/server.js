 //assets//
 
 export let currentOffset = 0;
let limit = 20 ;

export function updateCurrentoffset(nextoffsets) {
 
    currentOffset += nextoffsets;
}

  export async function getAssetslist(){
 let baseUrl = "https://api.coincap.io/v2";
 let assetsUrl = baseUrl + "/assets?offset="+ currentOffset + "&limit=" + limit;
   let response = await fetch(assetsUrl);
   let body = await response.json();

   return body.data;
}

//exchanges//

export async function getExchangeslist(){
  let baseUrl = "https://api.coincap.io/v2";
  let exchangesUrl = baseUrl + "/exchanges?offset=0&limit=120";
    let response = await fetch(exchangesUrl);
    let body = await response.json();

    return body.data;
}

export async function getMarketlist(){
  let baseUrl = "https://api.coincap.io/v2";
  let MarketssUrl = baseUrl + "/markets";
    let response = await fetch(MarketssUrl);
    let body = await response.json();

    return body.data;
}
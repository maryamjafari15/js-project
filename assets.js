
async function getAssets(id){
    const response = await fetch (`http://api.coincap.io/v2/assets/${id}`);
    const data =await response.json();
    
    console.log(data);
}

const urlsearchvalue = location.search;
const searchparams = new URLSearchParams(urlsearchvalue);
const id = searchparams.get("coin");


getAssets(id);


//dom//


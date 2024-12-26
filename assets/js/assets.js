
async function getAssets(id){
    const response = await fetch (`http://api.coincap.io/v2/assets/${id}`);
    const data =await response.json();
    
    return data.data;
}

const urlsearchvalue = location.search;
const searchparams = new URLSearchParams(urlsearchvalue);
const id = searchparams.get("coin");



//dom//


function informationofassets(item){

let nameofassets = document.querySelector(".name");
nameofassets.textContent= item.name;
}

  async function renderinfo2(){
   let data2 =await getAssets(id);
   if (data2) {
    informationofassets(data2);
}
    
   }
  

renderinfo2();

 
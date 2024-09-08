//در مرحله اول باید اطلاعات رو از سرور بگیریم//

let baseUrl = "https://api.coincap.io/v2";
let assetsUrl = baseUrl + "/assets";

async function getAssetslist(){
    let response = await fetch(assetsUrl);
    let body = await response.json();

    return body.data;
}

//برای نمایش اطلاعات در صفحه باید المنت های موردنیاز را ایجاد کنیم//

function renderAssetsList (item2 , item , item3 ){ 
    let assetsList = document.querySelector(".assetsList");

    let assetsListitem = document.createElement("li");
    assetsListitem.classList.add("listitem");
    assetsListitem.textContent = item2 +" . "+  item + " " + item3 +" $" ;
    assetsList.appendChild(assetsListitem);


}


// در مرحله بعد باید از ارایه اطلاعات مورد نیاز خودمون استخراج کنیم//

 async function displayAssets(){
    let list= await getAssetslist();

     for (let i = 0 ; i < list.length ; i++){
       let item = list[i].name;
       let item2 = list[i].rank;
       let item3 = list[i].priceUsd;
     renderAssetsList(item2 , item , item3);
}
}
displayAssets();




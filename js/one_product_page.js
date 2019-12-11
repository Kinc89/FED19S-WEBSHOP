$(document).ready(function(){

    const flowers = JSON.parse(localStorage.getItem("Flowers"));
    const imgTag = $(".oneProductImg");

    // let identifiedFlower = flower.id + flowers.img;
    // identifiedFlower.pushStack($(".oneProductImg"));
    //$.urlParam("id");
    
    // const searchParams = new URLSearchParams(window.location.search)
    // console.log(searchParams);

    let identifiedFlower = (new URL(document.location)).searchParams;
    let id = identifiedFlower.get("id", "img");
    let img = identifiedFlower.get("img");
    $("oneProductImg").append(img);
    //$("<img>").attr("src", flowers.img)

    console.log(id + img);
    

});

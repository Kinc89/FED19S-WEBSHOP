//const params = (new URL(document.location)).searchParams;    
    
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

$(document).ready(function(){

    const flowers = JSON.parse(localStorage.getItem("Flowers"));
    // $.urlParam = är en funktion för att hämta ut en parameter som finns i url:en.
    // Parametern finns bara i url:en. Finns inte i localStorage
    let identifiedFlower = $.urlParam("id");
    const flower = flowers.find(function(flower){
        return flower.id == identifiedFlower;  
     })
    
    
    console.log(identifiedFlower);
    // flowers = hela vår lista med alla objekt 
    // [identifiedFlower] = "Vilket objekt vill du visa?"
    // .img = "jag vill ha egenskapen img". Innehåller text som är en url som pekar ut en bild. Ex. bild.jpg  
    console.log(flower.img);
    console.log("Priset är: " + flower.price);

    $(".oneProductPicture").attr("src", flower.img);
    $(".oneProductTitle").text(flower.title);    
    $(".oneProductDescription").text(flower.description);
    $(".oneProductPrice").text("Endast: " + flower.price);
    





    // let identifiedFlower = flower.id + flowers.img;
    // identifiedFlower.pushStack($(".oneProductImg"));
    //$.urlParam("id");
    
    // const searchParams = new URLSearchParams(window.location.search)
    // console.log(searchParams);


});

//const params = (new URL(document.location)).searchParams;    
    
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

$(document).ready(function(){

    const flowers = JSON.parse(localStorage.getItem("Flowers"));
    // $.urlParam = är en funktion för att hämta ut en parameter som finns i url:en.
    // Parametern finns bara i url:en. Finns inte i localStorage
    let flowerObject = $.urlParam("id");
    const identifiedFlower = flowers.find(function(flower1){
        return flower1.id == flowerObject;  
     })
    
    
    console.log(identifiedFlower);
    // flowers = hela vår lista med alla objekt 
    // [identifiedFlower] = "Vilket objekt vill du visa?"
    // .img = "jag vill ha egenskapen img". Innehåller text som är en url som pekar ut en bild. Ex. bild.jpg  
    console.log(identifiedFlower.img);
    console.log("Priset är: " + identifiedFlower.price);

    $(".oneProductPicture").attr("src", identifiedFlower.img);
    $(".oneProductTitle").text(identifiedFlower.title);    
    $(".oneProductDescription").text(identifiedFlower.description);
    $(".oneProductPrice").text(identifiedFlower.price);
    





  


});

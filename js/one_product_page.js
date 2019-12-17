//const params = (new URL(document.location)).searchParams;    
    
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

function CartItem() {
    this.count;
    this.product;
}

$(document).ready(function(){

    const flowers = JSON.parse(localStorage.getItem("Flowers"));
    // $.urlParam = är en funktion för att hämta ut en parameter som finns i url:en.
    // Parametern finns bara i url:en. Finns inte i localStorage
    let flowerObject = $.urlParam("id");
    const identifiedFlower = flowers.find(function(flower){
        return flower.id == flowerObject;  
    })
    
    // flowers = hela vår lista med alla objekt 
    // [identifiedFlower] = "Vilket objekt vill du visa?"
    // .img = "jag vill ha egenskapen img". Innehåller text som är en url som pekar ut en bild. Ex. bild.jpg  

    $(".oneProductPicture").attr("src", identifiedFlower.img);
    $(".oneProductTitle").text(identifiedFlower.title);    
    $(".oneProductDescription").text(identifiedFlower.description);
    $(".oneProductPrice").text("Price: " + identifiedFlower.price);
    

    $(".addToCartBtn").on("click", function(){
        const currentCart = JSON.parse(localStorage.getItem("Cart")) || [];

        let foundFlower = false;
        //1 Sök om produkten finns i ls
        $.each(currentCart, function(i, currentFlower) {
            if(currentFlower.product.id === identifiedFlower.id) {
                // Om produkten finns -> count++
                currentFlower.count++;
                foundFlower = true;
            }
        });
            
        // Om produkten inte finns, lägg till den i currentCart
        if(foundFlower === false){
            let newCartItem = new CartItem();
            newCartItem.count = 1;
            newCartItem.product = identifiedFlower;
            currentCart.push(newCartItem);
        }
                
        // Skriv currentCart till ls
        localStorage.setItem("Cart", JSON.stringify(currentCart));
        console.log(currentCart);

        //$('.cartCount').html();
    });

});

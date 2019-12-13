$(document).ready(function(){

    // Hela vår cart lista från localStorage
    const cart = JSON.parse(localStorage.getItem("Cart"));

    // Loopa igenom listan för att kunna printa ut våra objekt.
    $.each(cart, function(i, currentCartItem){
        console.log(currentCartItem);
        $(".cartProductPicture").attr("src", currentCartItem.product.img);
    });

    // Skapa dynamiskt div-taggar som visar ut bilderna som vi loopar igenom för att visa alla objekten i cartlistan
    
    
    console.log(cart);



});

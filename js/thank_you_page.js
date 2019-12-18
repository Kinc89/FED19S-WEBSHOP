$(document).ready(function(){

    setTimeout(function() {
        $('.loadingWrapper').hide();
    }, 2500); 

    $('.container-fluid').hide();
    
    setTimeout(function() {
        $('.container-fluid').show();
    }, 2500); 
    
  
    
  
    
    let uniqueOrderNr = Math.floor((Math.random() * 999999) + 100);
    let placedOrders = JSON.parse(localStorage.getItem("Placed orders")) || [];

    
    while (placedOrders.indexOf(uniqueOrderNr) >= 0) {
        uniqueOrderNr = Math.floor((Math.random() * 999999) + 100);

    }    
    
    placedOrders.push(uniqueOrderNr);
    localStorage.setItem("Placed orders", JSON.stringify(placedOrders));

    $(".randomOrderNr").html(uniqueOrderNr);


/*


});

    let alreadyPlacedOrder = false;
    $.each(placedOrdersList, function(i, uniqueOrderNr){
        if(placedOrdersList === uniqueOrderNr) {
            // Om produkten finns -> loopa igen
            
            alreadyPlacedOrder = true;
        }
    });
    

        const currentCart = JSON.parse(localStorage.getItem("Cart")) || [];

        let foundFlower = false;
        //1 Sök om produkten finns i ls
        $.each(currentCart, function(i, currentFlower) {
            if(currentFlower.product.id === identifiedFlower.id) {
                // Om produkten finns -> count++
                currentFlower.count++;
                foundFlower = true;
            }

            
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
        
*/
});

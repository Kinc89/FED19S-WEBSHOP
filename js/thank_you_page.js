$(document).ready(function(){
    
    setTimeout(function() {
        $('.loadingWrapper').hide();
    }, 2500); 
    $('.container-fluid').hide();
    setTimeout(function() {
        $('.container-fluid').show();
    }, 2500); 
    let uniqueOrderNr = Math.floor((Math.random() * 0) + 1);
    let orderNumber  = false;
    $.each(placedOrders, function(i, uniqueOrderNr){
    let newOrdernr = Math.floor(Math.random()* 5);
    let orderNr = $(".randomOrderNr").html(newOrdernr);
    //let selectedOrderNr = orderNr.val; 
        if(uniqueOrderNr === placedOrdersList){
            uniqueOrderNr;
            orderNumber = true;
        }    
        if(orderNumber === false){
            placedOrdersList.push(uniqueOrderNr);
            $(".randomOrderNr").html(uniqueOrderNr);
        }
        localStorage.setItem("Placed orders", JSON.stringify(placedOrdersList)); 
    });
/*

    // Sök om numret finns i ls


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

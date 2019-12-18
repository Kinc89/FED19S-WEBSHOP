function updateCartCount () {
    
    const cart = JSON.parse(localStorage.getItem("Cart"));
    let cartBadgeCount = 0;
    $.each(cart, function(i, currentCartItem){
        cartBadgeCount += currentCartItem.count;
    });
    $(".cartCount").html(cartBadgeCount);
        addEventListener("storage", function(e){
    });
}
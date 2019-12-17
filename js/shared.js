
function updateCartCount () {
    console.log("addToCart")


    const cart = JSON.parse(localStorage.getItem("Cart"));
    let cartBadgeCount = 0;


    $.each(cart, function(i, currentCartItem){
        cartBadgeCount += currentCartItem.count;
        console.log("shared.js", currentCartItem)
        

    });
    $(".cartCount").html(cartBadgeCount);
    console.log("badge count", cartBadgeCount)
    addEventListener("storage", function(e){
        console.log("ost",e)
    });
}
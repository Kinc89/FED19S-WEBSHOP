$(document).ready(function(){
    
    setTimeout(function() {
        $('.loadingWrapper').hide();
    }, 2500); 
    $('.container-fluid').hide();
    setTimeout(function() {
        $('.container-fluid').show();
    }, 2500); 
    localStorage.removeItem("Cart");
    let uniqueOrderNr = Math.floor((Math.random() * 999999) + 100);
    let placedOrders = JSON.parse(localStorage.getItem("Placed orders")) || [];
    while (placedOrders.indexOf(uniqueOrderNr) >= 0) {
        uniqueOrderNr = Math.floor((Math.random() * 999999) + 100);
    }    
    placedOrders.push(uniqueOrderNr);
    localStorage.setItem("Placed orders", JSON.stringify(placedOrders));
    $(".randomOrderNr").html(uniqueOrderNr);
});

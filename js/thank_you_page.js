

$(document).ready(function(){

    setTimeout(function() {
        $('.loadingWrapper').hide();
    }, 2500); 
    
    $('.container-fluid').hide();

    setTimeout(function() {
        $('.container-fluid').show();
    }, 2500); 

    let newOrdernr = Math.floor(Math.random()* 5);
    let orderNr = $(".randomOrderNr").html(newOrdernr);
    //let selectedOrderNr = orderNr.val;

    
});

// grekiskan
// math.random() gör samma som i ls varukorg 
// sökfunkionen, vilken ska vi göra?
// Kalender 
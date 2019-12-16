$(document).ready(function(){

    // Hela vår cart lista från localStorage
    const cart = JSON.parse(localStorage.getItem("Cart"));

    // Loopa igenom listan för att kunna printa ut våra objekt.
    $.each(cart, function(i, currentCartItem){
        console.log(currentCartItem);
        let imgcontainer = $("<div>").appendTo(".cartProductDiv").addClass("cartProductImg col-4");
        $("<img>")
            .appendTo(imgcontainer)
            .addClass("cartProductPicture img-fluid")
            .attr("src", currentCartItem.product.img);
        
        let titlecontainer = $("<div>").appendTo(".cartProductDiv").addClass("cartProductInfo col-6");
        $("<h4>")
            .appendTo(titlecontainer)
            .addClass("")
            .text(currentCartItem.product.title);
        $("<p>")
            .appendTo(titlecontainer)
            .addClass("")
            .text("Price: " + currentCartItem.product.price);
        $("<p>")
            .appendTo(titlecontainer)
            .addClass("")
            .text("Articlenr: " + currentCartItem.product.articlenr);

        let deleteBtn = $("<div>").appendTo(".cartProductDiv").addClass("cartProductDeleteBtn col-2");
        $("<button>")
            .appendTo(deleteBtn)
            .addClass("btn cartDeleteBtn")
            .text("\u00D7");

        $(".cartDeleteBtn").on("click", function(){

        });
        
        // let h1HeaderDiv = $("<h1>").html("Say it with flowers").appendTo($("#carusellDiv"));
        // $(h1HeaderDiv).addClass("carusel_h1");


    });

    // Skapa dynamiskt div-taggar som visar ut bilderna som vi loopar igenom för att visa alla objekten i cartlistan
    

    
    console.log(cart);



});

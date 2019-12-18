$(document).ready(function(){

    function printCart(){   
        // Hela vår cart lista från localStorage
        const cart = JSON.parse(localStorage.getItem("Cart"));
        let subtotal = 0;
        const shipping = 99;
       $(".cartProductDiv").empty();
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
                .html("Price: " + currentCartItem.product.price);
                $("<p>")
                .appendTo(titlecontainer)
                .addClass("")
                .text("Article Nr: " + currentCartItem.product.articlenr);
                $("<p>")
                .appendTo(titlecontainer)
                .addClass("")
                .text("Quantity: " + currentCartItem.count);
            let deleteBtn = $("<div>").appendTo(".cartProductDiv").addClass("cartProductDeleteBtn col-2");
            $("<button>")
                .appendTo(deleteBtn)
                .addClass("btn cartDeleteBtn")
                .text("\u00D7");

            deleteBtn.on("click", function(){
                console.log("du klickade");

                cart.splice(i, 1);
                localStorage.setItem("Cart",JSON.stringify(cart));
                printCart();
                updateCartCount();
            });
            let minusBtn = $("<span>").appendTo(titlecontainer);
            $("<button>").addClass("countBtnMinus")
                .appendTo(minusBtn)
                .addClass("btn cartDeleteBtn")
                .text("-");
            minusBtn.on("click", function(){
                $.each(cart, function(i, currentFlower) {
                    if(currentFlower.product.id === currentCartItem.product.id) {                      
                        if (currentFlower.count > 0){
                            currentFlower.count--;
                        }
                    }
                });
                localStorage.setItem("Cart",JSON.stringify(cart));
                updateCartCount();
                printCart();
            });
            let plusBtn = $("<span>").appendTo(titlecontainer);
            $("<button>").addClass("countBtnPlus")
                .appendTo(plusBtn)
                .addClass("btn cartDeleteBtn")
                .text("+");
            plusBtn.on("click", function(){
                $.each(cart, function(i, currentFlower) {
                    if(currentFlower.product.id === currentCartItem.product.id) {
                        currentFlower.count++;
                    }
                });
                localStorage.setItem("Cart",JSON.stringify(cart));
                updateCartCount();
                printCart();
            });
            subtotal = subtotal + parseInt(currentCartItem.product.price) * currentCartItem.count;
            $(".subtotalSum").html(subtotal + " SEK");
            $(".shipping").html(shipping + " SEK");
            $(".totalSum").html(subtotal + shipping + " SEK");
        });
    }
        printCart();
        updateCartCount();
});

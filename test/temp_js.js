$(document).ready(function(){

    const flowers = JSON.parse(localStorage.getItem("Flowers"));
    const imgTag = $(".oneProductImg");

    // let identifiedFlower = flower.id + flowers.img;
    // identifiedFlower.pushStack($(".oneProductImg"));
    //$.urlParam("id");
    
    // const searchParams = new URLSearchParams(window.location.search)
    // console.log(searchParams);

    const params = (new URL(document.location)).searchParams;
    const id = params.get("id");
    const flower = flowers.find(function(flower){
       return flower.id == id  
    })

    $('.oneProductImg').append('<img class="img-fluid" src="' + flower.img + '" />');
    

    let title = $('<div>').addClass("myTitle").html(flower.title);
    let price = $('<div>').addClass("myPrice").text(flower.price);
    let description = $('<div>').addClass("myDescription").text(flower.description);
    

    let myBtn = $('<button>')
        .addClass("btn btn-outline-secondary btnInfo")
        .text("Purchase")
        .attr("alt", "Purchase")
        .on("click", function(){
            const currentCart = JSON.parse(localStorage.getItem("Cart"));

            //1 Sök om produkten finns i ls
            $.each(currentCart, function(i, currentFlower) {
                if(currentFlower.product.id === flower.id) {
                    currentFlower++
                }
            })
                
            
            

            // Om produkten finns -> count++

            // Om produkten inte finns, lägg till den i currentCart
            currentCart.push({count: 1, product: flower});
            
            // Skriv currentCart till ls
            localStorage.setItem("Cart", JSON.stringify([currentCart, {count: 1, product: flower}]))
            
            $('.cartCount').html(1);
        });
    $('.oneProductDescription').append(title, price, description, myBtn)

    


    // let img = identifiedFlower.get("img");
    // $("oneProductImg").append(img);
    //$("<img>").attr("src", flowers.img)

    // console.log(id + img);
    

});

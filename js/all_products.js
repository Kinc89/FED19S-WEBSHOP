$(document).ready(function(){
    
    let flowers = JSON.parse(localStorage.getItem("Flowers"));

    const container = $("#products")


    // for(let i = 0; i < flowers.length; i++) {
    //     const flower = flowers[i]
    //     console.log(flower)
    // }

    for (const flower of flowers){
        // container.append("<div class='product'><h2>"+ flower.title + "</h2> <img src='"+ flower.img +"'/></div>")
        let div = $('<div>').addClass("productWrapper col-6 col-lg-3" + ' ' + flower.category);
        let title = $('<div>').addClass("myTitle").html(flower.title);
        let price = $('<div>').addClass("myPrice").text(flower.price);
        let img = $('<img>').addClass("productImg").attr("src", flower.img).attr("alt", "inspobild");
        let myBtn = $('<button>')
        .addClass("btn btn-outline-secondary btnInfo")
        .text("Purchase")
        .attr("alt", "Purchase")
        .on("click", function(){
            window.open("../html/one_product_page.html?id=" + flower.id + "&img=" + flower.img, "_self")
            
        });
        // $('#test').append('<span>' test[counter] '</span>');
        // $('<p>Text</p>').appendTo('#Content');
        // div.append(title);
    
        div.append(img);
        div.append(title);
        div.append(price);
        div.append(myBtn);
        container.append(div);
        // Såhär kan man göra i modern javascript, funkar ej i IE
        // `<div class="imgWrapper col-6 col-lg-3 ${flower.category}">
        //     <img class="inspoimg" src="${flower.img}" alt="inspobild" />
        // </div>`
    }

    $("#BtnSort1").click(function(event){
        // För att sortera fram rätt kategori
        $(".productWrapper").not(".Birthdayflowers").hide()
        $(".Birthdayflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Birthday flowers")
        $(".categoryDescription").html("Experience our beautiful birthday flowers")
        // För att få samma kategori ovanför sorteringsknapparna
        $(".categoryName2").html("Birthday flowers")
        $(".categoryDescription2").html("Gifts are kindly requested, but birthday flowers are always welcome! It never goes wrong when you choose to send a crackling bouquet to the one who is now celebrating years. Even better, you can expect this to be the perfect gift. You become today's hero no matter what others choose to give to the birthday child!")



    });
    $("#BtnSort2").click(function(event){
        // För att sortera fram rätt kategori
        $(".productWrapper").not(".Loveflowers").hide()
        $(".Loveflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Love flowers")
        $(".categoryDescription").html("Experience our beautiful love flowers")
        // För att få samma kategori ovanför sorteringsknapparna
        $(".categoryName2").html("Love flowers")
        $(".categoryDescription2").html("How do you show that you love and feel great love? With flowers of course! When you send love flowers everything is forgiven. Just that you came to the idea of waking up with nature's most beautiful is impressive. This is proof that you care and that you understand how important it is to show it in practice.")
    });
    $("#BtnSort3").click(function(event){
        // För att sortera fram rätt kategori
        $(".productWrapper").not(".Holidayflowers").hide()
        $(".Holidayflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Holiday flowers")
        $(".categoryDescription").html("Experience our beautiful holiday flowers")
        // För att få samma kategori ovanför sorteringsknapparna
        $(".categoryName2").html("Holiday flowers")
        $(".categoryDescription2").html("A bouquet of flowers is a bunch of energy. It can make anyone start thinking new thoughts. With bouquets we show love, friendship, respect and consideration. We have so many different types of bouquets that you can always find the right arrangement. With flowers it is not difficult to choose. You can go on occasion or choose the colors that you know are favorites.")
    });
    $("#BtnSort4").click(function(event){
        // För att sortera fram rätt kategori
        $(".productWrapper").not(".Seasonflowers").hide()
        $(".Seasonflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Season flowers")
        $(".categoryDescription").html("Experience our beautiful season flowers")
        // För att få samma kategori ovanför sorteringsknapparna
        $(".categoryName2").html("Season flowers")
        $(".categoryDescription2").html("A simple rose says everything that the heart holds. Most people have some form of relationship with the flower that can be said to be the symbol of love. But it doesn't have to be about passion and romantic love. The roses are available in many different colors and variations. A big bouquet of roses for mom or best friend is a warm gesture that is appreciated.")
    });
    $("#BtnSort5").click(function(event){
        // För att sortera fram alla kategorier
        $(".imgWrapper").show()
        // Kategorinamnen
        $(".categoryName").html("All flowers")
        $(".categoryDescription").html("Experience our beautiful flowers")
        // För att få samma kategori ovanför sorteringsknapparna
        $(".categoryName2").html("All flowers")
        $(".productWrapper").show()
        $(".categoryDescription2").html("A flower delivery can help you to express your feelings and thoughts. Send A simple gift to someone you love. Let our flowers be the mediating link between you and the person you have in your thoughts and your heart. By sending flowers with us, what you think and feel will go straight to the recipient's heart.")
    });
});
$(document).ready(function(){
    // På förstasidan: Skapar en h1 till diven som ligger ovanpå carusell och statisk header
    let h1HeaderDiv = $("<h1>").html("Say it with flowers").appendTo($("#carusellDiv"));
    $(h1HeaderDiv).addClass("carusel_h1");

    // På förstasidan: Skapa p-tagg och lägger till den i #carusellDiv
    let pHeaderDiv = $("<p>").html("Beautiful and fresh flowers made daily and delivered across Sweden.").appendTo("#carusellDiv");
    $(pHeaderDiv).addClass("carusel_p");    
    
    let flowers = [
        {id: '1', title: 'Sweet heart', price: '599 kr', articlenr: 0001, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/birthday_flowers/birthdayflowers1.jpg", category: "Birthdayflowers" },
        {id: '2', title: 'Shining star', price: '699 kr', articlenr: 0002, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/birthday_flowers/birthdayflowers2.jpg", category: "Birthdayflowers" },
        {id: '3', title: 'Only prettier', price: '799 kr', articlenr: 0003, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/birthday_flowers/birthdayflowers3.jpg", category: "Birthdayflowers" },
        {id: '4', title: 'Miracle', price: '899 kr', articlenr: 0004, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/birthday_flowers/birthdayflowers4.jpg", category: "Birthdayflowers" },
        {id: '5', title: 'Joyful pleasure', price: '540 kr', articlenr: 0005, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/birthday_flowers/birthdayflowers5.jpg", category: "Birthdayflowers" },

        {id: '6', title: 'Endless love', price: '599 kr', articlenr: 0006, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/love_flowers/loveflowers1.jpg", category: "Loveflowers" },
        {id: '7', title: 'True romance', price: '699 kr', articlenr: 0007, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/love_flowers/loveflowers2.jpg", category: "Loveflowers" },
        {id: '8', title: 'Amore', price: '799 kr', articlenr: 0010, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/love_flowers/loveflowers3.jpg", category: "Loveflowers" },
        {id: '9', title: 'Deep breaths', price: '899 kr', articlenr: 0011, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/love_flowers/loveflowers4.jpg", category: "Loveflowers" },
        {id: '10', title: 'Blossom fairy', price: '540 kr', articlenr: 0012, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/love_flowers/loveflowers5.jpg", category: "Loveflowers" },

        {id: '11', title: 'Song bird', price: '599 kr', articlenr: 0013, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/holiday_flowers/holidayflowers1.jpg", category: "Holidayflowers" },
        {id: '12', title: 'Wonderful day', price: '699 kr', articlenr: 0014, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/holiday_flowers/holidayflowers2.jpg", category: "Holidayflowers" },
        {id: '13', title: 'Purity', price: '799 kr', articlenr: 0015, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/holiday_flowers/holidayflowers3.jpg", category: "Holidayflowers" },
        {id: '14', title: 'Glamorous', price: '899 kr', articlenr: 0016, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/holiday_flowers/holidayflowers4.jpg", category: "Holidayflowers" },
        {id: '15', title: 'Fantasy', price: '540 kr', articlenr: 0017, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/holiday_flowers/holidayflowers5.jpg", category: "Holidayflowers" },

        {id: '16', title: 'Grace', price: '599 kr', articlenr: 0020, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/season_flowers/seasonflowers1.jpg", category: "Seasonflowers" },
        {id: '17', title: 'Daydream', price: '699 kr', articlenr: 00021, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/season_flowers/seasonflowers2.jpg", category: "Seasonflowers" },
        {id: '18', title: 'Wild garden', price: '799 kr', articlenr: 0022, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/season_flowers/seasonflowers3.jpg", category: "Seasonflowers" },
        {id: '19', title: 'Summerday', price: '899 kr', articlenr: 0023, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/season_flowers/seasonflowers4.jpg", category: "Seasonflowers" },
        {id: '20', title: 'Sparkle forest', price: '540 kr', articlenr: 0024, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/season_flowers/seasonflowers5.jpg", category: "Seasonflowers" },

    ];
    const container = $("#products")


    // for(let i = 0; i < flowers.length; i++) {
    //     const flower = flowers[i]
    //     console.log(flower)
    // }

    for (const flower of flowers){
        // container.append("<div class='product'><h2>"+ flower.title + "</h2> <img src='"+ flower.img +"'/></div>")
        let div = $('<div>').addClass("productWrapper col-6 col-lg-3" + ' ' + flower.category);
        let title = $('<div>').addClass("myTitle ").html(flower.title);
        let price = $('<div>').addClass("myPrice").text(flower.price);
        let img = $('<img>').addClass("productImg ").attr("src", flower.img).attr("alt", "inspobild");
        let myBtn = $('<button>')
            .addClass("btn btn-outline-secondary btnInfo")
            .text("Purchase")
            .attr("alt", "Purchase")
            .on("click", function() {
                window.open("html/one_product_page.html?id=" + flower.id)
            })
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
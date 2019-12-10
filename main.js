$(document).ready(function(){
    // På förstasidan: Skapar en h1 till diven som ligger ovanpå carusell och statisk header
    let h1HeaderDiv = $("<h1>").html("Say it with flowers").appendTo($("#carusellDiv"));
    $(h1HeaderDiv).addClass("carusel_h1");

    // På förstasidan: Skapa p-tagg och lägger till den i #carusellDiv
    let pHeaderDiv = $("<p>").html("Beautiful and fresh flowers made daily and delivered across Sweden.").appendTo("#carusellDiv");
    $(pHeaderDiv).addClass("carusel_p");    
    
    let flowers = [
        {id: '1', title: 'Sweet heart', price: '599 kr', articlenr: 0001, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Födelsedagsblommor/birthdayflowers1.jpg", category: "Birthdayflowers" },
        {id: '2', title: 'Shining star', price: '699 kr', articlenr: 0002, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Födelsedagsblommor/birthdayflowers2.jpg", category: "Birthdayflowers" },
        {id: '3', title: 'Only prettier', price: '799 kr', articlenr: 0003, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Födelsedagsblommor/birthdayflowers3.jpg", category: "Birthdayflowers" },
        {id: '4', title: 'Miracle', price: '899 kr', articlenr: 0004, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Födelsedagsblommor/birthdayflowers4.jpg", category: "Birthdayflowers" },
        {id: '5', title: 'Joyful pleasure', price: '540 kr', articlenr: 0005, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Födelsedagsblommor/birthdayflowers5.jpg", category: "Birthdayflowers" },

        {id: '6', title: 'Endless love', price: '599 kr', articlenr: 0006, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Kärleksblommor/loveflowers1.jpg", category: "Loveflowers" },
        {id: '7', title: 'True romance', price: '699 kr', articlenr: 0007, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Kärleksblommor/loveflowers2.jpg", category: "Loveflowers" },
        {id: '8', title: 'Amore', price: '799 kr', articlenr: 0010, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Kärleksblommor/loveflowers3.jpg", category: "Loveflowers" },
        {id: '9', title: 'Deep breaths', price: '899 kr', articlenr: 0011, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Kärleksblommor/loveflowers4.jpg", category: "Loveflowers" },
        {id: '10', title: 'Blossom fairy', price: '540 kr', articlenr: 0012, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Kärleksblommor/loveflowers5.jpg", category: "Loveflowers" },

        {id: '11', title: 'Song bird', price: '599 kr', articlenr: 0013, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Högtidsblommor/holidayflowers1.jpg", category: "Holidayflowers" },
        {id: '12', title: 'Wonderful day', price: '699 kr', articlenr: 00014, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Högtidsblommor/holidayflowers2.jpg", category: "Holidayflowers" },
        {id: '13', title: 'Purity', price: '799 kr', articlenr: 0015, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Högtidsblommor/holidayflowers3.jpg", category: "Holidayflowers" },
        {id: '14', title: 'Glamorous', price: '899 kr', articlenr: 0016, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Högtidsblommor/holidayflowers4.jpg", category: "Holidayflowers" },
        {id: '15', title: 'Fantasy', price: '540 kr', articlenr: 0017, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Högtidsblommor/holidayflowers5.jpg", category: "Holidayflowers" },

        {id: '16', title: 'Grace', price: '599 kr', articlenr: 0020, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Säsongsblommor/seasonflowers1.jpg", category: "Seasonflowers" },
        {id: '17', title: 'Daydream', price: '699 kr', articlenr: 00021, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Säsongsblommor/seasonflowers2.jpg", category: "Seasonflowers" },
        {id: '18', title: 'Wild garden', price: '799 kr', articlenr: 0022, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Säsongsblommor/seasonflowers3.jpg", category: "Seasonflowers" },
        {id: '19', title: 'Summerday', price: '899 kr', articlenr: 0023, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Säsongsblommor/seasonflowers4.jpg", category: "Seasonflowers" },
        {id: '20', title: 'Sparkle forest', price: '540 kr', articlenr: 0024, description: 'All of our flower products are individually crafted from the best blossoms daily. If any flower shown is unavailable for any reason, we may make a substitution of equal or greater value in similar color to ensure timely delivery.', img: "../img/products_img/Säsongsblommor/seasonflowers5.jpg", category: "Seasonflowers" },

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
        let myBtn = $('<button>').addClass("btn btn-outline-secondary btnInfo").text("Purchase").attr("alt", "Purchase")
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
        $(".imgWrapper").not(".Birthdayflowers").hide()
        $(".Birthdayflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Birthday flowers")
        $(".categoryDescription").html("Experience our beautiful birthday flowers")

    });
    $("#BtnSort2").click(function(event){
        // För att sortera fram rätt kategori
        $(".imgWrapper").not(".Loveflowers").hide()
        $(".Loveflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Love flowers")
        $(".categoryDescription").html("Experience our beautiful love flowers")
    });
    $("#BtnSort3").click(function(event){
        // För att sortera fram rätt kategori
        $(".imgWrapper").not(".Holidayflowers").hide()
        $(".Holidayflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Holiday flowers")
        $(".categoryDescription").html("Experience our beautiful holiday flowers")
    });
    $("#BtnSort4").click(function(event){
        // För att sortera fram rätt kategori
        $(".imgWrapper").not(".Seasonflowers").hide()
        $(".Seasonflowers").show()
        // Kategorinamnen
        $(".categoryName").html("Season flowers")
        $(".categoryDescription").html("Experience our beautiful season flowers")
    });
    $("#BtnSort5").click(function(event){
        // För att sortera fram alla kategorier
        $(".imgWrapper").show()
        // Kategorinamnen
        $(".categoryName").html("All flowers")
        $(".categoryDescription").html("Experience our beautiful flowers")
    });
    
});
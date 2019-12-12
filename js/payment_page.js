$(document).ready(function () {
    let backToCartBtn = $("<button>").append(".paymentContainer");
    $(backToCartBtn).addClass("btn btn-outline-secondary btnInfo").html("Back to cart");

    
    // $('#datetimepicker').data("DateTimePicker", function(){
    //     $('#datetimepicker1').datetimepicker();
    // });

    // $("picker").datetimepicker({
    //     timepicker: false,
    //     datepicker: true,
    //     format: "Y-m-d",
    //     value: "2019-8-1",
    //     week: true
    // })

    // $(".form_datetime").datetimepicker({
    //     format: "dd MM yyyy - hh:ii",
    //     autoclose: true,
    //     todayBtn: true,
    //     startDate: "2013-02-14 10:00",
    //     minuteStep: 10
    // });

    // Data Picker Initialization
    $('.datepicker').pickadate();



    // Koppla Purchase knappen till Thank ypu page  
    // $("#btnSubmit").on("click", function(){
    //     alert("Hej");
    // });

});


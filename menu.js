$( document ).ready(function() {

//Slider menu (hide/show)

$( ".ua_menu" ).hide();
$( ".gtm_menu" ).hide();
$( ".ads_menu" ).hide();
$( ".sub_menu" ).hide();

$( ".ads").click(function() {
    $( ".ads_menu" ).slideToggle( "slow", function() {
    });
});

$( ".analytics_but").click(function() {
    $( ".ua_menu" ).slideToggle( "slow", function() {
    });
});

$( ".gtm" ).click(function() {
    $( ".gtm_menu" ).slideToggle( "slow", function() {
    });
});

// Change links GA4/UA

$( ".ga4").click(function() {
    if ($(".analytics_but").html()=="UA") {
    $(".analytics_but").html("GA4");
    $("#et").attr("href","ga4-et.html");
    $("#dr").attr("href","ga4-dr.html");
    $("#ecomm").attr("href","ga4-ecomm.html");  
    }
    else {$(".analytics_but").html("UA");    
    $("#et").attr("href","ua-et.html");
    $("#dr").attr("href","ua-dr.html");
    $("#ecomm").attr("href","ua-ecomm.html");
    }
});

});

//Rotate arrows


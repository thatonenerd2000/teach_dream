/*global $*/
/*global ready*/
$(document).ready(function(){
    $("#title").typeIt({
        speed: 100,
        lifeLike: true,
    });
    $('#sec1').paroller();
    $('#sec3').paroller();
    $(".scrolla").scrolla({
        mobile:true
    });
    $(".dropdown-trigger").dropdown();
})

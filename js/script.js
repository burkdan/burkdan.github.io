
// var dlg_opts = { show: false, keyboard: false, backdrop: 'static' };
// $('.modal').modal(dlg_opts);

$(document).ready(function () {
    $("div[id^='portfolioModal']").each(function () {
        var currentModal = $(this);

        //click next
        currentModal.find('.next').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest());
            currentModal.closest("div[id^='portfolioModal']").nextAll("div[id^='portfolioModal']").first().modal('show');
        });

        //click prev
        currentModal.find('.prev').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest("div[id^='portfolioModal']"));
            currentModal.closest("div[id^='portfolioModal']").prevAll("div[id^='portfolioModal']").first().modal('show');
        });
    });
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(function () {
  $('[data-toggle="popover"]').popover({html: true, container: 'body', placement: "right", viewport: ".container", trigger: "hover"})
})

// $('.collapse').on('shown.bs.collapse', function(){
// $(this).parent().find(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
// }).on('hidden.bs.collapse', function(){
// $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
// });

$('.collapse').on('shown.bs.collapse', function(){
$(this).parents(".card").find(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
}).on('hidden.bs.collapse', function(){
$(this).parents(".card").find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
});


// $(document).ready(function(){    
//     $('.collapse').on('shown.bs.collapse', function () {
//        $(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
//     });

//     $('.collapse').on('hidden.bs.collapse', function () {
//        $(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
//     });
// });
$(function() {
    $('.page-scroll').on('click', function(e){
        let tujuan = $(this).attr('href');
        let elemenTujuan = $(tujuan);
        $('html,body').animate({
            scrollTop: elemenTujuan.offset().top - 100
        }, 1000);
        e.preventDefault();
    })
});

$(document).ready(()=>{
    $('#ri2').keyup(function(){
        var x=$('#ri2').val();
        $('.ru').html(x);
    })
    $('.run').click(()=>{
        $('.thatdisappear').css({"display":"block","height":"100%","position":"fixed","top":"0","width":"100%","left":"0","background-color":"#f7f7f7"});
        $('.closebtn').fadeIn();
    })
    $('.clear').click(()=>{
        $('.ru,#ri2').html('');
        $('#ri2').val('');
    })
    $('div.closebtn').click(400,()=>{
        $('.thatdisappear').slideUp();
        $('.closebtn').fadeOut();
    })
    $('.copy').click(function(){
        navigator.clipboard.writeText($('#ri2').val());
    })
    setTimeout(() => { 
        $('.ads').css({'display':""});
    }, 2000);
});

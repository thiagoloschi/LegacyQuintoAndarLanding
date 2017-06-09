$('#phone').keyup(function() {
    var tel = $(this).val();
    if(tel.length > 13){
        $('#send').prop("disabled", false);
        $('#send').css({"border":"solid 2px #505050"});
        $('#send').css({"color":"#505050"});
    }else{
        $('#send').prop("disabled", true);
        $('#send').css({"border":"solid 2px #9d9d9d"});
        $('#send').css({"color":"#9d9d9d"});
    }
});

$('#send').click(function(){
    $('#send').prop("disabled", true);
    $('#send').css({"border":"solid 2px #9d9d9d"});
    $('#send').css({"color":"#9d9d9d"});
    $('#phone').val('');
});

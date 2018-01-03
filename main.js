$(document).ready(function () {
    var chk = 'HPODISMCDKSXADS';
    $('body').bind('keyup',function(e){
        chk = chk.concat(String.fromCharCode(e.keyCode));
        console.log(chk);
        if (chk == "HPODISMCDKSXADS&&((%'%'SA")
        {
            window.location.href = "http://google.com";
        }
    });
});


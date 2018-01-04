$(document).ready(function () {
    var chk = 'HPODISMCDKSXADS';
    $('body').bind('keyup',function(e){
        chk = chk.concat(String.fromCharCode(e.keyCode));
        // console.log(chk);
        var len = chk.length;
        console.log(len);
        if(len==25){
            if (chk == "HPODISMCDKSXADS&&((%'%'SA")
            {
                window.location.href = "http://google.com";
            }
            else {
                alert('INVALID INPUT');
                chk = 'HPODISMCDKSXADS';
            }
         }
        console.log(chk);
        
    });
});


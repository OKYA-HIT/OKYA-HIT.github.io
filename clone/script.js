window.onload = function() {
    var loginBox = document.querySelector('.outBox');
    var i =0;
    document.getElementById("labela").addEventListener('change', function(){
    if(!document.getElementById("labela").value==''){
        loginBox.classList.add('existence');
        loginBox.classList.remove('empty');
    }else{
        loginBox.classList.remove('existence');   
        loginBox.classList.add('empty');
    }
    });

    document.addEventListener("keypress", function() {
    });

    document.getElementById("forgotID").addEventListener('click', function() {
        
    });

}


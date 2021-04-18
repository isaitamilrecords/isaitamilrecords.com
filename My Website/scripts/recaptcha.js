var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phonenoformat = /^\+[0-9]*$/;


setInterval(function() {
    $('#heart').toggleClass('fas');
    $('#heart').toggleClass('far');
}, 500);

function submit() {
    if (grecaptcha.getResponse().length == 0) {
        $('#cw').slideDown();
    } else {
        $('#cw').slideUp();
        grecaptcha.reset();
        var sub = "Someone sent you message via isaitamilrecords.com";
        var message = "<table><tr><td>NAME</td><td>" + document.querySelector('#mname').value + "</td></tr><tr><td>MOBILE NO.</td><td>" + document.querySelector('#mmobile').value + "</td></tr><tr><td>EMAIL</td><td>" + document.querySelector('#memail').value + "</td></tr><tr><td>MESSAGE</td><td>" + document.querySelector('#mmessage').value + "</td></tr></table>";
        sendMail(sub, message);
        document.querySelector('#mname').value = "";
        document.querySelector('#mmobile').value = "";
        document.querySelector('#memail').value = "";
        document.querySelector('#mmessage').value = "";
    }
}

function showfloat() {
    $(".floatover").fadeIn();
    $(".floatover").css('display', 'flex');
    $(".floatbox").fadeIn();
}

function closefloat() {
    $(".floatbox").fadeOut();
    $(".floatover").fadeOut();
    grecaptcha.reset();
}

function successPrompt() {
    $(".floatbox").fadeOut(function() {
        grecaptcha.reset();
        $(".successbox").fadeIn();
    });
}

function closesuccess() {
    $(".successbox").fadeOut();
    $(".floatover").fadeOut();
    grecaptcha.reset();
}

function verifyMessage() {
    var a = 0;
    if (document.querySelector("#mname").value.length === 0) {
        $('#mmobilewarning').slideUp();
        $('#mnamelabel').slideDown();
    } else {
        $('#mnamelabel').slideUp();
        a++;
    }

    if (document.querySelector("#mmobile").value.length === 0) {
        $('#mmobilewarning').slideUp();
        $('#mmobilelabel').slideDown();
    } else {
        $('#mmobilelabel').slideUp();

        if (!document.querySelector("#mmobile").value.match(phonenoformat)) {
            $('#mmobilewarning').slideDown();
        } else {
            $('#mmobilewarning').slideUp();
            a++;
        }
    }

    if (document.querySelector("#memail").value.length === 0) {
        $('#memaillabel').slideDown();
    } else {
        $('#memaillabel').slideUp();
        if (!document.querySelector("#memail").value.match(mailformat)) {
            $('#memailwarning').slideDown();
        } else {
            $('#memailwarning').slideUp();
            a++;
        }
    }

    if (document.querySelector("#mmessage").value.length === 0) {
        $('#mmessagelabel').slideDown();
    } else {
        $('#mmessagelabel').slideUp();
        a++;
    }

    if (a == 4) {
        showfloat();
    }
}
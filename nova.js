
//change the text auto... of htmltag


var example = ['Front-End developer', 'Photography lover', 'UI/UX designer', 'Student'];

textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementsByClassName("animated")[0].innerHTML = example[i];
            textSequence(++i);
        }, 2500); // 2.5 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}

// var typed = new typed(".animated",{
//     String: ["Front-End developer", "Photography lover", "UI/UX designer", "Student"],
//     typeSpeed: 150,
//     backspeed: 150,
//     loop: true
// })

//change the title
let docTitle = document.title;
 window.addEventListener("blur",() => {
    document.title = "Think About It";
   });

   window.addEventListener("focus", () => {
    document.title = docTitle;

   });




// contact me form
var a = 0;

function mouseOver() {

    const name = document.forms['suForm']['name'].value;
   
    const email = document.forms['suForm']['email'].value;
    const mess = document.forms['suForm']['message'].value;
    

    



    if ((name == "" ||  email == "" || message == "") && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    if ((name == "" ||  email == "" || message == "") && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }

    if ((name == "" ||  email == "" || message == "") && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    else {

        // document.getElementById('submit-btn').click();  
        document.getElementById('submit-btn').style.cursor = 'pointer';
        return false;
    };

};




function buttonMoveLeft() {

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(100%)';

};


function buttonMoveRight() {

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';

};


function resetBtn() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};

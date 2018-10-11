// function sendMail() {
//     var link = "mailto:eth.fish@gmail.com"
//              + "?"
//              + "&subject=" + escape("This is my subject")
//              + "&body=" + escape(document.getElementById('message').value)
//     ;

//     window.location.href = link;
// }

// document.getElementById("submit-btn").addEventListener("click", function() {
//     sendMail(); return false
// });

document.getElementById("email").addEventListener("click", function () {
    window.location.href = 'mailto:eth.fish@gmail.com'
});
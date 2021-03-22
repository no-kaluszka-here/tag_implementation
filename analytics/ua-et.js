// function ajaxpost(){
//   // (A) GET FORM DATA
//   var data = new FormData();
//   data.append("text", document.getElementById("answer").value);
 
//   // (B) AJAX
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "0-dummy.php"+data.toString());
//   // What to do when server responds
//   xhr.onload = function(){ console.log(this.response); };
//   xhr.send(data);
//   // (C) PREVENT HTML FORM SUBMIT
//   return true;
// }

// temaplte - var c = /.*onclick\s*=\s*"gtag\u0028'event'\s*,\s*'.*'\s*,\s*\u007B'event_categoty'\s*:\s*'*.'\s*\u007D\u0029;".*/;

//onclick="gtag('event','action',{'event_category':'cat'});"

//onclick="gtag('event','action',{event_categoty:'category'});"


function checkClick(){
    var clickContent = document.getElementById("click-edit").innerHTML;
    var c = /(&nbsp|\s)*;onclick\s*=\s*"gtag\u0028'event'\s*,\s*'.*'\s*,\s*\u007B'event_category'\s*:\s*'.*'\s*\u007D\u0029;*".*/;
    var match = clickContent.match(c);
    
    if (clickContent == match) {
        console.log("that's correct!");
        document.getElementById("check-click").innerHTML = "Correct!";
    } 
    
    else 
    document.getElementById("check-click").innerHTML = "Try again!";
    console.log("err");
    console.log("actual: "+clickContent);
    console.log("test: "+ match);
};


document.querySelector('[contenteditable]').addEventListener('paste', function (event) {
    event.preventDefault();
    document.execCommand('inserttext', false, event.clipboardData.getData('text/plain'));
  });



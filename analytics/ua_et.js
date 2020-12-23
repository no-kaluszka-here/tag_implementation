

function ajaxpost(){
  // (A) GET FORM DATA
  var data = new FormData();
  data.append("text", document.getElementById("answer").value);
 
  // (B) AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "0-dummy.php"+data.toString());
  // What to do when server responds
  xhr.onload = function(){ console.log(this.response); };
  xhr.send(data);
  // (C) PREVENT HTML FORM SUBMIT
  return false;
}

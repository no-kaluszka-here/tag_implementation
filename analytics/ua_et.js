

$(".action_form").on("submit", function(){
    var input=this.name;
    var answer=input.val();
    if (answer == "42") alert("You know the truth");
    else alert("Try again next time");
});

console.log($(".action_form").input);
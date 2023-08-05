document.getElementById("flipButton").addEventListener("click", function() {
    var coin = document.getElementById("coin");
    coin.style.animation = "spin 3s forwards";
    setTimeout(function(){
        coin.style.animation = "";
    }, 3000);
});
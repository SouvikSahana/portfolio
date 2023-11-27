var modal = document.getElementById("myModal");
var btn = document.getElementById("menu");
        
var span = document.getElementsByClassName("close")[0];
var data=document.getElementsByClassName("closer")

btn.onclick = function() {
    modal.style.display = "block";
    }
        
span.onclick = function() {
    modal.style.display = "none";
    }
        
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
          }
    }

for(let i=0;i<data.length;i++){
    data[i].onclick = function() {
        modal.style.display = "none";
        }
}
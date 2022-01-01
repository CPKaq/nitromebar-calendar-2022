var showDiv = document.getElementById("desc-show");
var hideDiv = document.getElementById("desc-hide");

window.οnlοad = hideDesc();

function showDesc()
{
    showDiv.style.display = "none";
    hideDiv.style.display = "inline";
}

function hideDesc()
{
    showDiv.style.display = "inline";
    hideDiv.style.display = "none";
}
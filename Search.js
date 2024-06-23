
function Search(){

var SearchVal= document.getElementById('SearchTF').value;
if(SearchVal=="Phone number"||SearchVal=="Phone number "||SearchVal=="phone number")
{
alert("Radhakrishna Achar: 9481518240");
}
else if(SearchVal.substring(0,2)=="so"||SearchVal.substring(0,2)=="So")
{
window.location.href="sofa.html";
}
else if(SearchVal.substring(0,2)=="te"||SearchVal.substring(0,2)=="Te")
{
window.location.href="teapoy.html";

}
else if(SearchVal.substring(0,2)=="do"||SearchVal.substring(0,2)=="Do")
{
window.location.href="doors.html";
  
}
else
{
window.location.href="others.html";
}

document.getElementById("SearchTF").value=""; 

}

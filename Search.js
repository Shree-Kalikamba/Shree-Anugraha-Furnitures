
function Search(){

var SearchVal= document.getElementById('SearchTF').value;
if(SearchVal=="phone number")
{
alert("Radhakrishna Achar: 9481518240");
}
else if(SearchVal.substring(0,2)=="so")
{
window.location.href="sofa.html";
}
else if(SearchVal.substring(0,2)=="te")
{
window.location.href="teapoy.html";

}
else if(SearchVal.substring(0,2)=="do")
{
window.location.href="doors.html";
  
}
else
{
window.location.href="others.html";
}

document.getElementById("SearchTF").value=""; 

}

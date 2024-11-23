

var click = document.getElementById('submit');

function display()
{
   if(document.getElementById("sname").value == '' )
   {
    alert("Name must be filled out");
    return false;
   }
   if(document.getElementById("cource").value == '' )
   {
    alert("please select a cource");
    return false;
   }
   var sname = document.getElementById("sname").value;
   var course= document.getElementById("cource").value;

   document.getElementById("greet").innerHTML = "Hi, "  +sname+  " You are successfully registered for the  "  +course+  " course";

}
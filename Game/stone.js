
document.querySelector("#btnNname").addEventListener("click",handleclick);
function handleclick(){
  var name=$("#username").val();
    alert("hello \""+name+"\" !!Thanks For playing");
  $("#btnNname").hide();
  $("#username").hide();
  $("#name").hide();
  $("#showname").show();
  $("#showname").replaceWith(name);
  $("#showname").classList.add("mystyle");;
};


for(i=0;i<3;i++)
{
  document.querySelectorAll(".option")[i].addEventListener("click",function(){

    var userinput=this.innerHTML;

      var name=$("#username").val();
    var randomNumber=Math.floor(Math.random()*3)+1;
    var randomImage="img"+randomNumber+".jpg"
    var computerImage=document.querySelector("#computerImage");
    computerImage.setAttribute("src", randomImage);
    if(userinput=="Stone" && randomImage=="img1.jpg")
    {
      setTimeout(function(){ alert("It's A Draw "+ name +" Not to Worry"); }, 300);
    }
    else if(userinput=="Stone" && randomImage=="img2.jpg")
    {
      setTimeout(function(){ alert( "You Lost!!!"+ name); }, 300);
    }
    else if(userinput=="Stone" && randomImage=="img3.jpg" )
    {
      setTimeout(function(){ alert("You Won!!!" + name); }, 300);
    }

    else if(userinput=="Paper" && randomImage=="img2.jpg")
    {
      setTimeout(function(){ alert("It's A Draw "+ name +" Not to Worry"); }, 300);
    }
    else if(userinput=="Paper" && randomImage=="img3.jpg")
    {
      setTimeout(function(){ alert( "You Lost!!!"+ name); }, 300);
    }
    else if(userinput=="Paper" && randomImage=="img1.jpg" )
    {
      setTimeout(function(){ alert("You Won!!!" + name); }, 300);
    }



    else if(userinput=="Scissor" && randomImage=="img3.jpg")
    {
      setTimeout(function(){ alert("It's A Draw "+ name +" Not to Worry"); }, 300);
    }
    else if(userinput=="Scissor" && randomImage=="img1.jpg")
    {
      setTimeout(function(){ alert( "You Lost!!!"+ name); }, 300);
    }
    else if(userinput=="Scissor" && randomImage=="img2.jpg" )
    {
      setTimeout(function(){ alert("You Won!!!" + name); }, 300);
    }
  });
}

var images = ["https://i.pinimg.com/736x/99/bd/11/99bd115d730e68729ed7f5afdb9410ed.jpg","https://easydrawingguides.com/wp-content/uploads/2021/01/Cartoon-Dad-Step-11.png","https://static7.depositphotos.com/1007989/760/i/600/depositphotos_7601771-stock-photo-homemade-dish.jpg"]
var names = ["Parshti Bajpai","Sanjay Avisheka","Arti Bajpai"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
    
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

}



 

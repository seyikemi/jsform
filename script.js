// function caller1(x){
    
    // if(x=""){
    //     x.style.display = "none";

    // }

//     document.getElementsById("age").object.style.display="block";
// }
// function caller11(x){
  
// }

function checkempty(x){
    if (x = ""){
        document.getElementById(x).style.display = "none";
    }
}

// first check
document.getElementById("firstName").onmouseover = function () 
{
mouseOver()

};

document.getElementById("firstName").onmouseout = function() {
    mouseOut()
    
};

function mouseOver() {
    document.getElementById("firstName").style.color = "blue";
}

function mouseOut() {
  
    document.getElementById("age").style.display = "block";
    
    

}
// second check
// document.getElementById("age").onmouseover = function () 
// {
// mouseOver()

// };

// document.getElementById("age").onmouseout = function() {
//     mouseOut()
    
// };

// function mouseOver() {
//     document.getElementById("age").style.color = "blue";
// }

// function mouseOut() {
  
//     document.getElementById("gender").style.display = "block";
    

// }
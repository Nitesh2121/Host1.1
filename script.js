document.getElementById("parent").innerHTML=("Something Else");
// document.getElementById("parent"). style.backgroundColor=("red");
// document.getElementById("parent"). style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am Nitesh Khadka");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 18 years old");
document.getElementsByClassName("exercise")[2].style.cssText=("background-color:red; color:white; text-align:center")
document.getElementsByTagName("h1")[0].style.cssText=("text-align:center; text-transfrom:uppercase;");
document.getElementsByTagName("h1")[1].style.cssText=("text-align:center; text-transfrom:uppercase;");
document.getElementsByTagName("h1")[2].style.cssText=("text-align:center; text-transfrom:uppercase;");
document.querySelector("h2").innerHTML=("Manchester is red");
document.querySelector("#hi").innerHTML=("Tweenty-one");
document.querySelector(".Hello").innerHTML=("NJK");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am Neetesh");
}
// function myFunction(){
// document.open()
// document.write("<h1>Hello World</h1>");
// document.close();
// }

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow. document.write("<h1>Hello World</h1>");
    myWindow.document.close();
}
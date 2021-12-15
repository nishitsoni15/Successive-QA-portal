document.getElementsByClassName("tab-button")[0].addEventListener("click",function(){
    document.getElementsByClassName("popular-content")[0].style.display="block";
    document.getElementsByClassName("answers-content")[0].style.display="none";
    document.getElementsByClassName("tab-button")[0].classList.add("tab-button-1");
    document.getElementsByClassName("tab-button")[1].classList.remove("tab-button-1");
});

document.getElementsByClassName("tab-button")[1].addEventListener("click",function(){
    document.getElementsByClassName("popular-content")[0].style.display="none";
    document.getElementsByClassName("answers-content")[0].style.display="block";
    document.getElementsByClassName("tab-button")[0].classList.remove("tab-button-1");
    document.getElementsByClassName("tab-button")[1].classList.add("tab-button-1");
});
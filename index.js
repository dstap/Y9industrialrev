function page(x){
    clear();
    document.getElementById(x).style.display = "block";
    if (x == "home"){
        
        document.getElementById("homenavbar").style.display = "block";
        document.getElementById("pages").style.display = "none";
        document.getElementById("navbar").style.top = "-5%";
        document.getElementById("homecontent").style.top = "50%";
        document.getElementById("footer").style.top = "200%";

        
        document.getElementById("homenavbar").style.top = "0";
    window.scrollTo(0, 0);



    }else {
        if(x == "hcpage"){
        document.getElementById("footer").style.top = "170%";
        }else if(x == "chpage"){
        document.getElementById("footer").style.top = "155%";

        }else if(x == "pdpage"){
        document.getElementById("footer").style.top = "150%";

        }else if(x == "geopage"){
            document.getElementById("footer").style.top = "210%";

        }
        
        document.getElementById("homenavbar").style.display = "none";
        document.getElementById("pages").style.display = "block";
    window.scrollTo(0, 0);


    }

    
}
function scrolldown(){
    window.scrollTo(0, 750);



}
function clear(){
    document.getElementById("home").style.display = "none";
    document.getElementById("hcpage").style.display = "none";

    document.getElementById("pdpage").style.display = "none";
    document.getElementById("geopage").style.display = "none";


    document.getElementById("chpage").style.display = "none";


}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var homenavbar1 = document.getElementById('homenavbar');
  

if (homenavbar1.style.display != "none") {
    
  if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("homenavbar").style.top = "-100%";
    document.getElementById("homecontent").style.top = "50";





  } else if(homenavbar1.style.display == "") {
    document.getElementById("homenavbar").style.display = "block";
   

} else{
    document.getElementById("navbar").style.top = "-5%";
    document.getElementById("homecontent").style.top = "100%";

    document.getElementById("homenavbar").style.top = "0";




  }
} else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("homecontent").style.top = "50";
    document.getElementById("homenavbar").style.top = "-100%";

    
}
}

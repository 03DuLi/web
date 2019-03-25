window.onload = function(){
    var oDiv=document.getElementById("click");
    var aInput=oDiv.getElementsByTagName("input");
    var aClass=document.getElementsByClassName("content-right-middle");
    for(var i=0;i<aInput.length;i++){
        aInput[i].index=i;
        aInput[i].onclick=function (){
            for(var i=0;i<aInput.length;i++){
                aInput[i].className="";
                aClass[i].style.display="none";
            }
            this.className="active";
            aClass[this.index].style.display="block";
        }
    }
}
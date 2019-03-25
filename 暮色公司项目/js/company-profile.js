var link1 = document.getElementById("link1");
if(document.documentElement.clientWidth>1025){
    link1.href = '../css/c-company-profile.css';
}else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
    link1.href = '../css/f-company-profile.css';
}else if(550>document.documentElement.clientWidth){
    link1.href = '../css/m-company-profile.css';
}
window.onresize=function(){
    var link2 = document.getElementById("link1");
    if(document.documentElement.clientWidth>1025){
        link1.href = '../css/c-company-profile.css';
    }else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
        link1.href = '../css/f-company-profile.css';
    }else if(document.documentElement.clientWidth<550){
        link1.href = '../css/m-company-profile.css';
    }
}
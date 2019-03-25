var link1 = document.getElementById("link1");
if(document.documentElement.clientWidth>1025){
    link1.href = '../css/c-register-demand.css';
}else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
    link1.href = '../css/f-register-demand.css';
}else if(550>document.documentElement.clientWidth){
    link1.href = '../css/m-register-demand.css';
}
window.onresize=function(){
    var link2 = document.getElementById("link1");
    if(document.documentElement.clientWidth>1025){
        link1.href = '../css/c-register-demand.css';
    }else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
        link1.href = '../css/f-register-demand.css';
    }else if(document.documentElement.clientWidth<550){
        link1.href = '../css/m-register-demand.css';
    }
}
var link1 = document.getElementById("link1");
if(document.documentElement.clientWidth>1025){
    link1.href = '../css/c-Processe-demand.css';
}else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
    link1.href = '../css/f-Processe-demand.css';
}else if(550>document.documentElement.clientWidth){
    link1.href = '../css/m-Processe-demand.css';
}
window.onresize=function(){
    var link2 = document.getElementById("link1");
    if(document.documentElement.clientWidth>1025){
        link1.href = '../css/c-Processe-demand.css';
    }else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
        link1.href = '../css/f-Processe-demand.css';
    }else if(document.documentElement.clientWidth<550){
        link1.href = '../css/m-Processe-demand.css';
    }
}
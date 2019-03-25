var link1 = document.getElementById("link1");
if(document.documentElement.clientWidth>1025){
    link1.href = '../css/c-classification-column.css';
}else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
    link1.href = '../css/f-classification-column.css';
}else if(550>document.documentElement.clientWidth){
    link1.href = '../css/m-classification-column.css';
}
window.onresize=function(){
    var link2 = document.getElementById("link1");
    if(document.documentElement.clientWidth>1025){
        link1.href = '../css/c-classification-column.css';
    }else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
        link1.href = '../css/f-classification-column.css';
    }else if(document.documentElement.clientWidth<550){
        link1.href = '../css/m-classification-column.css';
    }
}
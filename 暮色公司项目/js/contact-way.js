var link1 = document.getElementById("link1");
if(document.documentElement.clientWidth>1025){
    link1.href = '../css/c-contact-way.css';
}else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
    link1.href = '../css/f-contact-way.css';
}else if(550>document.documentElement.clientWidth){
    link1.href = '../css/m-contact-way.css';
}
window.onresize=function(){
    var link2 = document.getElementById("link1");
    if(document.documentElement.clientWidth>1025){
        link1.href = '../css/c-contact-way.css';
    }else if(document.documentElement.clientWidth<1025&&document.documentElement.clientWidth>550){
        link1.href = '../css/f-contact-way.css';
    }else if(document.documentElement.clientWidth<550){
        link1.href = '../css/m-contact-way.css';
    }
}
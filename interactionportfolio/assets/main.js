var div=document.getElementsByTagName('a')[0];
var count=0;
    div.onclick=function (b) {
        count++
        if(count%2==1){
            div.style.color='#39FF14';
        }else {
            div.style.color='white';
        }
    }

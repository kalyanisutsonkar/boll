const bol =document.querySelector('.boll');

 let positionX = 0;
 let positionY = 0;
 let diffX = 5;
 let diffY = 5;

 const interval = setInterval(function(){
const container =document.querySelector('.container');

    bol.style.left = positionX + 'px';
    bol.style.top = positionY + 'px';
    positionX =  positionX + diffX;
    positionY =  positionY + diffY;
    if (positionX >= container.clientWidth -20 || positionX < 1) {       
        diffX = diffX * - 1;
    }
    if(positionY >= container.clientHeight - 20 || positionY < 1){
        diffY = diffY * -1
    }
  }, 10);
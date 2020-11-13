function isTouching(mr,fr){
    if (mr.x - fr.x < fr.width/2 + mr.width /2 
      && fr.x - mr.x < fr.width/2 + mr.width /2
      &&  fr.y - mr.y < fr.height/2 + mr.height/2
        && mr.y - fr.y < fr.height/2 + mr.height/2) {
          return true;
        }
        else {
          return false;
        }
  
  }
  
  function bounceOff (mr,fr){
    if (mr.x - fr.x < fr.width/2 + mr.width /2 
      && fr.x - mr.x < fr.width/2 + mr.width /2) {
        mr.velocityX = mr.velocityX * (-1)
        fr.velocityX = fr.velocityX * (-1)
      } 
      if( fr.y - mr.y < fr.height/2 + mr.height/2
      && mr.y - fr.y < fr.height/2 + mr.height/2) {
        mr.velocityY = mr.velocityY * (-1)
        fr.velocityY = fr.velocityY * (-1) 
      }
  }
import react from 'react'

import './Spinner.scss'

const  Spinner = () => {

let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

// ex1Layer.onmousedown = dragMouseDown;

// function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

// function elementDrag(e) {
//   e = e || window.event;
//   e.preventDefault();
//   // calculate the new cursor position:
//   pos1 = pos3 - e.clientX;
//   pos2 = pos4 - e.clientY;
//   pos3 = e.clientX;
//   pos4 = e.clientY;
//   // set the element's new position:
//   if(e.target == ex1Layer) {
//     e.target.style.top = (e.target.offsetTop - pos2) + "px";
//     e.target.style.left = (e.target.offsetLeft - pos1) + "px";
//   }
// }
// function closeDragElement() {
//   // stop moving when mouse button is released:
//  document.onmouseup = null;
//  document.onmousemove = null;
// }

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - window.innerHeight / 2) / constrain;
  let calcY = (x - window.innerWidth / 2);

  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};

  return (
    <div id="ex1" class="container">
      <div id="ex1-layer" class="box">
        <h1 className='profile-title'>Software Engineer</h1>
      </div>
    </div>
  )
}

export default Spinner

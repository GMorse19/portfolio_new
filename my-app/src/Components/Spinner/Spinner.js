import react from 'react'

import './Spinner.scss'

const  Spinner = () => {
// LINK: https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html

let constrain = 20;
let constrain2 = 30;
let mouseOverContainer = document.getElementById('ex1')
// window.onload = function () {
//   mouseOverContainer = document.getElementById("ex1");
// }
let ex1Layer = document.getElementById("ex1-layer");

let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - window.innerHeight / 2) / constrain;
  let calcY = (x - window.innerWidth / 2) / constrain2;

  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
   console.log('goodbye')
  el.style.transform  = transforms.apply(null, xyEl);
}


mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  console.log(xy)
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};


  return (
    <div id="ex1" className="container">
      <div id="ex1-layer" className="box">
        <h1 id='profile-sub'>Software Engineer</h1>
      </div>
    </div>
  )
}

export default Spinner

(function () {
 'use strict';

 }());


var navigation_system = navigator.platform;


function platform_container(nv) {

 if (navigation_system===navigation_system) {

 var platform_testing = new CSInterface(); 

platform_testing.evalScript('platform_system_element("'+navigation_system+'")');

}

}


const items = document.querySelectorAll('#item_element');
let prevItem = null;

items.forEach((item) => {
  item.addEventListener('click', () => {
    if (prevItem !== null) {
      prevItem.style.backgroundColor = '#1a1a1a';
    }
    item.style.backgroundColor = '#3b3737';
    prevItem = item;
  });

  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#3b3737';
  });

  item.addEventListener('mouseout', () => {
    if (prevItem !== item) {
      item.style.backgroundColor = '#1a1a1a';
    }
  });
});





window.onload = function () {
    
platform_container(navigation_system);

}

const sound = document.querySelector(".sound");
const volume_nonmotion = document.querySelector(".volume_nonmotion");




const radio_strech = document.querySelectorAll(".custom-radio-btn");


for (var i = 0; i < radio_strech.length; i++) {
   radio_strech[i].onclick = function () {
  
var send_strech_id = this.id;
var strech_element = new CSInterface();
 strech_element.evalScript('Strech("'+send_strech_id+'")');

   }
}



let data_messenger  =  `
Founder:  Zeynal Adigozalov
Full-stack developer: Kamran Karimov
Animator: Kamran Gurbanov

`;




function internet() {

Toastify({
  text:data_messenger ,
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
    fontSize: '13px'

  },
  onClick: function(){} // Callback after click
}).showToast();

}







volume_nonmotion.onchange = ()=>{

if (volume_nonmotion.value==0) {

sound.src = "icon_element/voulme_of.png";

}else{


  sound.src = "icon_element/volume_on.png";
}


}





let active_sound = true;

function vlsound() {


if (active_sound==true) {
active_sound = false;
sound.src = "icon_element/voulme_of.png";

volume_nonmotion.value = 0;



}

else{
    active_sound = true ;
 sound.src = "icon_element/volume_on.png";

volume_nonmotion.value = 50;


}

}



title_media = ()=>{
title_element();
}




sosial_media = ()=>{
Sosial_element();
   
}


typogr_media =()=>{
typograpy_list();
}



shape_element = ()=>{
shape_el();
}


 Lower_Thirds=()=>{

 Lower_Thirds_element();

 }



Callouts = ()=>{

Callouts_element();
}



logo_Reveals = ()=>{


logo_reveals_element();


}


background_element =()=>{


background_bg();

}



devices = ()=>{
devices_element();

}



infographics_media = ()=>{

infographics_data();


}


transitions=()=>{

transitions_element();
}
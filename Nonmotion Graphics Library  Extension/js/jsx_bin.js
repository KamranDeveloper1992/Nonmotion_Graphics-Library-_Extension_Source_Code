
let comp_no = document.querySelector(".none_m");


//--axtaris start 


function  simple_search_data(){
  simple_searchall();


const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");

const simple_elmenet_preview = document.querySelectorAll(".Typography_simple");

const simple_back_server_click = document.querySelectorAll(".simple_media");





for (var i = 0; i < simple_elmenet_preview.length; i++) {


simple_elmenet_preview[i].onmousemove = function () {


let simple_id = this.id;



my_preview.src =  "./Nonmotion_library/Previews/Typography/Simple/"+simple_id+"";

my_preview.style.display = "block";
cover.style.display = "none";

}



simple_elmenet_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < simple_back_server_click.length; i++) {
  simple_back_server_click[i].onclick = function () {


  let simple_id_elements = this.id;

   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('simple_element_sm("'+simple_id_elements+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}

///background start

//---------- background_simple start

const backgrounds_element = document.querySelectorAll(".Backgrounds_element");

const backgrounds_media = document.querySelectorAll(".Backgrounds_media");



for (var i = 0; i < backgrounds_element.length; i++) {

  backgrounds_element[i].onmousemove = function(){

let backgrounds_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Simple/"+backgrounds_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



backgrounds_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}





}



for (var i = 0; i < backgrounds_media.length; i++) {
  backgrounds_media[i].onclick = function () {


  let backgrounds_simple = this.id;

   var backgrounds_composion_element = new CSInterface();

        backgrounds_composion_element.evalScript('import_bacground_simple("'+backgrounds_simple+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}





//---------- background_simple end



///background end



const simple = document.querySelectorAll(".simple");

const simple_sosial = document.querySelectorAll(".simple_media");


for (var i = 0; i <simple.length; i++) {

simple[i].onmousemove = function () {
   
   var simples_src = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Simple_Icons/"+simples_src+"";
my_preview.style.display = "block";
cover.style.display = "none";


}

simple[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}




for (var i = 0; i < simple_sosial.length; i++) {
  simple_sosial[i].onclick = function () {

    var simple_id = this.id;

   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('import_simple("'+simple_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



  }
}






//simple  end


const logo_rev_element = document.querySelectorAll(".Logo_Reveals_element");

const rev_media = document.querySelectorAll(".Reveals_media");




for (var i = 0; i < logo_rev_element.length; i++) {

  logo_rev_element[i].onmousemove = function () {

let logo_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Logo_Reveals/Simple/"+logo_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }

logo_rev_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < rev_media.length; i++) {
  rev_media[i].onclick = function () {

    var  rev_media_click_id = this.id;


   var rev_media_composion_element = new CSInterface();

       rev_media_composion_element.evalScript('Logo_Reveals("'+rev_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}

}




const transition_data = document.querySelectorAll(".Transition_data");

const transition_media = document.querySelectorAll(".Transition_media");


for (var i = 0; i < transition_data.length; i++) {


transition_data[i].onmousemove = function () {

  let infographics_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Transitions/Simple/"+infographics_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


transition_data[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}


for (var i = 0; i < transition_media.length; i++) {
  transition_media[i].onclick = function () {


  let  transition_click_id = this.id;

   var transition_interface = new CSInterface();

        transition_interface.evalScript('transition_interface("'+transition_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}




const simple_element = document.querySelectorAll(".Simple_element");

const simple_media = document.querySelectorAll(".Simple_media");




for (var i = 0; i < simple_element.length; i++) {
  simple_element[i].onmousemove = function () {

let simple_el_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Simple_Elements/"+simple_el_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }


simple_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}


///Simple_element end---




for (var i = 0; i < simple_media.length; i++) {
  simple_media[i].onclick = function () {


    var  simple_media_click_id = this.id;



   var looped_element = new CSInterface();

        looped_element.evalScript('simple_media_el("'+simple_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}



const looped_element_element = document.querySelectorAll(".Looped_element");

const looped_media = document.querySelectorAll(".Looped_media");




for (var i = 0; i < looped_element_element.length; i++) {


  looped_element_element[i].onmousemove = function () {


let  looped_element_id = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Simple_Elements_Looped/"+looped_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }


looped_element_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < looped_media.length; i++) {
  looped_media[i].onclick = function () {


    var  looped_click_id = this.id;



   var looped_element = new CSInterface();

        looped_element.evalScript('looped_element("'+looped_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}









///end simple all


}



function transition_data_all() {
transitions_elements_all();

const transition_data = document.querySelectorAll(".Transition_data");

const transition_media = document.querySelectorAll(".Transition_media");

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");




for (var i = 0; i < transition_data.length; i++) {


transition_data[i].onmousemove = function () {

  let infographics_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Transitions/Simple/"+infographics_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


transition_data[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}




for (var i = 0; i < transition_media.length; i++) {
  transition_media[i].onclick = function () {


  let  transition_click_id = this.id;

   var transition_interface = new CSInterface();

        transition_interface.evalScript('transition_interface("'+transition_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}

///seamless_data start

const seamless_data = document.querySelectorAll(".Seamless_data");

const seamless_media = document.querySelectorAll(".Seamless_media");






for (var i = 0; i < seamless_data.length; i++) {


seamless_data[i].onmousemove = function () {

  let seamless_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Transitions/Seamless/"+seamless_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


seamless_data[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < seamless_media.length; i++) {
  seamless_media[i].onclick = function () {


  let seamless_media_click_id = this.id;

   var seamless_interface = new CSInterface();

        seamless_interface.evalScript('seamless_interface("'+seamless_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}



const transitions_element = document.querySelectorAll(".Transitions_element");

const transitions_media = document.querySelectorAll(".Transitions_media");




for (var i = 0; i < transitions_element.length; i++) {

  transitions_element[i].onmousemove = function () {

let transitions_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Transitions/"+transitions_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }

transitions_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < transitions_media.length; i++) {
  transitions_media[i].onclick = function () {


    var  transitions_media_id = this.id;



   var transitions_element = new CSInterface();

       transitions_element.evalScript('transitions_element_fn("'+transitions_media_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}



}



function modern_data() {
 modern_search();
 const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


const typeog_elmenet = document.querySelectorAll(".Typography_element");

const typeog_back_server_click = document.querySelectorAll(".Typography_media");




for (var i = 0; i < typeog_elmenet.length; i++) {
 

typeog_elmenet[i].onmousemove = function () {

var typeog_elmenet = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Typography/Modern/"+typeog_elmenet+"";
my_preview.style.display = "block";
cover.style.display = "none";

}



typeog_elmenet[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}



for (var i = 0; i < typeog_back_server_click.length; i++) {


  typeog_back_server_click[i].onclick = function () {

  var typeg_click_id = this.id;


   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('import_typograpy("'+typeg_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


  }
}


}


function abstarct_data() {
  abstarct_search();

  ///modern start 


const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");



const abstract_elmenet_preview = document.querySelectorAll(".Typography_abstract");

const abstract_back_server_click = document.querySelectorAll(".Typography_media_abstract");



for (var i = 0; i < abstract_elmenet_preview.length; i++) {


abstract_elmenet_preview[i].onmousemove = function () {


let abstract_id = this.id;



my_preview.src =  "./Nonmotion_library/Previews/Typography/Abstract/"+abstract_id+"";

my_preview.style.display = "block";
cover.style.display = "none";

}



abstract_elmenet_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < abstract_back_server_click.length; i++) {
  abstract_back_server_click[i].onclick = function () {


  let abstract = this.id;

   var abstract_composion_element = new CSInterface();

        abstract_composion_element.evalScript('import_abstract("'+abstract+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
   });

}

}

}



function arrow_data() {
  arrows_search();
  
const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");




//Arrows start 



const arrow_element = document.querySelectorAll(".Arrows_element");

const arrow_media = document.querySelectorAll(".Arrows_media");



for (var i = 0; i < arrow_element.length; i++) {


  arrow_element[i].onmousemove = function () {
   

let arrow_id  = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Arrows/"+arrow_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }

arrow_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}

}



for (var i = 0; i < arrow_media.length; i++) {
  arrow_media[i].onclick = function () {


    var  arrow_media_click_id = this.id;


   var arrow_composion_element = new CSInterface();

        arrow_composion_element.evalScript('arrow_element_fn("'+arrow_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}

}


function explosions_data() {
  explosions_search();
  const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");



const explosions_element = document.querySelectorAll(".Explosions_element");

const explosions_media = document.querySelectorAll(".Explosions_media");



for (var i = 0; i < explosions_element.length; i++) {


  explosions_element[i].onmousemove = function () {

let  explosions = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Explosions/"+explosions+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }

explosions_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}




}


for (var i = 0; i < explosions_media.length; i++) {
  explosions_media[i].onclick = function () {


    var  explosions_click_id = this.id;


   var explosions_composion_element = new CSInterface();

        explosions_composion_element.evalScript('explosions_element("'+explosions_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}


}



function arcs_data() {
   arcs_search();

   const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");


const arcs_element = document.querySelectorAll(".Arcs_element");

const arcs_media = document.querySelectorAll(".Arcs_media");


for (var i = 0; i < arcs_element.length; i++) {
  arcs_element[i].onmousemove = function () {

let arcs_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Arcs/"+arcs_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }


arcs_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}




for (var i = 0; i < arcs_media.length; i++) {
  arcs_media[i].onclick = function () {


    var  arcs_media_click_id = this.id;


   var explosions_composion_element = new CSInterface();

        explosions_composion_element.evalScript('arcs_element("'+arcs_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}
}


function blow_ups_data() {
 blow_ups_search();
    const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");

const blow_Ups_element = document.querySelectorAll(".Blow_Ups_element");

const blow_Ups_media = document.querySelectorAll(".Blow_Ups_media");




for (var i = 0; i < blow_Ups_element.length; i++) {

  blow_Ups_element[i].onmousemove = function(){

let blow_Ups_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Blow_Ups/"+blow_Ups_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



blow_Ups_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}





}


for (var i = 0; i < blow_Ups_media.length; i++) {
  blow_Ups_media[i].onclick = function () {


    var  blow_Ups_media_click_id = this.id;


   var explosions_composion_element = new CSInterface();

        explosions_composion_element.evalScript('blow_Ups_element("'+blow_Ups_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}


}


function slides_data() {
  slides_search();
  const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");
const slider_element = document.querySelectorAll(".Slides_element");

const slider_media = document.querySelectorAll(".Slides_media");



for (var i = 0; i < slider_element.length; i++) {
  slider_element[i].onmousemove = function () {

let slider_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Slides/"+slider_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }

slider_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < slider_media.length; i++) {
  slider_media[i].onclick = function () {


    var  slider_click_id = this.id;


   var  slider_composion_element = new CSInterface();

        slider_composion_element.evalScript('slider_element_fn("'+slider_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}
}



function complicated_data() {
complicated_search();

  const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");

const complicated_element = document.querySelectorAll(".Complicated_element");

const complicated_media = document.querySelectorAll(".Complicated_media");



for (var i = 0; i < complicated_element.length; i++) {


  complicated_element[i].onmousemove = function () {


let complicated_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Complicated_Elements/"+complicated_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

 
  }


complicated_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}




}



for (var i = 0; i < complicated_media.length; i++) {
  complicated_media[i].onclick = function () {


    var  complicated_media_id = this.id;



   var complicated_element = new CSInterface();

        complicated_element.evalScript('complicated_element_fn("'+complicated_media_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}

}


function futuristic_data(){

  futuristic_data_search();

 const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");


const futuristic_element = document.querySelectorAll(".futuristic_element");

const futuristic_data = document.querySelectorAll(".futuristic_data");





for (var i = 0; i < futuristic_element.length; i++) {

  futuristic_element[i].onmousemove = function(){

let futuristic_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Futuristic/"+futuristic_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



futuristic_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < futuristic_data.length; i++) {
  futuristic_data[i].onclick = function () {


  let futuristic_data_id = this.id;

   var futuristic_interface = new CSInterface();

        futuristic_interface.evalScript('futuristic_interface("'+futuristic_data_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}


}


function gradient_data() {
  gradient_data_search();
 const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");


const gradient_element = document.querySelectorAll(".Gradient_element");

const gradient_item = document.querySelectorAll(".Gradient_item");


for (var i = 0; i < gradient_element.length; i++) {

  gradient_element[i].onmousemove = function(){

let gradient_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Gradient/"+gradient_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



gradient_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < gradient_item.length; i++) {
  gradient_item[i].onclick = function () {


  let gradient_item_id = this.id;

   var gradient_item_interface = new CSInterface();

        gradient_item_interface.evalScript('gradient_element("'+gradient_item_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}
}




function weather_data() {
weather_data_search();

 const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");


const weater_sosial = document.querySelectorAll(".Weather");

const weater_click_elmenet = document.querySelectorAll(".Weather_media");


for (var i = 0; i <weater_sosial.length; i++) {

weater_sosial[i].onmousemove = function () {
   
   var weater_src = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Weather_Icons/"+weater_src+"";
my_preview.style.display = "block";
cover.style.display = "none";


}


weater_sosial[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}


for (var i = 0; i < weater_click_elmenet.length; i++) {
  weater_click_elmenet[i].onclick = function () {

    var weater_click_id = this.id;

   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('import_weater("'+weater_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


  }
}
}


function emojies_data() {
  emojies_data_search();

 const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");


  let social_emojy = document.querySelectorAll(".social");

const social_emojy_btn= document.querySelectorAll(".social_media");

for (var i = 0; i < social_emojy.length; i++) {

 social_emojy[i].onmousemove = function () {
var social_src = this.id;
my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Emojies/"+social_src+"";
my_preview.style.display = "block";
cover.style.display = "none";


}


social_emojy[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}

}





for (var i = 0; i <=social_emojy_btn.length; i++) {
    social_emojy_btn[i].onclick = function () {

        var social_click_event = this.id;
       
         var composion_element = new CSInterface();

        composion_element.evalScript('import_social("'+social_click_event+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


    }
}
}


function geometric_data() {
  geometric_data_search();
 const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");

const geometric_element = document.querySelectorAll(".geometric_simple");

const geometric_media = document.querySelectorAll(".geometric_media");


let video = document.querySelector("video");



for (var i = 0; i < geometric_element.length; i++) {

  geometric_element[i].onmousemove = function () {

let geometric_element_id = this.id;
video.volume = volume_nonmotion.value/100;
my_preview.src =  "./Nonmotion_library/Previews/Logo_Reveals/Geometric/"+geometric_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }



geometric_element[i].onmouseout = function () {
video.volume = 0;
cover.style.display = "block";

my_preview.style.display = "none";


}


}


for (var i = 0; i < geometric_media.length; i++) {
  geometric_media[i].onclick = function () {

    var  geometric_click_id = this.id;


   var geometric_composion_element = new CSInterface();

       geometric_composion_element.evalScript('Geometric("'+geometric_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}
}

}


function seamless_data() {
  seamless_data_search();
 const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");
  const seamless_data = document.querySelectorAll(".Seamless_data");

const seamless_media = document.querySelectorAll(".Seamless_media");






for (var i = 0; i < seamless_data.length; i++) {


seamless_data[i].onmousemove = function () {

  let seamless_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Transitions/Seamless/"+seamless_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


seamless_data[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < seamless_media.length; i++) {
  seamless_media[i].onclick = function () {


  let seamless_media_click_id = this.id;

   var seamless_interface = new CSInterface();

        seamless_interface.evalScript('seamless_interface("'+seamless_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}

}


function messanger_data() {
  messenger_search();


const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");

  const messages_element = document.querySelectorAll(".Messages_element");

const messages_media = document.querySelectorAll(".Messages_media");


  for (var i = 0; i <messages_element.length; i++) {

messages_element[i].onmousemove = function () {
   
var elements_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Messages/"+elements_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



}


messages_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}




for (var i = 0; i < messages_media.length; i++) {
  messages_media[i].onclick = function () {

    var ms_id = this.id;

   var messenger_composion_element = new CSInterface();

        messenger_composion_element.evalScript('messages("'+ms_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


  }
}

}

//--axtaris end 
















function title_element() {
 
Title_Element();

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


const titles_elmenet = document.querySelectorAll(".Titles_media");

const titles_preview = document.querySelectorAll(".Titles");





for (var i = 0; i <titles_preview.length; i++) {

titles_preview[i].onmousemove = function () {
   
var elements_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Titles/"+elements_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



}


titles_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}






for (var i = 0; i < titles_elmenet.length; i++) {
  titles_elmenet[i].onclick = function () {

    var  titles_click_id = this.id;


   var titles_composion_element = new CSInterface();

        titles_composion_element.evalScript('titles_elements("'+titles_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}



}



function typograpy_list(){
typograpy_db();

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


const typeog_elmenet = document.querySelectorAll(".Typography_element");

const typeog_back_server_click = document.querySelectorAll(".Typography_media");




for (var i = 0; i < typeog_elmenet.length; i++) {
 

typeog_elmenet[i].onmousemove = function () {

var typeog_elmenet = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Typography/Modern/"+typeog_elmenet+"";
my_preview.style.display = "block";
cover.style.display = "none";

}



typeog_elmenet[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}



for (var i = 0; i < typeog_back_server_click.length; i++) {


  typeog_back_server_click[i].onclick = function () {

  var typeg_click_id = this.id;


   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('import_typograpy("'+typeg_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });







  }
}




///modern start 




const abstract_elmenet_preview = document.querySelectorAll(".Typography_abstract");

const abstract_back_server_click = document.querySelectorAll(".Typography_media_abstract");



for (var i = 0; i < abstract_elmenet_preview.length; i++) {


abstract_elmenet_preview[i].onmousemove = function () {


let abstract_id = this.id;



my_preview.src =  "./Nonmotion_library/Previews/Typography/Abstract/"+abstract_id+"";

my_preview.style.display = "block";
cover.style.display = "none";

}



abstract_elmenet_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < abstract_back_server_click.length; i++) {
  abstract_back_server_click[i].onclick = function () {


  let abstract = this.id;

   var abstract_composion_element = new CSInterface();

        abstract_composion_element.evalScript('import_abstract("'+abstract+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}


///modern end 




///Simple start 


const simple_elmenet_preview = document.querySelectorAll(".Typography_simple");

const simple_back_server_click = document.querySelectorAll(".simple_media");





for (var i = 0; i < simple_elmenet_preview.length; i++) {


simple_elmenet_preview[i].onmousemove = function () {


let simple_id = this.id;



my_preview.src =  "./Nonmotion_library/Previews/Typography/Simple/"+simple_id+"";

my_preview.style.display = "block";
cover.style.display = "none";

}



simple_elmenet_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < simple_back_server_click.length; i++) {
  simple_back_server_click[i].onclick = function () {


  let simple_id_elements = this.id;

   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('simple_element_sm("'+simple_id_elements+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}


///Simple end 

  
}




function Sosial_element(){
   
Social();


const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");


let social = document.querySelectorAll(".social");

const simple = document.querySelectorAll(".simple");

const simple_sosial = document.querySelectorAll(".simple_media");

const weater_sosial = document.querySelectorAll(".Weather");

const elements_sosial = document.querySelectorAll(".Elements");

const elements_click_elmenet = document.querySelectorAll(".Elements_media");

const weater_click_elmenet = document.querySelectorAll(".Weather_media");


const messages_element = document.querySelectorAll(".Messages_element");

const messages_media = document.querySelectorAll(".Messages_media");







//elements  start




for (var i = 0; i <elements_sosial.length; i++) {

elements_sosial[i].onmousemove = function () {
   
var elements_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Social_Elements/"+elements_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



}


elements_sosial[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}



for (var i = 0; i < elements_click_elmenet.length; i++) {
  elements_click_elmenet[i].onclick = function () {


    var  elements_click_id = this.id;



   var elements_composion_element = new CSInterface();

        elements_composion_element.evalScript('import_elements("'+elements_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}



//elements  end



//weater  start


for (var i = 0; i <weater_sosial.length; i++) {

weater_sosial[i].onmousemove = function () {
   
   var weater_src = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Weather_Icons/"+weater_src+"";
my_preview.style.display = "block";
cover.style.display = "none";


}


weater_sosial[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}


for (var i = 0; i < weater_click_elmenet.length; i++) {
  weater_click_elmenet[i].onclick = function () {

    var weater_click_id = this.id;

   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('import_weater("'+weater_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


  }
}


//weater  end



//mesager start


for (var i = 0; i <messages_element.length; i++) {

messages_element[i].onmousemove = function () {
   
var elements_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Messages/"+elements_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



}


messages_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}




for (var i = 0; i < messages_media.length; i++) {
  messages_media[i].onclick = function () {

    var ms_id = this.id;

   var messenger_composion_element = new CSInterface();

        messenger_composion_element.evalScript('messages("'+ms_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


  }
}








//mesager end


//simple  start




for (var i = 0; i <simple.length; i++) {

simple[i].onmousemove = function () {
   
   var simples_src = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Simple_Icons/"+simples_src+"";
my_preview.style.display = "block";
cover.style.display = "none";


}

simple[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}




for (var i = 0; i < simple_sosial.length; i++) {
  simple_sosial[i].onclick = function () {

    var simple_id = this.id;

   var simple_composion_element = new CSInterface();

        simple_composion_element.evalScript('import_simple("'+simple_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



  }
}






//simple  end


for (var i = 0; i < social.length; i++) {

 social[i].onmousemove = function () {
var social_src = this.id;
my_preview.src =  "./Nonmotion_library/Previews/Social_Media/Emojies/"+social_src+"";
my_preview.style.display = "block";
cover.style.display = "none";


}


social[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}

}



const social_btn= document.querySelectorAll(".social_media");

for (var i = 0; i <=social_btn.length; i++) {
    social_btn[i].onclick = function () {

        var social_click_event = this.id;
       
         var composion_element = new CSInterface();

        composion_element.evalScript('import_social("'+social_click_event+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


    }
}




}






function Lower_Thirds_element(){
Lower_Thirds_element_db();

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");



const lower_click_element = document.querySelectorAll(".Lower_Thirds_media");

const lower_elment_preview = document.querySelectorAll(".Lower_Thirds");




for (var i = 0; i < lower_elment_preview.length; i++) {

  lower_elment_preview[i].onmousemove = function () {

 let lower_elment_id = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Lower_Thirds/"+lower_elment_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }


lower_elment_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}



for (var i = 0; i < lower_click_element.length; i++) {
  lower_click_element[i].onclick = function () {

    var  lower_id = this.id;


   var lower_click_element = new CSInterface();

        lower_click_element.evalScript('lower_thirds("'+lower_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}


}



function Callouts_element() {
Callouts_db();


const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


const callouts_elmenet_click = document.querySelectorAll(".Callouts_left_media");

const callouts_preview = document.querySelectorAll(".Callouts_left");




for (var i = 0; i <callouts_preview.length; i++) {

callouts_preview[i].onmousemove = function () {
   
var callouts_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Callouts/Left/"+callouts_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



}


callouts_preview[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < callouts_elmenet_click.length; i++) {
  callouts_elmenet_click[i].onclick = function () {

    var  callouts_id = this.id;


   var callouts_element = new CSInterface();

        callouts_element.evalScript('callouts_left("'+callouts_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}


/////////Right Start



const callouts_right_click = document.querySelectorAll(".Callouts_Right_media");

const callouts_preview_right = document.querySelectorAll(".Callouts_right");



for (var i = 0; i <callouts_preview_right.length; i++) {

callouts_preview_right[i].onmousemove = function () {
   
var callouts_id_right = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Callouts/Right/"+callouts_id_right+"";
my_preview.style.display = "block";
cover.style.display = "none";



}


callouts_preview_right[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}


for (var i = 0; i < callouts_right_click.length; i++) {
  callouts_right_click[i].onclick = function () {

    var  callouts_right_id = this.id;


   var callouts_element_right = new CSInterface();

        callouts_element_right.evalScript('callouts_right("'+callouts_right_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}







/////////Right End



}




function  lower_random() {
 
const typegraphy_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");


let random_preview_typograpy = Math.floor((Math.random()*55)+1);






my_preview_random.src = "./Nonmotion_library/Previews/Lower_Thirds/"+random_preview_typograpy+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
typegraphy_cover_random.style.display = "none";


out_random.onmouseout = function () {


typegraphy_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}


}




function  typograpy_random() {


const typegraphy_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let random_typograpy_social   = Math.floor(Math.random()*3);

let element_typograpy_count_folder = [50,20,30];


let random_preview_typograpy = Math.floor((Math.random()*element_typograpy_count_folder[random_typograpy_social])+1);

let folder_count_typograpy = ["Abstract","Modern","Simple"];




my_preview_random.src = "./Nonmotion_library/Previews/Typography/"+folder_count_typograpy[random_typograpy_social]+"/"+random_preview_typograpy+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
typegraphy_cover_random.style.display = "none";


out_random.onmouseout = function () {


typegraphy_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}

}





function title_random() {

const title_cover_random = document.querySelector(".cover");

const tit_out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let title_count = Math.floor((Math.random()*150)+1);

my_preview_random.src = "./Nonmotion_library/Previews/Titles/"+title_count+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";

title_cover_random.style.display = "none";


tit_out_random.onmouseout = function () {


title_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}


 }



function social_random_random() {

const typegraphy_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let random_source_social   = Math.floor(Math.random()*4);

let element_social_count_folder = [51,42,104,16,14];


let random_preview_social = Math.floor((Math.random()*element_social_count_folder[random_source_social])+1);

let folder_count_social = ["Emojies","Simple_Icons","Social_Elements","Weather_Icons","Messages"];




my_preview_random.src = "./Nonmotion_library/Previews/Social_Media/"+folder_count_social[random_source_social]+"/"+random_preview_social+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
typegraphy_cover_random.style.display = "none";


out_random.onmouseout = function () {


typegraphy_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}

}


function shape_el() {

shape_db();



const my_preview = document.querySelector(".res");
const msg_no_comp = document.querySelector(".msg_comp");
const cover = document.querySelector(".cover");




//Arrows start 



const arrow_element = document.querySelectorAll(".Arrows_element");

const arrow_media = document.querySelectorAll(".Arrows_media");



for (var i = 0; i < arrow_element.length; i++) {


  arrow_element[i].onmousemove = function () {
   

let arrow_id  = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Arrows/"+arrow_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }

arrow_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}

}



for (var i = 0; i < arrow_media.length; i++) {
  arrow_media[i].onclick = function () {


    var  arrow_media_click_id = this.id;


   var arrow_composion_element = new CSInterface();

        arrow_composion_element.evalScript('arrow_element_fn("'+arrow_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}





///Arrows end



///slider start


const slider_element = document.querySelectorAll(".Slides_element");

const slider_media = document.querySelectorAll(".Slides_media");



for (var i = 0; i < slider_element.length; i++) {
  slider_element[i].onmousemove = function () {

let slider_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Slides/"+slider_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }

slider_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < slider_media.length; i++) {
  slider_media[i].onclick = function () {


    var  slider_click_id = this.id;


   var  slider_composion_element = new CSInterface();

        slider_composion_element.evalScript('slider_element_fn("'+slider_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}


///slider end



const explosions_element = document.querySelectorAll(".Explosions_element");

const explosions_media = document.querySelectorAll(".Explosions_media");



for (var i = 0; i < explosions_element.length; i++) {


  explosions_element[i].onmousemove = function () {

let  explosions = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Explosions/"+explosions+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }

explosions_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}




}


for (var i = 0; i < explosions_media.length; i++) {
  explosions_media[i].onclick = function () {


    var  explosions_click_id = this.id;


   var explosions_composion_element = new CSInterface();

        explosions_composion_element.evalScript('explosions_element("'+explosions_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}




///Arcs_element start---

const arcs_element = document.querySelectorAll(".Arcs_element");

const arcs_media = document.querySelectorAll(".Arcs_media");


for (var i = 0; i < arcs_element.length; i++) {
  arcs_element[i].onmousemove = function () {

let arcs_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Arcs/"+arcs_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }


arcs_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}




for (var i = 0; i < arcs_media.length; i++) {
  arcs_media[i].onclick = function () {


    var  arcs_media_click_id = this.id;


   var explosions_composion_element = new CSInterface();

        explosions_composion_element.evalScript('arcs_element("'+arcs_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}



///Arcs_element end---






///Blow_Ups start--



const blow_Ups_element = document.querySelectorAll(".Blow_Ups_element");

const blow_Ups_media = document.querySelectorAll(".Blow_Ups_media");




for (var i = 0; i < blow_Ups_element.length; i++) {

  blow_Ups_element[i].onmousemove = function(){

let blow_Ups_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Blow_Ups/"+blow_Ups_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



blow_Ups_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}





}


for (var i = 0; i < blow_Ups_media.length; i++) {
  blow_Ups_media[i].onclick = function () {


    var  blow_Ups_media_click_id = this.id;


   var explosions_composion_element = new CSInterface();

        explosions_composion_element.evalScript('blow_Ups_element("'+blow_Ups_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}

}


///Blow_Ups end---



///Looped_element start---



const looped_element_element = document.querySelectorAll(".Looped_element");

const looped_media = document.querySelectorAll(".Looped_media");




for (var i = 0; i < looped_element_element.length; i++) {


  looped_element_element[i].onmousemove = function () {


let  looped_element_id = this.id;

my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Simple_Elements_Looped/"+looped_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


  }


looped_element_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < looped_media.length; i++) {
  looped_media[i].onclick = function () {


    var  looped_click_id = this.id;



   var looped_element = new CSInterface();

        looped_element.evalScript('looped_element("'+looped_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}

///Looped_element end---



///Simple_element start---



const simple_element = document.querySelectorAll(".Simple_element");

const simple_media = document.querySelectorAll(".Simple_media");




for (var i = 0; i < simple_element.length; i++) {
  simple_element[i].onmousemove = function () {

let simple_el_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Simple_Elements/"+simple_el_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }


simple_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}


///Simple_element end---




for (var i = 0; i < simple_media.length; i++) {
  simple_media[i].onclick = function () {


    var  simple_media_click_id = this.id;



   var looped_element = new CSInterface();

        looped_element.evalScript('simple_media_el("'+simple_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}



//Complicated_element start 


const complicated_element = document.querySelectorAll(".Complicated_element");

const complicated_media = document.querySelectorAll(".Complicated_media");



for (var i = 0; i < complicated_element.length; i++) {


  complicated_element[i].onmousemove = function () {


let complicated_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Complicated_Elements/"+complicated_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

 
  }


complicated_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}




}



for (var i = 0; i < complicated_media.length; i++) {
  complicated_media[i].onclick = function () {


    var  complicated_media_id = this.id;



   var complicated_element = new CSInterface();

        complicated_element.evalScript('complicated_element_fn("'+complicated_media_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}


//Complicated_element end 




//Transitions_element start 



const transitions_element = document.querySelectorAll(".Transitions_element");

const transitions_media = document.querySelectorAll(".Transitions_media");




for (var i = 0; i < transitions_element.length; i++) {

  transitions_element[i].onmousemove = function () {

let transitions_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Shape_Elements/Transitions/"+transitions_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }

transitions_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < transitions_media.length; i++) {
  transitions_media[i].onclick = function () {


    var  transitions_media_id = this.id;



   var transitions_element = new CSInterface();

       transitions_element.evalScript('transitions_element_fn("'+transitions_media_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });

}

}




//Transitions_element end 


}



function shape_random() {


const spahe_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let random_shape   = Math.floor(Math.random()*8);

let element_shape_count_folder = [47,38,48,12,96,48,45,44,67];


let random_preview_shape = Math.floor((Math.random()*element_shape_count_folder[random_shape])+1);

let folder_count_shape = ["Arcs","Arrows","Blow_Ups","Complicated_Elements","Explosions","Simple_Elements,Simple_Elements_Looped","Slides","Transitions"];




my_preview_random.src = "./Nonmotion_library/Previews/Shape_Elements/"+folder_count_shape[random_shape]+"/"+random_preview_shape+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
spahe_cover_random.style.display = "none";


out_random.onmouseout = function () {


spahe_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}


}






function  callouts_random() {

const spahe_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let random_calouts   = Math.floor(Math.random()*2);

let element_shape_count_folder = [50,50];


let random_preview_shape = Math.floor((Math.random()*element_shape_count_folder[random_calouts])+1);

let folder_callouts= ["Left","Right"];




my_preview_random.src = "./Nonmotion_library/Previews/Callouts/"+folder_callouts[random_calouts]+"/"+random_preview_shape+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
spahe_cover_random.style.display = "none";


out_random.onmouseout = function () {


spahe_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}



}



//---------- logo_reveals start



function logo_reveals_element() {
  
logo_reveals_db();



const logo_rev_element = document.querySelectorAll(".Logo_Reveals_element");

const rev_media = document.querySelectorAll(".Reveals_media");


const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


for (var i = 0; i < logo_rev_element.length; i++) {

  logo_rev_element[i].onmousemove = function () {

let logo_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Logo_Reveals/Simple/"+logo_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }

logo_rev_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < rev_media.length; i++) {
  rev_media[i].onclick = function () {

    var  rev_media_click_id = this.id;


   var rev_media_composion_element = new CSInterface();

       rev_media_composion_element.evalScript('Logo_Reveals("'+rev_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}

//---------- geometric start




//---------- logo_reveals_element end





const geometric_element = document.querySelectorAll(".geometric_simple");

const geometric_media = document.querySelectorAll(".geometric_media");


let video = document.querySelector("video");






for (var i = 0; i < geometric_element.length; i++) {

  geometric_element[i].onmousemove = function () {

let geometric_element_id = this.id;
video.volume = volume_nonmotion.value/100;
my_preview.src =  "./Nonmotion_library/Previews/Logo_Reveals/Geometric/"+geometric_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

  }



geometric_element[i].onmouseout = function () {
video.volume = 0;
cover.style.display = "block";

my_preview.style.display = "none";


}






}









for (var i = 0; i < geometric_media.length; i++) {
  geometric_media[i].onclick = function () {

    var  geometric_click_id = this.id;


   var geometric_composion_element = new CSInterface();

       geometric_composion_element.evalScript('Geometric("'+geometric_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });



}



}

//---------- geometric end

}

//---------- logo_reveals end




//---------- background_bg start


function background_bg() {
background_bg_db();



//---------- background_simple start

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


const backgrounds_element = document.querySelectorAll(".Backgrounds_element");

const backgrounds_media = document.querySelectorAll(".Backgrounds_media");



for (var i = 0; i < backgrounds_element.length; i++) {

  backgrounds_element[i].onmousemove = function(){

let backgrounds_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Simple/"+backgrounds_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



backgrounds_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}





}



for (var i = 0; i < backgrounds_media.length; i++) {
  backgrounds_media[i].onclick = function () {


  let backgrounds_simple = this.id;

   var backgrounds_composion_element = new CSInterface();

        backgrounds_composion_element.evalScript('import_bacground_simple("'+backgrounds_simple+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}





//---------- background_simple end


const backgrounds_abstract = document.querySelectorAll(".Backgrounds_abstract");

const backgrounds_abstract_element = document.querySelectorAll(".Backgrounds_abstract_element");




for (var i = 0; i < backgrounds_abstract.length; i++) {

  backgrounds_abstract[i].onmousemove = function(){

let backgrounds_abstract_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Abstract/"+backgrounds_abstract_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



backgrounds_abstract[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}





}






for (var i = 0; i < backgrounds_abstract_element.length; i++) {
  backgrounds_abstract_element[i].onclick = function () {


  let backgrounds_abstract_id = this.id;

   var backgr_abstract_element = new CSInterface();

        backgr_abstract_element.evalScript('import_bacground_abstract("'+backgrounds_abstract_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}




//---------- gradinet_element start


const gradient_element = document.querySelectorAll(".Gradient_element");

const gradient_item = document.querySelectorAll(".Gradient_item");


for (var i = 0; i < gradient_element.length; i++) {

  gradient_element[i].onmousemove = function(){

let gradient_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Gradient/"+gradient_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



gradient_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < gradient_item.length; i++) {
  gradient_item[i].onclick = function () {


  let gradient_item_id = this.id;

   var gradient_item_interface = new CSInterface();

        gradient_item_interface.evalScript('gradient_element("'+gradient_item_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}



//---------- gradinet_element end






const futuristic_element = document.querySelectorAll(".futuristic_element");

const futuristic_data = document.querySelectorAll(".futuristic_data");





for (var i = 0; i < futuristic_element.length; i++) {

  futuristic_element[i].onmousemove = function(){

let futuristic_element_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Backgrounds/Futuristic/"+futuristic_element_id+"";
my_preview.style.display = "block";
cover.style.display = "none";



  }



futuristic_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}



}





for (var i = 0; i < futuristic_data.length; i++) {
  futuristic_data[i].onclick = function () {


  let futuristic_data_id = this.id;

   var futuristic_interface = new CSInterface();

        futuristic_interface.evalScript('futuristic_interface("'+futuristic_data_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}


}

//---------- background_bg random start


function background_random() {



const spahe_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let random_shape   = Math.floor(Math.random()*4);

let element_shape_count_folder = [50,12,20,20];


let random_preview_shape = Math.floor((Math.random()*element_shape_count_folder[random_shape])+1);

let folder_count_shape = ["Abstract","Futuristic","Gradient","Futuristic"];




my_preview_random.src = "./Nonmotion_library/Previews/Backgrounds/"+folder_count_shape[random_shape]+"/"+random_preview_shape+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
spahe_cover_random.style.display = "none";


out_random.onmouseout = function () {


spahe_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}

}


//---------- background_bg random end




//---------- background_bg end



////devices start

function devices_element() {

devices_db();

const devices_main = document.querySelectorAll(".devices_main");

const devices_media = document.querySelectorAll(".devices_media");

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");


for (var i = 0; i < devices_main.length; i++) {


devices_main[i].onmousemove = function () {

  let devices_main_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Devices/"+devices_main_id+"";
my_preview.style.display = "block";
cover.style.display = "none";


}




devices_main[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}





}






for (var i = 0; i < devices_media.length; i++) {
  devices_media[i].onclick = function () {


  let devices_media_id = this.id;

   var devices_media_interface = new CSInterface();

        devices_media_interface.evalScript('devices_interface("'+devices_media_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}

}



function devices_random() {

const spahe_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");





let random_preview_shape = Math.floor((Math.random()*30)+1);





my_preview_random.src = "./Nonmotion_library/Previews/Devices/"+random_preview_shape+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
spahe_cover_random.style.display = "none";


out_random.onmouseout = function () {


spahe_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}




}




////devices end

////logo_reveals_random start


function logo_reveals_random(){

const simple_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let simple_count_folder = 100;

let random_preview_shape = Math.floor((Math.random()*simple_count_folder)+1);

let folder_count_simple = "Simple";

my_preview_random.src = "./Nonmotion_library/Previews/Logo_Reveals/"+folder_count_simple+"/"+random_preview_shape+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
simple_cover_random.style.display = "none";


out_random.onmouseout = function () {


simple_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}



}

////logo_reveals_random end



/// infographics start 


function  infographics_data(){

  infographics_database();

const infographics_element = document.querySelectorAll(".infographics_element");

const infographics_media = document.querySelectorAll(".infographics_media");

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");



for (var i = 0; i < infographics_element.length; i++) {


infographics_element[i].onmousemove = function () {

  let infographics_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Infographics/"+infographics_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


infographics_element[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}




for (var i = 0; i < infographics_media.length; i++) {
  infographics_media[i].onclick = function () {


  let infographics_click_id = this.id;

   var infographics_interface = new CSInterface();

        infographics_interface.evalScript('infographics_interface("'+infographics_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}

}


function infographic_random() {
const spahe_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");





let random_preview_shape = Math.floor((Math.random()*50)+1);





my_preview_random.src = "./Nonmotion_library/Previews/Infographics/"+random_preview_shape+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
spahe_cover_random.style.display = "none";


out_random.onmouseout = function () {


spahe_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}
}


/// infographics end 


/// transition start 


function transitions_element() {

transitions_db();

const transition_data = document.querySelectorAll(".Transition_data");

const transition_media = document.querySelectorAll(".Transition_media");

const my_preview = document.querySelector(".res");
const cover = document.querySelector(".cover");




for (var i = 0; i < transition_data.length; i++) {


transition_data[i].onmousemove = function () {

  let infographics_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Transitions/Simple/"+infographics_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


transition_data[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}




for (var i = 0; i < transition_media.length; i++) {
  transition_media[i].onclick = function () {


  let  transition_click_id = this.id;

   var transition_interface = new CSInterface();

        transition_interface.evalScript('transition_interface("'+transition_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}

///seamless_data start

const seamless_data = document.querySelectorAll(".Seamless_data");

const seamless_media = document.querySelectorAll(".Seamless_media");






for (var i = 0; i < seamless_data.length; i++) {


seamless_data[i].onmousemove = function () {

  let seamless_id = this.id;


my_preview.src =  "./Nonmotion_library/Previews/Transitions/Seamless/"+seamless_id+"";
my_preview.style.display = "block";
cover.style.display = "none";

}


seamless_data[i].onmouseout = function () {

cover.style.display = "block";

my_preview.style.display = "none";
}


}





for (var i = 0; i < seamless_media.length; i++) {
  seamless_media[i].onclick = function () {


  let seamless_media_click_id = this.id;

   var seamless_interface = new CSInterface();

        seamless_interface.evalScript('seamless_interface("'+seamless_media_click_id+'")',function(msg){
             

          if (msg=="Please Create or Select a Composition") {

             comp_no.textContent  = msg;
          }

          else{
              comp_no.textContent  = "";
          }
  
 });


}



}




///seamless_data end



}


/// transition end



function  transitions_random() {


const typegraphy_cover_random = document.querySelector(".cover");

const out_random = document.querySelector(".out_random");

const my_preview_random = document.querySelector(".res");

let random_typograpy_social   = Math.floor(Math.random()*2);

let element_typograpy_count_folder = [16,115];


let random_preview_typograpy = Math.floor((Math.random()*element_typograpy_count_folder[random_typograpy_social])+1);

let folder_count_typograpy = ["Seamless","Simple"];




my_preview_random.src = "./Nonmotion_library/Previews/Transitions/"+folder_count_typograpy[random_typograpy_social]+"/"+random_preview_typograpy+".mp4";

my_preview_random.autoplay = true;

my_preview_random.style.display = "block";
typegraphy_cover_random.style.display = "none";


out_random.onmouseout = function () {


typegraphy_cover_random.style.display = "block";

my_preview_random.style.display = "none";


}


 
}





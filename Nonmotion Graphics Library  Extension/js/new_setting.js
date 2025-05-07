
const searchInput = document.querySelector(".searchInput");
const s = document.querySelector(".card_item");


searchInput.addEventListener('input', function () {
  const inputValue = searchInput.value.toLowerCase();

  switch (inputValue) {
    case "ti":
    case "title":
    case "tit":
    case "titl":
    case "title":
      title_element();
      break;

  
    case "soci":
    case "socia":
    case "soc":
    case "so":
    case "social":
    Sosial_element();
      break;
    case "ty":
    case "typ":
    case "typo":
    case "typog":
    case "typogr":
    case "typogra":
    case "typograp":
    case "typography":
      typograpy_list();
      break;
    case "sh":
    case "sha":
    case "shap":
    case "shape":
    case "shape_el":
    case "shape_ele":
    case "shape_elem":
    case "shape_eleme":
    case "shape_elemen":
    case "shape_element":
    case "shape el":
    case "shape ele":
    case "shape elem":
    case "shape eleme":
    case "shape elemen":
    case "shape element":
    case "shape elements":
      shape_el();
      break;

    
    case "lo":
    case "low":
    case "lowe":
    case "lower":
    case "lower_t":
    case "lower_th":
    case "lower_thi":
    case "lower_thir":
    case "lower_third":
    case "lower_thirds":
    case "lowerthirds":

      Lower_Thirds_element();
      break;

    case "ca":
    case "cal":
    case "call":
    case "callo":
    case "callou":
    case "callout":
    case "callouts": 
      Callouts_element();
      break;

    
    case "lo":
    case "log":
    case "logo":
    case "logo_r":
    case "logo_re":
    case "logo_rev":
    case "logo_reve":
    case "logo_revea":
    case "logo_reveal":
    case "logo_reveals":
    case "logo_reveals":
    case "logoreveals":
      logo_reveals_element();

      break;
    case "ba":
    case "bac":
    case "back":
    case "backg":
    case "backgr":
    case "backgro":
    case "backgrou":
    case "backgroun":
    case "background":
    case "backgrounds":
    background_bg();
      break;
    case "de":
    case "dev":
    case "devi":
    case "devic":
    case "device":
    case "devices":
      devices_element();
      break;
    case "in":
    case "inf":
    case "info":
    case "infog":
    case "infogr":
    case "infogra":
    case "infograp":
    case "infograph":
    case "infographi":
    case "infographic":
    case "infographics":
      infographics_data();
      break;
    case "tr":
    case "tra":
    case "tran":
    case "trans":
    case "transi":
    case "transit":
    case "transiti":
    case "transitio":
    case "transition":
    case "transitions":
 transition_data_all();
     
      break;

     case "si":
     case "sim":
     case "simp":
     case "simpl":
     case "simple":
      simple_search_data();
      break;

     case "mo":
     case "mod":
     case "mode":
     case "moder":
     case "modern":
     modern_data();
      break;

     case "ab":
     case "abs":
     case "abst":
     case "abstr":
     case "abstra":
     case "abstrac":
     case "abstract":
     abstarct_data();
      break;



     case "fu":
     case "fut":
     case "futu":
     case "futur":
     case "futuri":
     case "futuris":
     case "futurist":
     case "futuristi":
     case "futuristic":
     futuristic_data();
      break;


     case "gr":
     case "gra":
     case "grad":
     case "gradi":
     case "gradie":
     case "gradien":
     case "gradient":
     gradient_data();
      break;



     case "arr":
     case "arro":
     case "arrow":
     case "arrows":
     arrow_data();
      break;
     case "ex":
     case "exp":
     case "expl":
     case "explo":
     case "explos":
     case "explosi":
     case "explosio":
     case "explosion":
     case "explosions":
     explosions_data();
      break;


     case "ar":
     case "arc":
     case "arcs":
     arcs_data();
      break;


     case "bl":
     case "blo":
     case "blow":
     case "blow u":
     case "blow up":
     case "blow ups":
     case "blow_u":
     case "blow_up":
     case "blow_ups":
     blow_ups_data();
      break;


     case "sl":
     case "sli":
     case "slid":
     case "slide":
     case "slides":
     slides_data();
      break;

     case "co":
     case "com":
     case "comp":
     case "compl":
     case "compli":
     case "complic":
     case "complica":
     case "complicat":
     case "complicate":
     case "complicated":
     case "complicated_e":
     case "complicated_el":
     case "complicated_ele":
     case "complicated_elem":
     case "complicated_eleme":
     case "complicated_elemet":
     case "complicated_elemets":
       complicated_data();
      break;

     case "we":
     case "wea":
     case "weat":
     case "weath":
     case "weathe":
     case "weather":
     case "weather_i":
     case "weather_ic":
     case "weather_ico":
     case "weather_icon":
     case "weather_icons":
      weather_data();
      break;


     case "em":
     case "emo":
     case "emoj":
     case "emoji":
     case "emojie":
     case "emojies":
      emojies_data();
      break;


     case "ge":
     case "geo":
     case "geom":
     case "geome":
     case "geomet":
     case "geometr":
     case "geometri":
     case "geometric":
      geometric_data();
      break;


     case "se":
     case "sea":
     case "seam":
     case "seaml":
     case "seamle":
     case "seamles":
     case "seamless":
      seamless_data();
      break;



     case "me":
     case "mes":
     case "mess":
     case "messa":
     case "messag":
     case "message":
     case "messages":
      messanger_data();
      break;

    default:
      const p = document.createElement("p");
      p.textContent = "Search not found";
      s.innerHTML = "";
      s.appendChild(p);


}




  if (searchInput.value=="") {


 const container_loading = document.createElement("img");
    container_loading.src = "icon_element/loading.gif";
    container_loading.style.width = "50px";
    s.innerHTML = "";
    s.appendChild(container_loading); 	

 
 }


});


function close_input() {
searchInput.value = "";
}
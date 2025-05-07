var StrechValue;
var platform_vl;
function Strech(send_strech_id) {
  StrechValue = send_strech_id;
  return StrechValue;
}

function platform_system_element(navigation_system) {
  platform_vl = navigation_system;
  return platform_vl;
}

function folder_item(argumant) {
  var compFolder;
  var folderExists = false;

  for (var i = 1; i <= app.project.items.length; i++) {
    if (
      app.project.items[i] instanceof FolderItem &&
      app.project.items[i].name == "nonmotion"
    ) {
      compFolder = app.project.items[i];

      folderExists = true;
      break;
    }
  }

  if (!folderExists) {
    compFolder = app.project.items.addFolder("nonmotion");
  }

  argumant.parentFolder = compFolder;

  var compFolder;

  for (var i = 1; i <= app.project.items.length; i++) {
    if (
      app.project.items[i] instanceof FolderItem &&
      app.project.items[i].name == "nonmotion"
    ) {
      compFolder = app.project.items[i];

      break;
    }
  }

  if (compFolder) {
    compFolder.selected = true;
    app.executeCommand(2154);
  }
}

var system_patch = [
  "C:/Program Files (x86)/Common Files/Adobe/CEP/extensions/",

  "/Library/Application Support/Adobe/CEP/extensions/",
];

var titles_file_url;

var social_file_url;

var simple_file_url;

var weater_file_url;

var elements_file_url;

var typograpy_file_url;

var abstract_file_url;

var shape_element_url;

var arc_element_url;

var blow_Ups_url;

var looped_element_url;

var simple_elements_url;

var arrow_element_url;

var slider_element_url;

var complicated_media_url;

var transitions_url;

var lower_thirds_url;

var callouts_left_url;

var callouts_right_url;

var simple_url;

var logo_Reveals_url;

var geometric_url;

var background_simple_url;

var background_abstarct_url;

var gradinet_element;

var futuristic_element;

var devices_url;

var infographics_url;

var transition_url;

var seamless_url;

var messenger_url;

function import_typograpy(typeg_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      typograpy_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Typography/Modern/" +
        typeg_click_id +
        ".aep";
    } else {
      typograpy_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Typography/Modern/" +
        typeg_click_id +
        ".aep";
    }

    var import_typog = new ImportOptions(File(typograpy_file_url));

    var typograpy_folder = app.project.importFile(import_typog);

    typograpy_folder.name = "Modern_Typography" + typeg_click_id + "";

    folder_item(typograpy_folder);

    if (!(typograpy_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = typograpy_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = typograpy_folder.item(i - 1);

        if (curItem.parentFolder !== typograpy_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);

              var composition_source_element_detal = comp_element.layer(3);

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_abstract(abs) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      abstract_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Typography/Abstract/" +
        abs +
        ".aep";
    } else {
      abstract_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Typography/Abstract/" +
        abs +
        ".aep";
    }

    var import_abstract = new ImportOptions(File(abstract_file_url));

    var abstract_folder = app.project.importFile(import_abstract);

    abstract_folder.name = "Abstract_Typography" + abs + "";

    folder_item(abstract_folder);

    if (!(abstract_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = abstract_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = abstract_folder.item(i - 1);

        if (curItem.parentFolder !== abstract_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);

              var composition_source_element_detal = comp_element.layer(3);

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function titles_elements(titles_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      titles_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Titles/" +
        titles_click_id +
        ".aep";
    } else {
      titles_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Titles/" +
        titles_click_id +
        ".aep";
    }

    var import_titles = new ImportOptions(File(titles_file_url));

    var titles_folder = app.project.importFile(import_titles);

    titles_folder.name = "Title_elemnts_" + titles_click_id + "";

    ///folder add start

    folder_item(titles_folder);

    ///folder add end

    if (!(titles_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = titles_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = titles_folder.item(i - 1);
        if (curItem.parentFolder !== titles_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var titles = curItem.item(1);

            var comp_item = titles.items[2];

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);

              var element = app.project.activeItem;

              element.layer(1).selected = true;

              var item_layer_element = activeComp.layer(i);

              item_layer_element.startTime = activeComp.time;
            }

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function Geometric(geometric_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      geometric_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Logo_Reveals/Geometric/" +
        geometric_click_id +
        ".aep";
    } else {
      geometric_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Logo_Reveals/Geometric/" +
        geometric_click_id +
        ".aep";
    }

    var import_geometric = new ImportOptions(File(geometric_url));

    var geometric_folder = app.project.importFile(import_geometric);

    geometric_folder.name = "geometric_logo_reveal" + geometric_click_id + "";

    ///folder add start
    folder_item(geometric_folder);
    ///folder add end

    if (!(geometric_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = geometric_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = geometric_folder.item(i);

        if (curItem.parentFolder !== geometric_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var item_sound = curItem.item(4);

            if (platform_vl === "Win32") {
              var newFile = new File(
                "C:/Program Files (x86)/Common Files/Adobe/CEP/extensions/nonmotion graphics library/Nonmotion_library/Logo_Reveals/SoundFX/G_Logo_Reveal_V_" +
                  geometric_click_id +
                  ".mp3"
              ); // Yeni ses dosyasının yolu
              item_sound.replace(newFile);
            } else {
              var newFile = new File(
                "/Library/Application Support/Adobe/CEP/extensions/nonmotion graphics library/Nonmotion_library/Logo_Reveals/SoundFX/G_Logo_Reveal_V_" +
                  geometric_click_id +
                  ".mp3"
              ); // Yeni ses dosyasının yolu
              item_sound.replace(newFile);
            }

            var comp_item = curItem.item(5);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function Logo_Reveals(rev_media_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      logo_Reveals_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Logo_Reveals/Simple/" +
        rev_media_click_id +
        ".aep";
    } else {
      logo_Reveals_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Logo_Reveals/Simple/" +
        rev_media_click_id +
        ".aep";
    }

    var import_reveals = new ImportOptions(File(logo_Reveals_url));

    var reveals_folder = app.project.importFile(import_reveals);

    reveals_folder.name = "logo_reveals" + rev_media_click_id + "";

    ///folder add start
    folder_item(reveals_folder);
    ///folder add end

    if (!(reveals_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = reveals_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = reveals_folder.item(i);

        if (curItem.parentFolder !== reveals_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_social(social_click_event_ev) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      social_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Emojies/" +
        social_click_event_ev +
        ".aep";
    } else {
      social_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Emojies/" +
        social_click_event_ev +
        ".aep";
    }

    var import_social = new ImportOptions(File(social_file_url));
    var scila_folder = app.project.importFile(import_social);
    scila_folder.name = "Emoji " + social_click_event_ev + "";

    ///folder add start

    folder_item(scila_folder);

    ///folder add end

    if (!(scila_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = scila_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = scila_folder.item(i - 1);
        if (curItem.parentFolder !== scila_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var social_emojy = curItem.item(1);

            var activeItem = app.project.activeItem;

            var social_elementLayer = activeItem.layers.add(social_emojy);

            social_elementLayer.startTime = activeItem.time;

            social_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_simple(simple_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      simple_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Simple_Icons/" +
        simple_id +
        ".aep";
    } else {
      simple_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Simple_Icons/" +
        simple_id +
        ".aep";
    }

    var import_simple = new ImportOptions(File(simple_file_url));

    var simple_folder = app.project.importFile(import_simple);

    simple_folder.name = "Simple " + simple_id + "";

    ///folder add start

    folder_item(simple_folder);

    ///folder add end

    if (!(simple_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = simple_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = simple_folder.item(i - 1);
        if (curItem.parentFolder !== simple_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var simple_folder = curItem.item(1);

            var activeItem = app.project.activeItem;

            var simple_elementLayer = activeItem.layers.add(simple_folder);

            simple_elementLayer.startTime = activeItem.time;

            simple_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_weater(weater_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      weater_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Weather_Icons/" +
        weater_click_id +
        ".aep";
    } else {
      weater_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Weather_Icons/" +
        weater_click_id +
        ".aep";
    }

    var import_weater = new ImportOptions(File(weater_file_url));

    var weater_folder = app.project.importFile(import_weater);

    weater_folder.name = "Wheather " + weater_click_id + " ";

    ///folder add start

    folder_item(weater_folder);

    ///folder add end

    if (!(weater_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = weater_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = weater_folder.item(i);
        if (curItem.parentFolder !== weater_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var weater_folder_element = curItem.item(1);

            var activeItem = app.project.activeItem;

            var weater_elementLayer = activeItem.layers.add(
              weater_folder_element
            );

            weater_elementLayer.startTime = activeItem.time;

            weater_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_elements(elements_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      elements_file_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Social_Elements/" +
        elements_click_id +
        ".aep";
    } else {
      elements_file_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Social_Elements/" +
        elements_click_id +
        ".aep";
    }

    var import_social = new ImportOptions(File(elements_file_url));

    var elements_folder = app.project.importFile(import_social);

    elements_folder.name = "SM_Element " + elements_click_id + "";

    ///folder add start

    folder_item(elements_folder);
    ///folder add end

    if (!(elements_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = elements_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = elements_folder.item(i - 1);
        if (curItem.parentFolder !== elements_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var elements_folder_element = curItem.item(1);

            var activeItem = app.project.activeItem;

            var elements_elementLayer = activeItem.layers.add(
              elements_folder_element
            );

            elements_elementLayer.startTime = activeItem.time;

            elements_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function arrow_element_fn(arrow_media_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      arrow_element_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Arrows/" +
        arrow_media_click_id +
        ".aep";
    } else {
      arrow_element_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Arrows/" +
        arrow_media_click_id +
        ".aep";
    }

    var import_arrow = new ImportOptions(File(arrow_element_url));

    var arrow_folder = app.project.importFile(import_arrow);

    arrow_folder.name = "Arrow" + arrow_media_click_id + "";

    ///folder add start

    folder_item(arrow_folder);
    ///folder add end

    if (!(arrow_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = arrow_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = arrow_folder.item(i - 1);
        if (curItem.parentFolder !== arrow_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var arrow_folder = curItem.item(1);

            var activeItem = app.project.activeItem;

            var arrow_elementLayer = activeItem.layers.add(arrow_folder);

            arrow_elementLayer.startTime = activeItem.time;

            arrow_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function explosions_element(explosions_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      shape_element_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Explosions/" +
        explosions_click_id +
        ".aep";
    } else {
      shape_element_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Explosions/" +
        explosions_click_id +
        ".aep";
    }

    var import_explosions = new ImportOptions(File(shape_element_url));
    var import_explosions_folder = app.project.importFile(import_explosions);
    import_explosions_folder.name =
      "Explosion_Shape" + explosions_click_id + "";

    ///folder add start

    folder_item(import_explosions_folder);

    ///folder add end

    if (!(import_explosions_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_explosions_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_explosions_folder.item(i - 1);
        if (curItem.parentFolder !== import_explosions_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var explosions_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var explosions_folder_elementLayer = activeItem.layers.add(
              explosions_elementLayer
            );

            explosions_folder_elementLayer.startTime = activeItem.time;

            explosions_folder_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function arcs_element(arcs_media_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      arc_element_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Arcs/" +
        arcs_media_click_id +
        ".aep";
    } else {
      arc_element_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Arcs/" +
        arcs_media_click_id +
        ".aep";
    }

    var import_arcs = new ImportOptions(File(arc_element_url));
    var import_arcs_folder = app.project.importFile(import_arcs);
    import_arcs_folder.name = "Arcs_Shape" + arcs_media_click_id + "";

    ///folder add start

    folder_item(import_arcs_folder);

    ///folder add end

    if (!(import_arcs_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_arcs_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_arcs_folder.item(i - 1);
        if (curItem.parentFolder !== import_arcs_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var arcs_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var arcs_folder_elementLayer =
              activeItem.layers.add(arcs_elementLayer);

            arcs_folder_elementLayer.startTime = activeItem.time;

            arcs_folder_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function blow_Ups_element(blow_Ups_media_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      blow_Ups_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Blow_Ups/" +
        blow_Ups_media_click_id +
        ".aep";
    } else {
      blow_Ups_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Blow_Ups/" +
        blow_Ups_media_click_id +
        ".aep";
    }

    var blow_element = new ImportOptions(File(blow_Ups_url));
    var import_blow_ups_folder = app.project.importFile(blow_element);
    import_blow_ups_folder.name =
      "Blow_Ups_Shape" + blow_Ups_media_click_id + "";

    ///folder add start

    folder_item(import_blow_ups_folder);

    ///folder add end

    if (!(import_blow_ups_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_blow_ups_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_blow_ups_folder.item(i - 1);
        if (curItem.parentFolder !== import_blow_ups_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var blow_ups_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var blow_ups_elementLayer_add = activeItem.layers.add(
              blow_ups_elementLayer
            );

            blow_ups_elementLayer_add.startTime = activeItem.time;

            blow_ups_elementLayer_add.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function looped_element(looped_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      looped_element_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Simple_Elements_Looped/" +
        looped_click_id +
        ".aep";
    } else {
      looped_element_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Simple_Elements_Looped/" +
        looped_click_id +
        ".aep";
    }

    var looped_element = new ImportOptions(File(looped_element_url));

    var import_looped_folder = app.project.importFile(looped_element);

    import_looped_folder.name = "Elements_Looped" + looped_click_id + "";

    ///folder add start

    folder_item(import_looped_folder);

    ///folder add end

    if (!(import_looped_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_looped_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_looped_folder.item(i - 1);
        if (curItem.parentFolder !== import_looped_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var looped_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var looped_add = activeItem.layers.add(looped_elementLayer);

            looped_add.startTime = activeItem.time;

            looped_add.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function simple_media_el(simple_media_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      simple_elements_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Simple_Elements/" +
        simple_media_click_id +
        ".aep";
    } else {
      simple_elements_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Simple_Elements/" +
        simple_media_click_id +
        ".aep";
    }

    var simp_element = new ImportOptions(File(simple_elements_url));

    var import_simple_folder = app.project.importFile(simp_element);

    import_simple_folder.name = "Simple_Elements" + simple_media_click_id + "";

    ///folder add start

    folder_item(import_simple_folder);

    ///folder add end

    if (!(import_simple_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_simple_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_simple_folder.item(i - 1);
        if (curItem.parentFolder !== import_simple_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var simple_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var simp_add = activeItem.layers.add(simple_elementLayer);

            simp_add.startTime = activeItem.time;

            simp_add.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function slider_element_fn(slider_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      slider_element_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Slides/" +
        slider_click_id +
        ".aep";
    } else {
      slider_element_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Slides/" +
        slider_click_id +
        ".aep";
    }

    var sld_element = new ImportOptions(File(slider_element_url));

    var import_slider_folder = app.project.importFile(sld_element);

    import_slider_folder.name = "Slides" + slider_click_id + "";

    ///folder add start

    folder_item(import_slider_folder);

    ///folder add end

    if (!(import_slider_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_slider_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_slider_folder.item(i - 1);
        if (curItem.parentFolder !== import_slider_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var slider_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var slider_add = activeItem.layers.add(slider_elementLayer);

            slider_add.startTime = activeItem.time;

            slider_add.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function complicated_element_fn(complicated_media_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      complicated_media_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Complicated_Elements/" +
        complicated_media_id +
        ".aep";
    } else {
      complicated_media_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Complicated_Elements/" +
        complicated_media_id +
        ".aep";
    }

    var complic_element = new ImportOptions(File(complicated_media_url));

    var import_complic_folder = app.project.importFile(complic_element);

    import_complic_folder.name =
      "Complicated_Elements" + complicated_media_id + "";

    ///folder add start

    folder_item(import_complic_folder);

    ///folder add end

    if (!(import_complic_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_complic_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = import_complic_folder.item(i - 1);
        if (curItem.parentFolder !== import_complic_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var complic_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var comp_add = activeItem.layers.add(complic_elementLayer);

            comp_add.startTime = activeItem.time;

            comp_add.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function transitions_element_fn(transitions_media_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      transitions_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Transitions/" +
        transitions_media_id +
        ".aep";
    } else {
      transitions_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Shape_Elements/Transitions/" +
        transitions_media_id +
        ".aep";
    }

    var transitions_element = new ImportOptions(File(transitions_url));

    var import_transitions_folder = app.project.importFile(transitions_element);

    import_transitions_folder.name = "Transitions" + transitions_media_id + "";

    ///folder add start

    folder_item(import_transitions_folder);

    ///folder add end

    if (!(import_transitions_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_transitions_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = import_transitions_folder.item(i);
        if (curItem.parentFolder !== import_transitions_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var import_transitions_elementLayer = curItem.item(1);

            var activeItem = app.project.activeItem;

            var import_transitions_add = activeItem.layers.add(
              import_transitions_elementLayer
            );

            var activeComp = app.project.activeItem;

            var element = app.project.activeItem;
            element.layer(1).selected = true;

            var data = import_transitions_add.source;

            var null_layer = app.project.activeItem.selectedLayers[0];

            var comp_element = null_layer.source;

            var composition_source_element = comp_element.layer(2);

            composition_source_element.selected = true;

            var compCenter = [activeComp.width / 2, activeComp.height / 2];
            composition_source_element.transform.position.setValue(compCenter);

            var comp = app.project.activeItem.selectedLayers[0].source;

            comp.width = element.width;
            comp.height = element.height;

            var menuCommandId = app.findMenuCommandId("Fit to Comp");

            app.executeCommand(menuCommandId);

            import_transitions_add.startTime = activeItem.time;

            import_transitions_add.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function lower_thirds(lower_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      lower_thirds_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Lower_Thirds/" +
        lower_id +
        ".aep";
    } else {
      lower_thirds_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Lower_Thirds/" +
        lower_id +
        ".aep";
    }

    var import_lower = new ImportOptions(File(lower_thirds_url));

    var import_lower_folder = app.project.importFile(import_lower);

    import_lower_folder.name = "Lower_third_" + lower_id + "";

    ///folder add start

    folder_item(import_lower_folder);

    ///folder add end

    if (!(import_lower_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = import_lower_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = import_lower_folder.item(i);
        if (curItem.parentFolder !== import_lower_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var import_lower_element = curItem.item(1);

            var comp_item = import_lower_element.items[2];

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);

              var element = app.project.activeItem;

              element.layer(1).selected = true;

              var item_layer_element = activeComp.layer(i);

              item_layer_element.startTime = activeComp.time;
            }

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function callouts_left(callouts_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      callouts_left_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Callouts/Left/" +
        callouts_id +
        ".aep";
    } else {
      callouts_left_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Callouts/Left/" +
        callouts_id +
        ".aep";
    }

    var import_callouts = new ImportOptions(File(callouts_left_url));

    var callouts_folder = app.project.importFile(import_callouts);

    callouts_folder.name = "callouts_left_" + callouts_id + "";

    ///folder add start

    folder_item(callouts_folder);

    ///folder add end

    if (!(callouts_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = callouts_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = callouts_folder.item(i);
        if (curItem.parentFolder !== callouts_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var callouts = curItem.item(1);

            var comp_item = callouts.items[2];

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);

              var element = app.project.activeItem;

              element.layer(1).selected = true;

              var item_layer_element = activeComp.layer(i);

              var comp_element = item_layer_element.source;

              //----------------------------------------------------------------------------------------

              var composition_source_element = comp_element.layer(2); //start

              var layer_element_sp = composition_source_element
                .property("Transform")
                .property("Position");

              var myExpression =
                "comp('" +
                default_comp.name +
                "').layer('" +
                comp_element.name +
                "').effect('Start_Point')('Point')";

              layer_element_sp.expression = myExpression;

              ///---------------------------------------------------------------------------------------------------

              var composition_source_element_end = comp_element.layer(3); //end

              var layer_element_sp = composition_source_element_end
                .property("Transform")
                .property("Position");

              var myExpression_end =
                "comp('" +
                default_comp.name +
                "').layer('" +
                comp_element.name +
                "').effect('End_Point')('Point')";

              layer_element_sp.expression = myExpression_end;

              //----------------------------------------------------------------------------------------------------------
            }
            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function callouts_right(callouts_right_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      callouts_right_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Callouts/Right/" +
        callouts_right_id +
        ".aep";
    } else {
      callouts_right_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Callouts/Right/" +
        callouts_right_id +
        ".aep";
    }

    var import_callouts = new ImportOptions(File(callouts_right_url));

    var callouts_folder = app.project.importFile(import_callouts);

    callouts_folder.name = "callouts_Right_" + callouts_right_id + "";

    ///folder add start

    folder_item(callouts_folder);

    ///folder add end

    if (!(callouts_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = callouts_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = callouts_folder.item(i);
        if (curItem.parentFolder !== callouts_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var callouts = curItem.item(1);

            var comp_item = callouts.items[2];

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);

              var element = app.project.activeItem;

              element.layer(1).selected = true;

              var item_layer_element = activeComp.layer(i);

              var comp_element = item_layer_element.source;

              //----------------------------------------------------------------------------------------

              var composition_source_element = comp_element.layer(2); //start

              var layer_element_sp = composition_source_element
                .property("Transform")
                .property("Position");

              var myExpression =
                "comp('" +
                default_comp.name +
                "').layer('" +
                comp_element.name +
                "').effect('Start_Point')('Point')";

              layer_element_sp.expression = myExpression;

              ///---------------------------------------------------------------------------------------------------

              var composition_source_element_end = comp_element.layer(3); //end

              var layer_element_sp = composition_source_element_end
                .property("Transform")
                .property("Position");

              var myExpression_end =
                "comp('" +
                default_comp.name +
                "').layer('" +
                comp_element.name +
                "').effect('End_Point')('Point')";

              layer_element_sp.expression = myExpression_end;

              //----------------------------------------------------------------------------------------------------------
            }
            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function simple_element_sm(simple_id_elements) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      simple_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Typography/Simple/" +
        simple_id_elements +
        ".aep";
    } else {
      simple_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Typography/Simple/" +
        simple_id_elements +
        ".aep";
    }

    var import_simple = new ImportOptions(File(simple_url));

    var typograpy_simple = app.project.importFile(import_simple);

    typograpy_simple.name = "simple_typography" + simple_id_elements + "";

    ///folder add start
    folder_item(typograpy_simple);
    ///folder add end

    if (!(typograpy_simple instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = typograpy_simple.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = typograpy_simple.item(i - 1);

        if (curItem.parentFolder !== typograpy_simple) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );

              composition_source_element.selected = true;

              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_bacground_simple(backgrounds_simple) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      background_simple_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Simple/" +
        backgrounds_simple +
        ".aep";
    } else {
      background_simple_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Simple/" +
        backgrounds_simple +
        ".aep";
    }

    var import_background_simple = new ImportOptions(
      File(background_simple_url)
    );

    var background_folder_simple = app.project.importFile(
      import_background_simple
    );

    background_folder_simple.name =
      "background_simple" + backgrounds_simple + "";

    ///folder add start
    folder_item(background_folder_simple);
    ///folder add end

    if (!(background_folder_simple instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = background_folder_simple.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = background_folder_simple.item(i);

        if (curItem.parentFolder !== background_folder_simple) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item); /// composion  add

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function import_bacground_abstract(backgrounds_abstract_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      background_abstarct_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Abstract/" +
        backgrounds_abstract_id +
        ".aep";
    } else {
      background_abstarct_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Abstract/" +
        backgrounds_abstract_id +
        ".aep";
    }

    var import_background_abstarct = new ImportOptions(
      File(background_abstarct_url)
    );

    var background_folder_abstarct = app.project.importFile(
      import_background_abstarct
    );

    background_folder_abstarct.name =
      "background_abstract" + backgrounds_abstract_id + "";

    ///folder add start
    folder_item(background_folder_abstarct);
    ///folder add end

    if (!(background_folder_abstarct instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = background_folder_abstarct.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = background_folder_abstarct.item(i);

        if (curItem.parentFolder !== background_folder_abstarct) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item); /// composion  add

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function gradient_element(gradient_item_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      gradinet_element =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Gradient/" +
        gradient_item_id +
        ".aep";
    } else {
      gradinet_element =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Gradient/" +
        gradient_item_id +
        ".aep";
    }

    var import_gradinet = new ImportOptions(File(gradinet_element));

    var gradinet_folder = app.project.importFile(import_gradinet);

    gradinet_folder.name = "gradient" + gradient_item_id + "";

    ///folder add start
    folder_item(gradinet_folder);
    ///folder add end

    if (!(gradinet_folder instanceof FolderItem)) {
      alert("error");
    } else {
      var numInFolder = gradinet_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = gradinet_folder.item(i);

        if (curItem.parentFolder !== gradinet_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(1);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item); /// composion  add

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function futuristic_interface(futuristic_data_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      futuristic_element =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Futuristic/" +
        futuristic_data_id +
        ".aep";
    } else {
      futuristic_element =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Backgrounds/Futuristic/" +
        futuristic_data_id +
        ".aep";
    }

    var futuristic_element_import = new ImportOptions(File(futuristic_element));

    var futuristic_folder = app.project.importFile(futuristic_element_import);

    futuristic_folder.name = "futuristic" + futuristic_data_id + "";

    ///folder add start
    folder_item(futuristic_folder);
    ///folder add end

    if (!(futuristic_folder instanceof FolderItem)) {
      alert("error");
    } else {
      var numInFolder = futuristic_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = futuristic_folder.item(i);

        if (curItem.parentFolder !== futuristic_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item); /// composion  add

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);

              ///-------------------------------------------------------------responsive start

              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);
              //alert(composition_source_element.name)

              var composition_source_element_detal = comp_element.layer(3); ///text 1
              //alert(composition_source_element_detal.name)

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

              //-------------------------------------------------------------responsive end
            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function devices_interface(devices_media_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      devices_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Devices/" +
        devices_media_id +
        ".aep";
    } else {
      devices_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Devices/" +
        devices_media_id +
        ".aep";
    }

    var import_devices = new ImportOptions(File(devices_url));

    var devices_folder = app.project.importFile(import_devices);

    devices_folder.name = "devices" + devices_media_id + "";

    ///folder add start

    folder_item(devices_folder);

    ///folder add end

    if (!(devices_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = devices_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = devices_folder.item(i);
        if (curItem.parentFolder !== devices_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var devices = curItem.item(3);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(devices);

            layer_comp.remove();

            for (var i = 1; i <= devices.numLayers; i++) {
              var currentLayer = devices.layer(i);
              currentLayer.copyToComp(activeComp);

              var element = app.project.activeItem;

              element.layer(1).selected = true;

              var item_layer_element = activeComp.layer(i);

              item_layer_element.startTime = activeComp.time;
            }

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function infographics_interface(infographics_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      infographics_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Infographics/" +
        infographics_click_id +
        ".aep";
    } else {
      infographics_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Infographics/" +
        infographics_click_id +
        ".aep";
    }

    var import_infographics = new ImportOptions(File(infographics_url));

    var infographics_simple = app.project.importFile(import_infographics);

    infographics_simple.name = "Infographics" + infographics_click_id + "";

    folder_item(infographics_simple);

    if (!(infographics_simple instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = infographics_simple.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = infographics_simple.item(i);

        if (curItem.parentFolder !== infographics_simple) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(4);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);


              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);

              var composition_source_element_detal = comp_element.layer(3); ///text 1

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function transition_interface(transition_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      transition_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Transitions/Simple/" +
        transition_click_id +
        ".aep";
    } else {
      transition_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Transitions/Simple/" +
        transition_click_id +
        ".aep";
    }

    var transition_abstract = new ImportOptions(File(transition_url));

    var transition_folder = app.project.importFile(transition_abstract);

    transition_folder.name = "transition" + transition_click_id + "";

    folder_item(transition_folder);

    if (!(transition_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = transition_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = transition_folder.item(i - 1);

        if (curItem.parentFolder !== transition_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(3);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item);

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);


              var comp_element = item_layer_element.source;
              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);

              var composition_source_element_detal = comp_element.layer(3); 

              composition_source_element_detal.selected = true;

              var layerCenter = [
                composition_source_element_detal.width / 2,
                composition_source_element_detal.height / 2,
              ];

              var compCenters = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element_detal.transform.position.setValue(
                compCenters
              );
              composition_source_element.selected = true;
              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];
              var compCenter = [activeComp.width / 2, activeComp.height / 2];
              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function seamless_interface(seamless_media_click_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      seamless_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Transitions/Seamless/" +
        seamless_media_click_id +
        ".aep";
    } else {
      seamless_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Transitions/Seamless/" +
        seamless_media_click_id +
        ".aep";
    }

    var import_seamless_url = new ImportOptions(File(seamless_url));

    var seamless_folder = app.project.importFile(import_seamless_url);

    seamless_folder.name = "Seamless" + seamless_media_click_id + "";

    folder_item(seamless_folder);

    if (!(seamless_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = seamless_folder.numItems;
      for (var i = numInFolder; i >= 2; i--) {
        var curItem = seamless_folder.item(i);

        if (curItem.parentFolder !== seamless_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var comp_item = curItem.item(3);

            var activeComp = app.project.activeItem;

            var layer_comp = activeComp.layers.add(comp_item); 

            layer_comp.remove();

            for (var i = 1; i <= comp_item.numLayers; i++) {
              var currentLayer = comp_item.layer(i);
              currentLayer.copyToComp(activeComp);
              var element = app.project.activeItem;
              element.layer(1).selected = true;
              var item_layer_element = activeComp.layer(i);


              var comp_element = item_layer_element.source;

              var null_layer = app.project.activeItem.selectedLayers[0];
              var comp_element = null_layer.source;
              var composition_source_element = comp_element.layer(2);

              composition_source_element.selected = true;

              var layerCenter = [
                composition_source_element.width / 2,
                composition_source_element.height / 2,
              ];

              var compCenter = [activeComp.width / 2, activeComp.height / 2];

              composition_source_element.transform.position.setValue(
                compCenter
              );

              var transformProp =
                composition_source_element.property("Transform");
              var Dont_t_Touch = app.project.activeItem.selectedLayers[0];
              var comp = Dont_t_Touch.source;
              comp.width = element.width;
              comp.height = element.height;
              var menuCommandId = app.findMenuCommandId("Fit to Comp");
              app.executeCommand(menuCommandId);

            }

            item_layer_element.startTime = activeComp.time;

            item_layer_element.stretch = StrechValue;
          }
        }
      }
    }
  }
}

function messages(ms_id) {
  var default_comp = app.project.activeItem;

  if (default_comp == null) {
    var msg = "Please Create or Select a Composition";
    return msg;
  } else {
    if (platform_vl === "Win32") {
      messenger_url =
        "" +
        system_patch[0] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Messages/" +
        ms_id +
        ".aep";
    } else {
      messenger_url =
        "" +
        system_patch[1] +
        "nonmotion graphics library/Nonmotion_library/Social_Media/Messages/" +
        ms_id +
        ".aep";
    }

    var import_messenger = new ImportOptions(File(messenger_url));

    var messenger_folder = app.project.importFile(import_messenger);

    messenger_folder.name = "Messages " + ms_id + "";


    folder_item(messenger_folder);


    if (!(messenger_folder instanceof FolderItem)) {
      alert("eror");
    } else {
      var numInFolder = messenger_folder.numItems;
      for (var i = numInFolder; i >= 1; i--) {
        var curItem = messenger_folder.item(i - 1);
        if (curItem.parentFolder !== messenger_folder) {
          alert("no folder");
        } else {
          if (!curItem.selected) {
            var messenger = curItem.item(1);

            var activeItem = app.project.activeItem;

            var social_elementLayer = activeItem.layers.add(messenger);

            social_elementLayer.startTime = activeItem.time;

            social_elementLayer.stretch = StrechValue;
          }
        }
      }
    }
  }
}

//Problem: it looks gross in smaller browser widths/devices. 
//Solution: hide the text links and swap them out with a more appropiate navigation.

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select)

// Cycle of menu links
$("#menu a").each(function(){
  var $anchor = $(this);  
  //Create an option
  var $option = $("<option></option>");
 
  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected",true);
    
  }
  //options value is the href
  $option.val($anchor.attr("href"));
  //options text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);

});  
  
//Create a button 

//var $button = $("<button>Go</button>");
//$("#menu").append($button);

//Bind click to button

$select.change(function(){
  //go to select's location
  window.location = $select.val();
});
//Modify CSS to hide links on small width and show button and select
//Also hides select and button on larger width and show's links

  
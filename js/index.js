var main=function(){
  $('.imagenes').hide();
  $('.solucion').hide();
  $('.button').on('click',function(){
  	$(this).toggleClass('active');
    var option_names = ['#option_a',
                      '#option_b',
                      '#option_c',
                      '#option_d',
                      '#option_e',
                      '#option_f'];
    var option_values = [];
    for (i=0; i<option_names.length;i++){
      if ($(option_names[i]).val() !== ''){
        option_values.push($(option_names[i]).val());
      }
    }
    toast_time_ms = 2000;
    var n_options = option_values.length;
    if (n_options <= 1) {
      alert('¡Necesito al menos 2 opciones!');
    } else {
      $(this).hide();
      toast(toast_time_ms);
      var index = Math.floor(Math.random()*n_options);
      selected_value=option_values[index];
      setTimeout(function(){show_selected_value(selected_value)},toast_time_ms);
}
});
  
function toast(toast_time_ms){
      // Get the snackbar DIV
    var x = document.getElementById("toast")
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, toast_time_ms);
};
  
function show_selected_value(selected_value){
  $('.opciones').hide();  
  $('.solucion').show();
  $("p").text(selected_value);
  if (selected_value === "Definitivamente, sí") {
    $('#imagen_si').fadeIn(400);
  } else if (selected_value === "Definitivamente, no"){
  $('#imagen_no').fadeIn(400);  
  } else if (selected_value === "Pide una pizza"){
  $('#imagen_pizza').fadeIn(400);
  } else if (selected_value === "Tómate una cerve"){
  $('#imagen_cerveza').fadeIn(400);  
  } else if (selected_value === "Pregunta a tu madre"){
  $('#imagen_madre').fadeIn(400);
  } else if (selected_value === "Ya lo pensarás mañana"){
  $('#imagen_mañana').fadeIn(400);
  } else {
  $('#imagen_general').fadeIn(400);
  }
};

}
  
$(document).ready(main);

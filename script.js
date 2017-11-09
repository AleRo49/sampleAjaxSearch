$(function() {

  var form = $('#search_form_ajax');
  var divResult = $('#search_result');

  form.submit(function(e){
    e.preventDefault(); // empeche la soumission classique du formulaire

    // On envoi le formulaire en 'ajax' au PHP
    $.ajax({
      type: 'POST',
      url: 'refresh.php',
      data: form.serializeArray(),
      success: function(response) {
        // Response contient le contenu renvoyé par le PHP (ici de l'HTML)
        divResult.html(response);
      },
      error: function(){
        alert("Une erreur s'est produite");
      }
    });
  });



});

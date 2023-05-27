// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    //   $("#rooms select").change (function () {
    //     var selectedCountry = $(this).children("option:selected").val();
    //     alert ("You have selected the country - " + selectedCountry)});
    console.log('Submitting: ', $('#message').val());
    let getText = $('#message').val();
    let newMsg = {};
    newMsg.username = App.username;
    newMsg.text = getText;
    newMsg.room = null; //FIXTHIS
    Parse.create(newMsg);
    $('#message').val(''); //clears message box
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
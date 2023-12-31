// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(App.fetch, 5000);
    //let viewAll = function (data) {console.log(data)};

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log("FEtch CHECK?????");
      // examine the response from the server request:
      //return d;
      //console.log('DUMPING INTO MESSAGES');
      Messages.dump(data);
      Messages.rendFeed();
      callback();
      //setTimeout(App.fetch(), 2000);
      //fetch(callback);
      //console.log('FIRST MESSAGE', Messages._data[0]);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    //console.log(data);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

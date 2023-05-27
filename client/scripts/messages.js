// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  dump: function (input) {
    //console.log("inside dump, input IS ", input);
    _data = input;
    console.log(_data);
  },
  messageGood: function (mess) {
    if (mess.username !== null && mess.text !== null && mess.room !== null) {
      if (false) {
        //EDIT for XSS
      }
      return true;
    }
    return false;
  },

  rendMessage: function (mess) {
    if (Messages.messageGood(mess)) {
      MessagesView.renderMessage(mess);
    }
  },

  rendFeed: function() {
    _data.forEach(function (a) {
      Messages.rendMessage(a);
    });
  }
};

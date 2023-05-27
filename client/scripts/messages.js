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
    //_data = [{username: 'dingdong', text: 'dingdingding', room: 'roomname2'}];
    _data = input;
  },
  messageGood: function (mess) {
    if (mess.username !== null && mess.text !== null && mess.room !== null) {
      if (mess.username !== undefined && mess.text !== undefined) {
        if (!mess.username.includes('script') && !mess.text.includes('script')) { //add ROOM script check
          return true;
        }
      }
    } return false;
  },

  rendFeed: function() {
    let filtered = _.filter(_data, function (a) {
      return Messages.messageGood(a);
    });
    Rooms.makeRooms(filtered);
    MessagesView.render(filtered);

  }
};

// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  addRoom: function (roomName) {
    if (!Rooms.roomExists(roomName)) {
      Rooms._data.push(roomName);
    }

  },
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  makeRooms: function (messages) {
    messages.forEach(function (singleMessage) {
      Rooms.addRoom(singleMessage.roomname);
    });
    RoomsView.render(Rooms._data);
  },

  roomExists: function (roomName) {
    if (Rooms._data.includes(roomName)) {
      return true;
    } return false;
  },

  validRoom: function (roomName) {
    if (roomName !== null) {
      return true;
    }
  }
};
// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // let $rooms = $
    //RoomsView.renderRoom('add new room...');
  },

  render: function(roomNames) {
    // TODO: Render out the list of rooms.
    //
    $('#rooms select option').each(
      function () {
        $(this).remove();
      }
    );
    roomNames.forEach(function(a) {
      RoomsView.renderRoom(a);
    });
  },

  renderRoom: function(roomname) {
    let divString = `<option value=${roomname}>${roomname}</option>`;
    $('#rooms select').append(divString);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};

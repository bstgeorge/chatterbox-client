// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(msgs) {
    //REMOVE ARGUMENT
    // TODO: Render _all_ the messages.
    // _data.forEach(function (a) {
    //   MessagesView.rendMessage(a);
    // });
    MessagesView.$chats.html('');
    msgs.forEach(function (a) {
      MessagesView.renderMessage(a);
    });

  },

  renderMessage: function(message) {
    let $feed = $('#chats');
    let $testMessage = MessageView.render(message);
    $feed.append($testMessage);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};
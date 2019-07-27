var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.$chats.find('.username').on('click', Friends.toggleStatus);
  },

  render: function() {
    //messages
    // for (each message) {
    //   renderMessage(message)
    // }
  },

  renderMessage: function(messageObj) {
    if (!messageObj.username) {
      messageObj.username = "UNDEFINED";
    } else {
      messageObj.username = messageObj.username.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/, '');
    }

    if (!messageObj.roomname) {
      messageObj.roomname = "UNDEFINED";
    } else {
      messageObj.roomname = messageObj.roomname.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/, '');
    }

    if (!messageObj.text) {
      messageObj.text = "UNDEFINED";
    } else {
      messageObj.text = messageObj.text.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/, '');
    }
    var domText = $(MessageView.render(messageObj));
    this.$chats.append(domText);
  }
};
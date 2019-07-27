var MessagesView = {

  $chats : $('#chats'),
  $username : $('.username'),

  initialize: function() {
    // this.$username.on('click', Friends.toggleStatus);
    // this.$chats.on('click','.username', Friends.toggleStatus);
  },

  render: function() {
    this.$chats.html('');
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      console.log("hello");
      var results = data.results;
      for (var i = 0; i < results.length; i++) {
        MessagesView.renderMessage(results[i]);
      }
    });
    setTimeout(this.render.bind(this), 5000);
    //$('button').on('click', function() {console.log('a')});
    //$('body').on('click', 'button.username', function(){Friends.toggleStatus});
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
    $domText = $(MessageView.render(messageObj));
    console.log(typeof $domText);

    this.$chats.append($domText);
  },

};
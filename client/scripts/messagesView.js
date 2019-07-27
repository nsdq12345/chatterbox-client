var MessagesView = {

  $chats : $('#chats'),
  $username : $('.username'),

  initialize: function() {
    //var value=$('.username').val();

    //this.$chats.on('click',this.$username, Friends.toggleStatus())
    // this.$chats.on('click',this.$username, function() {
    //   var id = $('.username');
    //   console.log(id);
    // })
  },

  render: function() {
    this.$chats.html('');
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      var results = data.results;
      // RoomsView.render(data);
      for (var i = 0; i < results.length; i++) {
        var currentRoom=$('select').val();
        if (currentRoom === 'EVERYTHING' || currentRoom==results[i].roomname){
        MessagesView.renderMessage(results[i]);
        }
      }
    });
    setTimeout(this.render.bind(this), 10000);
  },

  renderMessage: function(messageObj) {
    if (!messageObj.username) {
      messageObj.username = "UNDEFINED";
    } else {
      messageObj.username = messageObj.username.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/, '');
      messageObj.username = messageObj.username.replace(/#/, '');
      messageObj.username = messageObj.username.replace(/@/, '');
      messageObj.username = messageObj.username.replace(/%20/, '');
      messageObj.username = messageObj.username.replace(/%20/, '');
      messageObj.username = messageObj.username.replace(/&/, '');
      messageObj.username = messageObj.username.replace(/ /, '');
      messageObj.username = messageObj.username.replace(/ /, '');
      messageObj.username = messageObj.username.replace(/]/, '');
      messageObj.username = messageObj.username.replace(/\+/, '');
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

    var $friendsList = $('li');
    for (var $friends of $friendsList){
      var $friendsId = $friends.id;
      if (messageObj.username===$friendsId){
        $domText.addClass("friend");
      }
    }

    console.log(typeof $domText);

    $('.' + messageObj.username + 'Button').off().on('click', function() {Friends.toggleStatus(messageObj.username)});

    this.$chats.append($domText);
  },
};
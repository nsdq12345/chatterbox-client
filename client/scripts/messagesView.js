var MessagesView = {

  $chats : $('#chats'),
  $username : $('.username'),

  initialize: function() {
    // var value=$('.username').val();

    // this.$chats.on('click',this.$username, Friends.toggleStatus())
    // this.$chats.on('click',this.$username, function() {
    //   var id = $('.username');
    //   console.log(id);
    // })
  },

  render: function() {
    //this.$chats.html('');
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      var results = data.results;
      //$('#chats').html($('#chats'))
      // console.log("CHATS:");
      // if ($('.chat').length) {
      //   console.log('hit' + $('.chat').length);
      //   var $friendsList = $('li');
      //   for (var $friends of $friendsList){
      //     var $friendsId = $friends.id;
      //     if (messageObj.username===$friendsId){
      //       $domText.addClass("friend");
      //     }
      //   }
      // }

      // console.log($('.chat')[0].getAttribute("value"));
      // //console.log($('.chat')[0].getAttribute("value"));
      var chatValue = $('.chat')[0].getAttribute("value");
      var duplicateFound = false;
      for (var i = 0; i < results.length; i++) {
        var currentMessageFromServer = results[i];
        //If our chat not equal to their chat AND if duplicate not found
        // console.log("Value we're looking for: " + chatValue);
        // console.log(results[i]);
        if(chatValue === currentMessageFromServer.objectId){
          duplicateFound=true;
        }
        if (!duplicateFound) {
          var currentRoom=$('select').val();
          if (currentRoom === 'EVERYTHING' || currentRoom==results[i].roomname){
            MessagesView.renderMessagePrepend(results[i]);
          }
        }
      }
    });
    setTimeout(this.render.bind(this), 500);
  },

  // render: function() {
  //   this.$chats.html('');
  //   Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     var results = data.results;
  //     console.log(data);
  //     for (var i = 0; i < results.length; i++) {
  //       var currentMessageFromServer = results[i];
  //       //If our chat not equal to their chat AND if duplicate not found
  //       // console.log("Value we're looking for: " + chatValue);
  //       // console.log(results[i]);
  //       var currentRoom=$('select').val();
  //       if (currentRoom === 'EVERYTHING' || currentRoom==results[i].roomname){
  //         MessagesView.renderMessage(results[i]);
  //       }
  //     }
  //   });
  //   setTimeout(this.render.bind(this), 5000);
  // },

  renderMessage: function(messageObj) {
    if (!messageObj.username) {
      messageObj.username = "UNDEFINED";
    } else {
      messageObj.username = messageObj.username.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/g, '');
      messageObj.username = messageObj.username.toString().replace(/[^\w]/g, '');
      messageObj.username = messageObj.username.toString().replace(/\s/g, '');
      messageObj.username = messageObj.username.toString().replace(/\d/g, '');

    }

    if (!messageObj.roomname) {
      messageObj.roomname = "UNDEFINED";
    } else {
      messageObj.roomname = messageObj.roomname.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/g, '');
      messageObj.roomname = messageObj.roomname.toString().replace(/[^\w]/g, '');
      messageObj.roomname = messageObj.roomname.toString().replace(/\s/g, '');
      messageObj.roomname = messageObj.roomname.toString().replace(/\d/g, '');
    }

    if (!messageObj.text) {
      messageObj.text = "UNDEFINED";
    } else {
      messageObj.text = messageObj.text.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/g, '');
    }

    $domText = $(MessageView.render(messageObj));

    var $friendsList = $('li');
    for (var $friends of $friendsList){
      var $friendsId = $friends.id;
      if (messageObj.username===$friendsId){
        $domText.addClass("friend");
      }
    }
    $('.' + messageObj.username + 'Button').off().on('click', function() {Friends.toggleStatus(messageObj.username)});

    this.$chats.append($domText);
  },

  renderMessagePrepend: function(messageObj) {

    if (!messageObj.username) {
      messageObj.username = "UNDEFINED";
    } else {
      messageObj.username = messageObj.username.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/g, '');
      messageObj.username = messageObj.username.toString().replace(/[^\w]/g, '');
      messageObj.username = messageObj.username.toString().replace(/\s/g, '');
      messageObj.username = messageObj.username.toString().replace(/\d/g, '');

    }

    if (!messageObj.roomname) {
      messageObj.roomname = "UNDEFINED";
    } else {
      messageObj.roomname = messageObj.roomname.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/g, '');
      messageObj.roomname = messageObj.roomname.toString().replace(/[^\w]/g, '');
      messageObj.roomname = messageObj.roomname.toString().replace(/\s/g, '');
      messageObj.roomname = messageObj.roomname.toString().replace(/\d/g, '');
    }

    if (!messageObj.text) {
      messageObj.text = "UNDEFINED";
    } else {
      messageObj.text = messageObj.text.toString().replace(/<(?:[^>=]|='[^']*'|=\"[^\"]*\"|=[^'\"][^\\s>]*)*>/g, '');
    }

    $domText = $(MessageView.render(messageObj));

    var $friendsList = $('li');
    for (var $friends of $friendsList){
      var $friendsId = $friends.id;
      if (messageObj.username===$friendsId){
        $domText.addClass("friend");
      }
    }
    $('#chats').on('click', $('.' + messageObj.username + 'Button'), function() {Friends.toggleStatus(messageObj.username)});
    this.$chats.prepend($domText);
  }
};


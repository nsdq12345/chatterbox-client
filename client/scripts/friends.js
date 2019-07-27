var Friends = {

  $friendsList: $('#friendsList'),
  toggleStatus: function(friendName) {

    if(!$('#'+friendName).length) {
      var friend=$('<li id ="'+ friendName + '">'+friendName+'</li>');
      $('.friends').append(friend);

      if ($('.chat')[0]) {
        console.log($('.chat')[0]);
      }

      for (var i = 0; i < $('.chat').length; i++) {
      }

      //add bold css class to all messages from friends
    } else {
      $('#' + friendName).remove();
    }
  }
};
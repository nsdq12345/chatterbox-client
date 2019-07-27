var Friends = {

  $friendsList: $('#friendsList'),
  toggleStatus: function(friendName) {

    if(!$('#'+friendName).length) {
      var friend=$('<li id ="'+ friendName + '">'+friendName+'</li>');
      $('.friends').append(friend);

      //add bold css class to all messages from friends
    } else {
      $('#' + friendName).remove();
    }
  }
};
var Rooms = {
  $rooms: $('#rooms'),
  $button: $('.addRoom'),
  initialize: function() {
    // $('#rooms').on('click','button.addRoom',Rooms.add);
  },

  add: function (room) {
    //add button with room name which is the filter

    var newRoom = $('<option value = "' + $('#message').val() + '">' + $('#message').val() + '</option>');
    $('select').append(newRoom);
    console.log('ABC');
  }
};
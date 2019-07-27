var Rooms = {
  $rooms: $('#rooms'),
  $button: $('.addRoom'),
  initialize: function() {

  },

  add: function (room) {
    var newRoom = $('<option value = "' + $('#message').val() + '">' + $('#message').val() + '</option>');
    $('select').append(newRoom);
  },
  addRoomName: function (room) {
    var roomName=$('<option value = "' + room + '">' + room + '</option>');
    $('select').append(roomName);
  }
};
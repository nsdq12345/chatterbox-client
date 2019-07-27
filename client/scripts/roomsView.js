var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function() {
    $('#rooms').on('click','button.addRoom',Rooms.add);
  },

  render: function(data) {
    //for each room render room
    var roomsObject={};
    var results = data.results;
    $('select').html('')
    Rooms.addRoomName("EVERYTHING");
    for (var message of results) {
      if (!roomsObject[message.roomname]){
         roomsObject[message.roomname]=message.roomname;
         if (message.roomname){
         Rooms.addRoomName(message.roomname);
         }
      }

    }
  },
  renderRoom: function(room) {
    var domRoom=$('<div>' + room + '</div>');
    this.$select.append(domRoom);
  }
};

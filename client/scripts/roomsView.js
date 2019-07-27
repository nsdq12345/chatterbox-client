var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function() {
    this.$rooms.on('click', Rooms.add);
  },

  render: function() {
    //for each room render room
  },
  renderRoom: function(room) {
    var domRoom=$('<div>' + room + '</div>');
    this.$select.append(domRoom);
  }
};

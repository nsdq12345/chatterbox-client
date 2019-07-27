var MessageView = {

  render: _.template(`

      <div class="chat">
        <button class="username <%= username %>Button"><%= username %></button>
        <div><%= roomname %></div>
        <text><%= text %></text>
      </div>
    `)

};
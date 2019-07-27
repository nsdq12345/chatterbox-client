var MessageView = {

  render: _.template(`

      <div class="chat" value="<%= objectId %>">
        <button class="username <%= username %>Button"><%= username %></button>
        <div><%= roomname %></div>
        <text><%= text %></text>
      </div>
    `)

};
var MessageView = {

  render: _.template(`

      <div class="chat">
        <button class="username"><%= username %></button>
        <div><%= roomname %></div>
        <%= text %>
      </div>
    `)

};
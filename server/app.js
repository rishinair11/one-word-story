const io = require('socket.io')();
const PORT = process.env.PORT || 4000;

let story = ""
let clients = []

io.on('connection', client => {
  io.emit('story', story)

  client.on('add_word', (word) => {
    story += ` ${word}`;
    console.log(story)
    io.emit('story', story)
  });

  client.on('reset_story', (word) => {
    story = word;
    console.log(story)
    io.emit('story', story)
  });

  client.on('register', data => {
    if (!clients.some(x => x.name === data.name)) {
      clients.push({
        name: data.name,
        id: client.id
      })
      client.emit('registered', {
        ok: true
      })
    } else {
      // name already exists
      client.emit('registered', {
        ok: false,
        message: 'Client already exists.'
      })
    }
    console.log("Total clients: ", JSON.stringify(clients))
  })

  client.on('un_register', data => {
    let index = clients.findIndex(x => x.name === data.name)
    if(index !== -1) {
      clients.splice(index, 1);
      client.emit('un_registered', {
        ok: true
      })
    } else {
      // name not found
      client.emit('un_registered', {
        ok: false,
        message: 'Client not found.'
      })
    }
    console.log("Total clients: ", JSON.stringify(clients))
  })
});

console.log('Server started at port:', PORT);
io.listen(PORT);
const io = require('socket.io')();

let story = ""

io.on('connection', client => { 
  // console.log(client)
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
});

io.listen(4000);
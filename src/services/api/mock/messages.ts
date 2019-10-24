export const messages = [
  {
    text: "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",
    reply: false,
    date: new Date(),
    user: {
      name: "John Doe",
      avatar: "https://i.gifer.com/no.gif",
    },
  },
  {
    text: "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",
    reply: true,
    date: new Date(),
    user: {
      name: "Kate Moss",
      avatar: "https://i.gifer.com/no.gif",
    },
  },
  {
    text: "Hello, how are you?",
    reply: false,
    date: new Date(),
    user: {
      name: "John Doe",
      avatar: "https://i.gifer.com/no.gif",
    },
  },
  {
    text: "Hey looks at that pic I just found!",
    reply: false,
    date: new Date(),
    type: "file",
    files: [
      {
        url: "https://i.gifer.com/no.gif",
        type: "image/jpeg",
        icon: false,
      },
    ],
    user: {
      name: "John Doe",
      avatar: "https://i.gifer.com/no.gif",
    },
  },
  {
    text: "What do you mean by that?",
    reply: false,
    date: new Date(),
    type: "quote",
    quote: "Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",
    user: {
      name: "John Doe",
      avatar: "https://i.gifer.com/no.gif",
    },
  },
  {
    text: "Attached is an archive I mentioned",
    reply: true,
    date: new Date(),
    type: "file",
    files: [
      {
        url: "https://i.gifer.com/no.gif",
        icon: "file-text-outline",
      },
    ],
    user: {
      name: "Kate Moss",
      avatar: "https://i.gifer.com/no.gif",
    },
  },
];

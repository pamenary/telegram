export const state = () => ({
  conversations: [
    {
      id: 0,
      lastMassage: 'Yes, why not',
      user: {
        id: 0,
        fullName: 'Ali Pamenari',
        avatar: '/images/avatar/1.webp',
      },
      messages: [
        {
          id: 1,
          message: 'About go grab some lunch?',
          isMe: false,
        },
        {
          id: 2,
          message: 'Yes, why not',
          isMe: true,
        },
      ],
    },
    {
      id: 1,
      lastMassage: 'Hi!',
      user: {
        id: 1,
        fullName: 'Reza Moradi',
        avatar: '/images/avatar/2.jpg',
      },
      messages: [
        {
          id: 3,
          message: 'Hi!',
          isMe: false,
        },
        {
          id: 4,
          message: 'Hi!',
          isMe: true,
        },
      ],
    },
    {
      id: 2,
      lastMassage: 'Yes, why not',
      user: {
        id: 2,
        fullName: 'Alice Freeman',
        avatar: '/images/avatar/3.jpg',
      },
      messages: [
        {
          id: 5,
          message: 'About go grab some lunch?',
          isMe: false,
        },
        {
          id: 6,
          message: 'Yes, why not',
          isMe: true,
        },
      ],
    },
  ],
  selectConversation: null,
})

export const mutations = {
  SET_CONVERSATION(state, payload) {
    state.selectConversation = payload
  },
  PUSH_MESSAGE(state, payload) {
    state.conversations[state.selectConversation].messages.push(payload)
  },
}

export const getters = {
  conversation(state, payload) {
    return state.selectConversation
      ? state.conversations[state.selectConversation]
      : null
  },
}

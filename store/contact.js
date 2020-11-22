export const state = () => ({
  contacts: [
    {
      id: 0,
      fullName: 'Ali Pamenari',
      avatar: '/images/avatar/1.webp',
    },
    {
      id: 1,
      fullName: 'Reza Moradi',
      avatar: '/images/avatar/2.jpg',
    },
    {
      id: 2,
      fullName: 'Alice Freeman',
      avatar: '/images/avatar/3.jpg',
    },
  ],
  selectContact: null,
})

export const mutations = {
  SET_CONTACT(state, payload) {
    state.selectContact = payload
  },
}

export const getters = {
  contact(state) {
    return state.selectContact ? state.contacts[state.selectContact] : null
  },
}

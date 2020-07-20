const URL = 'https://cors-anywhere.herokuapp.com/https://test-frontend-api.herokuapp.com/galaxies';

export const state = () => ({
  galaxies: [],
  sortFirst: true,
  search: ''
})

export const getters = {
  galaxies(state) {
    return !state.search.length
      ? state.galaxies
      : state.galaxies.filter(item => item.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1);
  },
  sortDirection(state) {
    return state.sortFirst;
  }
}

export const mutations = {
  setData(state, payload) {
    state.galaxies = payload
  },
  setSearch(state, payload) {
    state.search = payload;
  },
  sortGalaxies(state) {
    state.sortFirst = !state.sortFirst
    const list = state.galaxies
    state.galaxies = list.sort((a, b) => {
      if (state.sortFirst) {
        return a.name > b.name ? 1 : -1
      } else {
        return b.name > a.name ? 1: -1
      }
    })
  }
}

export const actions = {
  async getData({ commit }) {
    const response = await this.$axios.get(URL, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    commit('setData', response.data)
  }
}
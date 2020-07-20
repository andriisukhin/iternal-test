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
  },
  sortedGalaxies(state) {
    const list = state.galaxies;
    const sorted = list.sort((a, b) => {
      return state.sortFirst ? a.name > b.name : b.name > a.name
    })
    return sorted
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
    const test = response.data.sort((a, b) => {
      return b.name > a.name;
    })
    commit('setData', response.data)
  }
}
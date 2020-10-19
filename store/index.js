export const state = () => ({
  currentProject: {}
})

export const getters = {
  getCounterText: state => `Counter is ${state.counter}`
}

export const mutations = {
  increment (state) {
    state.counter++
  }
}

// For fetching data from the server or other APIs, they're asynchronous
export const actions = {}

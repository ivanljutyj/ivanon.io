export const state = () => ({
  posts: [],
  projects: []
})

export const mutations = {
  set (state, payload) {
    state.posts = payload.posts;
    state.projects = payload.projects;
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await this.$axios.get('/main');
    commit('set', data);
  }
}

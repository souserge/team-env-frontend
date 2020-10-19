import projects from './data/projects'

export const state = () => ({
  currentProjectId: null,
  projects
})

export const getters = {
  currentProject: state =>
    state.currentProjectId
      ? state.projects.find(proj => proj.id == state.currentProjectId)
      : null,

  projectsInfo: state =>
    state.projects.map(proj => ({ name: proj.name, id: proj.id })),

  projectSelected: state =>
    state.currentProjectId !== null && state.currentProjectId !== undefined
}

export const mutations = {
  setCurrentProject (state, projectId) {
    state.currentProjectId = projectId
  }
}

// For fetching data from the server or other APIs, they're asynchronous
export const actions = {}

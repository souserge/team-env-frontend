import projects from './data/projects'
import volunteers from './data/volunteers'
import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  currentProject: null,
  projects,
  volunteers
})

function findLargestId (events) {
  return events.reduce((prev, curr) => (prev.id > curr.id ? prev : curr)).id
}

function findProject (projects, projectId) {
  return projectId ? projects.find(proj => proj.id == projectId) : null
}

export const getters = {
  currentProject: state => state.currentProject,

  projectsInfo: state =>
    state.projects.map(proj => ({ name: proj.name, id: proj.id })),

  projectSelected: state =>
    state.currentProject !== null && state.currentProject !== undefined
}

export const mutations = {
  setCurrentProject (state, projectId) {
    state.currentProject = findProject(state.projects, projectId)
  },

  addTodoTaskInCurrentProject (state, newTask) {
    const task = {
      ...newTask,
      created: Date.now(),
      id: uuidv4()
    }
    state.currentProject.organizationTodo.push(task)
  },

  toggleTodoTaskInCurrentProject (state, taskId) {
    const task = state.currentProject.organizationTodo.find(
      t => t.id === taskId
    )
    task.done = !task.done
  },

  deleteTodoTaskInCurrentProject (state, taskId) {
    const taskIndex = state.currentProject.organizationTodo.findIndex(
      t => t.id === taskId
    )
    state.currentProject.organizationTodo.splice(taskIndex, 1)
  },

  addEventToCurrentProject (state, newEvent) {
    const event = {
      ...newEvent,
      id: findLargestId(state.currentProject.events) + 1
    }
    state.currentProject.events.push(event)
  }
}

// For fetching data from the server or other APIs, they're asynchronous
export const actions = {}

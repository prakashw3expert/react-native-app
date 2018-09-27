import { AsyncStorage } from 'react-native'

const STORAGE_KEY = '@Todo:todos'
// AsyncStorage.removeItem(STORAGE_KEY);
export function getTodoData () {
  return {
    type: "GET_TODO_DATA",
    payload: AsyncStorage.getItem(STORAGE_KEY)
  }
}

export function startLoading () {
  return {
    type: "START_LOADING"
  }
}

export function addNewTodo (todoData)  {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todoData))
  return {
    type: "ADD_NEW_TODO",
    payload: todoData
  }
}
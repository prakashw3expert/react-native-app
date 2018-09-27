import { AsyncStorage } from 'react-native'

const STORAGE_KEY = '@Todo:todos'

export async function getTodoData () {
    let todoData = await AsyncStorage.getItem(STORAGE_KEY)
    return todoData
}

export async function addNewTodo (todoData)  {
  try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todoData))
  } catch (e) {
    console.log('error:', e)
  }
}
/*
Adding task in Array.

*/
import { addTodo } from './helper'
describe('addTodo', ()=>{
   it('should add todo to the list', () => {
      const startTodos = [
         'Analyze to-do Application',
         'Design to-do Application'
      ]

      const newTodo = 'Implement to-do Application';
      const expected =[
         'Analyze to-do Application',
         'Design to-do Application',
         'Implement to-do Application'
      ]
      const result = addTodo(startTodos, newTodo)
      expect(result).toEqual(expected)
   })
})

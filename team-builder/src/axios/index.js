import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
// const initialFriendsList = [
//   {
//     id: uuid(), // uuid is a lib to generate random, unique ids
//     username: 'Michael',
//     email: 'michael@michael.com',
//     role: 'Student',
//   },
// ]
const initialFriendsList = [
  { id: uuid(), name: 'Josh', age: 32, email: 'josh@josh.com' },
  { id: uuid(), name: 'Melissa', age: 28, email: 'melissa@melissa.com' },
  { id: uuid(), name: 'AJ', age: 25, email: 'aj@aj.com' },
  { id: uuid(), name: 'Audrey', age: 22, email: 'audrey@audrey.com' },
  { id: uuid(), name: 'Ebony', age: 35, email: 'ebony@ebony.com' },
  { id: uuid(), name: 'Trevor', age: 24, email: 'trevor@trevor.com' },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialFriendsList })
  },
  post(url, { name, email, age }) {
    const newFriend = { id: uuid(), name, email, age }
    return Promise.resolve({ status: 200, success: true, data: newFriend })
  }
}

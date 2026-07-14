import { usuarios } from '../data/data.js'

export function login(email, password) {
  return usuarios.find(u => u.email === email && u.password === password)
}

export function findUserByEmail(email) {
  return usuarios.find(u => u.email === email)
}

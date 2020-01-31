import call from 'anticore-core/Function/call.js'
import console from './index.js'

const method = console.error

export default function error (value, ...args) {
  return call(method, console, value, ...args)
}

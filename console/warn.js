import call from 'anticore-core/Function/call.js'
import console from './index.js'

const method = console.warn

export default function warn (value, ...args) {
  return call(method, console, value, ...args)
}

import call from 'anticore-core/Function/call.js'
import console from './index.js'

const method = console.log

export default function log (value, ...args) {
  return call(method, console, value, ...args)
}

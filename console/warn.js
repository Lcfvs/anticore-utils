import call from 'anticore-core/Function/call'
import console from './'

const method = console.warn

export default function warn (value, ...args) {
  return call(method, console, value, ...args)
}

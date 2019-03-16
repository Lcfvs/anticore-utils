import call from 'anticore-core/function/call'
import console from './'

const method = console.error

export default function error (value, ...args) {
  return call(method, console, value, ...args)
}

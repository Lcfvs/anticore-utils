import call from 'anticore-core/function/call'
import console from './'

const method = console.log

export default function log (value, ...args) {
  return call(method, console, value, ...args)
}
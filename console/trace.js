import call from 'anticore-core/Function/call.js'
import console from './index.js'

const method = console.trace

export default function trace () {
  return call(method)
}

import call from 'anticore-core/Function/call'
import console from './'

const method = console.trace

export default function trace () {
  return call(method)
}

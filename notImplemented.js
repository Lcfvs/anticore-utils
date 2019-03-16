import log from './console/log'
import curry from 'anticore-core/function/curry'

function callback (name, log) {
  log('Not implemented : %s', name)

  return this
}

export default function notImplemented (name, logger) {
  return curry(callback, name, logger || log)
}

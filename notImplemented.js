import log from './console/log.js'
import curry from 'anticore-core/Function/curry.js'

function callback (name, log) {
  log('Not implemented : %s', name)

  return this
}

export default function notImplemented (name, logger) {
  return curry(callback, name, logger || log)
}

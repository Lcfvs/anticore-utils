import log from 'anticore-apis/console/log'
import bind from 'anticore-core/function/bind'

function callback (name, log) {
  log('Not implemented : %s', name)

  return this
}

export default function notImplemented (context, name, logger) {
  return bind(callback, context, name, logger || log)
}

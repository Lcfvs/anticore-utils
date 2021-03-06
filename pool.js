import push from 'anticore-core/Array/push.js'
import shift from 'anticore-core/Array/shift.js'
import slice from 'anticore-core/Array/slice.js'
import empty from 'anticore-core/Object/empty.js'

export default function pool (...extensions) {
  let current
  const entries = []

  return empty({
    fork (...extensions) {
      return pool(...extensions).push(...this.values())
    },
    current () {
      return current
    },
    get length () {
      return entries.length
    },
    next () {
      return (current = shift(entries))
    },
    push (...values) {
      push(entries, ...values)

      return this
    },
    values () {
      return slice(entries, 0)
    }
  }, ...extensions)
}

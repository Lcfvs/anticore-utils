import push from 'anticore-core/Array/push'
import shift from 'anticore-core/Array/shift'
import slice from 'anticore-core/Array/slice'
import empty from 'anticore-core/Object/empty'

export default function pool (...extensions) {
  let current
  const entries = []

  return empty({
    clone () {
      return pool(this).push(...entries)
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

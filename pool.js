import push from 'anticore-core/Array/push'
import shift from 'anticore-core/Array/shift'
import slice from 'anticore-core/Array/slice'
import empty from 'anticore-core/Object/empty'

export default function pool (members = empty()) {
  let current
  const entries = []

  return empty({
    push (...values) {
      push(entries, ...values)

      return this
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
    values () {
      return slice(entries, 0)
    }
  }, members)
}

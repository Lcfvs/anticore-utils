import push from 'anticore-core/Array/push'
import shift from 'anticore-core/Array/shift'
import empty from 'anticore-core/Object/empty'

export default function pool (members = empty()) {
  let current
  const entries = []

  return empty({
    add (...values) {
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
    }
  }, members)
}

import indexOf from 'anticore-core/Array/indexOf.js'
import shift from 'anticore-core/Array/shift.js'
import curry from 'anticore-core/Function/curry.js'

function find (invalids, ...values) {
  const value = shift(values)

  if (indexOf(invalids, value) === -1) {
    return value
  }

  if (values.length) {
    return find(invalids, ...values)
  }
}

export default function coalesce (...invalids) {
  return curry(find, invalids)
}

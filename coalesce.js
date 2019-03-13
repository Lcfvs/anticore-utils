import indexOf from 'anticore-core/array/indexOf'
import shift from 'anticore-core/array/shift'
import curry from 'anticore-core/function/curry'

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

/**
 * If the middleware is given an array of custom types,
 * then use those types. If the middleware
 * is given a string, e.g., it is given just one type,
 * then append the various statuses to that type.
 */
export default function getTypes(type) {
  if (typeof type === 'array') {

    // Use the array of custom types
    return {
      pending: type[0],
      fulfilled: type[1],
      rejected: type[2]
    };
  } else {

    // Use default types
    return {
      pending: `${type}_PENDING`,
      fulfilled: `${type}_FULFILLED`,
      rejected: `${type}_REJECTED`
    };
  }
}

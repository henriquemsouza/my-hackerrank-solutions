function alternativeTimeConversion(time) {
  const arr = time.slice(0, 8).split(':')
  arr[0] =
    time.indexOf('PM') > -1
      ? arr[0] == 12
        ? '12'
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? '00'
      : arr[0]
  return arr.join(':')
}

export default alternativeTimeConversion

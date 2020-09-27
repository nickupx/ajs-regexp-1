export default function formatPhone(number) {
  const result = number.replace(/(-| |\(|\))/g, '').replace(/^8/, '+7')
  return result
}

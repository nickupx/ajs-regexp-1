export default class Validator {
  constructor(username) {
    this.username = username
  }

  validateUsername() {
    const regexp = new RegExp('^([a-z]{1}|[a-z]+([0-9]{0,3}|[-_]{0,3}|([0-9]{0,3}[-_]{0,3}[a-z]+|[-_]{0,3})*)[a-z]+)$', 'gi')
    return regexp.test(this.username)
  }
}

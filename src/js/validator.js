/* eslint-disable max-len */
export default class Validator {
  constructor(username) {
    this.username = username
  }

  validateUsername() {
    // const regexp = new RegExp('^([a-z]{1}|[a-z]+([0-9]{0,3}|[-_]{0,3}|([0-9]{0,3}[-_]{0,3}[a-z]+|[-_]{0,3})*)[a-z]+)$', 'gi')
    const regexp = new RegExp('^[a-z](([0-9]{0,3}[a-z_-]+)*[0-9]{0,3}[a-z]+)?$', 'gi') // покороче
    return regexp.test(this.username)
  }
}

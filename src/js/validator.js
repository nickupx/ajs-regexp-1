export default class Validator {
  constructor(username) {
    this.username = username
  }

  validateUsername() {
    return (typeof (this.username) === 'string' && this.username.length > 1)
  }
}

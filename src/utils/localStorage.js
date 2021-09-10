class LocalStorage {
  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  set(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val))
  }
}

const localStorage = new LocalStorage()

export default localStorage

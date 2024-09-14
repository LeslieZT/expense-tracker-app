export class LocalStorageManager {
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
}

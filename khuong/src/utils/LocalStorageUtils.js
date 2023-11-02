class LocalStorageUtils {
  getItem(key) {
    if (typeof localStorage !== "undefined") {
      let item = localStorage.getItem(key);
      if (!item) {
        this.setItem(key);
        return localStorage.getItem(key);
      }
      return JSON.parse(item || "{}");
    }
    return undefined;
  }

  setItem(key, value = "") {
    if (typeof localStorage !== "undefined" && value !== "") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  removeItem(key) {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clear() {
    if (typeof localStorage !== "undefined") {
      localStorage.clear();
    }
  }

  getCurrentUser() {
    if (typeof localStorage !== "undefined" ) {
      return this.getItem('currentUser') 
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LocalStorageUtils();

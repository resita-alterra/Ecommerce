import createStore from "unistore";

export const store = createStore({
  is_login: false,
  token: "",
  identitas: {},
  baseUrl: "http://0.0.0.0:6000"
});

export const actions = store => ({
  login(state) {
    return { is_login: true };
  },
  logout(state) {
    return { is_login: false };
  },

  setIdentitas(state, data) {
    return { identitas: data };
  },
  setToken(state, data) {
    return { token: data };
  }
});

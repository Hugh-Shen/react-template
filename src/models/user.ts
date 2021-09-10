import localStorage from '@/utils/localStorage'


const state = {
  user: localStorage.get('user') || {}
}

const reducers = {
  updateAuth(state, payload) {
    return {
      ...state,
      ...payload
    }
  }
}

const effects = (dispatch) => ({
  setUpdateUser(user) {
    dispatch.user.updateAuth({user})
  }
})

export default {
  state,
  reducers,
  effects
}
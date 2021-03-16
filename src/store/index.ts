import { createStore } from 'vuex'
import auth from './auth';
import settingsProfile from './settingsProfile';

export default createStore({
  modules: {
    auth,
    settingsProfile
  }
})
import firebase from 'firebase'
import router from '../router/index'
export default{
  state: {
  },
  mutations: {
  
  },
  
  actions: {
    async getUid(){
        const user = await firebase.auth().currentUser
        return user ? user.uid : null
    },
    async login({commit, dispatch}, {email, password}){
      try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        router.push('/')
      }
      catch(e){
          M.toast({html: e.message})
      }
    },
    async register({dispatch}, {email, password, name}) {
        console.log(email, password, name)
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({ name: name })
        router.push('/')
      } catch (e) {
        console.log('fail')
        throw e
      }
    },
  },
  modules: {
  }
}



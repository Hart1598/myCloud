import firebase from 'firebase'
export default{
  state: {
    loadStatus: false,
    nameFiles: []
  },
  mutations: {
  
  },
  getters:{
    getLoadStatus(state){
        return state.loadStatus
    },
    getNameFiles(state){
      return state.nameFiles
    }
  },
  
  actions: {
    async uploadFiles({dispatch,state}, e){
        try{
            state.loadStatus = true
            const uid = await dispatch('getUid')
            e.map(async (file) => {
                let storageRef = await firebase.storage().ref(`${uid}/${file.name}`)
                await storageRef.put(file)
            })
            state.loadStatus = false
        }
        catch(err){
            throw err
        }

    },
    async getFiles({state, dispatch}){
      try{
        state.loadStatus = true
        const uid = await dispatch('getUid')
        const storageRef = firebase.storage().ref(`${uid}`)
        const data = (await storageRef.listAll()).items

        const nameFiles = data.map(i => i.name)
        nameFiles.map(n => {
          let file = firebase.storage()
            .ref(`${uid}/${n}`)
            file.getMetadata()
            .then(meta => {
              file.getDownloadURL()
                .then((url) => {
                  state.nameFiles.push({
                    url,
                    name: n,
                    timeCreated: new Date(meta.timeCreated).toDateString(),
                    updated: new Date(meta.updated).toDateString()
                  })
                })
            })
            
        })
        state.loadStatus = false
        return state.nameFiles

      }
      catch(err){
        throw err
      }
    },
    
  },
  modules: {
  }
}



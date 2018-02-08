import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
export const db = firebaseApp.database()
// export const beersRef = db.ref('beers')

import * as firebase from 'firebase/app'

// TODO : fix
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDI4s3XY2is7vvNR5UFk6WpVgmuCu7fwcE',
    authDomain: 'sample-blog-app-a858c.firebaseapp.com',
    databaseURL: 'https://sample-blog-app-a858c.firebaseio.com',
    projectId: 'sample-blog-app-a858c',
    storageBucket: 'sample-blog-app-a858c.appspot.com',
    messagingSenderId: '23551322611'
  })
}

export default firebase

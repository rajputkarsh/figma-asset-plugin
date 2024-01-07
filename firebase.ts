import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  FirebaseStorage,
  getStorage,
  ref,
  StorageReference,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

class FirebaseFunctions {
  #app: FirebaseApp;
  #storage: FirebaseStorage;

  constructor() {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    this.#app = app;
    this.#storage = storage;
  }

  _uploadMedia(fileName: string, media: Buffer) {
    try {
      const storageRef: StorageReference = ref(this.#storage, fileName);
      return uploadBytes(storageRef, media);
    } catch (error) {
      throw error;
    }
  }

  _fetchDownloadUrl(fileName: string) {
    try {
      const storageRef: StorageReference = ref(this.#storage, fileName);
      return getDownloadURL(storageRef);
    } catch (error) {
      throw error;
    }
  }

  fetchMedia(typ: string) {}
}

export default new FirebaseFunctions();

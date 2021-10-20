import {
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../../common/services/firebase';
import { logError, logger } from '../../../common/utils/logger';
const googleProvider = new GoogleAuthProvider();

const signInGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    logger(`Google Sign In ${user.uid}`);
  } catch (err) {
    logError(`Google Sign In Error`, err as Error);
  }
};

const signInEmailPassword = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    logger(`Email Sign In ${user.uid}`);
  } catch (err) {
    logError(`Email Sign In Error`, err as Error);
  }
};

const registerUser = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    logger(`Email Sign Up ${name} ${user.uid}`);
  } catch (err) {
    logError(`Email Sign In Error`, err as Error);
  }
};

const signInAnon = async () => {
  try {
    await signInAnonymously(auth);
  } catch (err) {
    logError(`Sign In Anon Error`, err as Error);
  }
};

const logOut = async () => signOut(auth);

const authService = {
  signInAnon,
  signInEmailPassword,
  signInGoogle,
  registerUser,
  logOut,
};

export default authService;

import styles from './SignIn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode: ', errorCode);
        console.log('errorMessage: ', errorMessage);
      });
  };

  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>Sign In</h2>
          </div>
          <div className={`${styles.row} ${styles.clearfix}`}>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin(email, pass);
                }}
              >
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <input className={styles.button} type="submit" value="Sign In" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.credit}>
        Blablabla{' '}
        <a href="#" target="_blank" rel="noreferrer">
          some link
        </a>
      </p>
    </>
  );
};

export default SignIn;

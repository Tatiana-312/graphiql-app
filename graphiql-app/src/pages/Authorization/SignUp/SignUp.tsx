import styles from './SignUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState, FC } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/userSlice';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { useAuth } from '../../../hooks/use-auth';

const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return isAuth ? (
    <Navigate to="/main" />
  ) : (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>Sign Up</h2>
          </div>
          <div className={`${styles.row} ${styles.clearfix}`}>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignUp(email, pass);
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
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" name="password" placeholder="Re-type Password" />
                </div>
                <div className={`${styles.row} ${styles.clearfix}`}>
                  <div className={styles.col_half}>
                    <div className={styles.input_field}>
                      {' '}
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input type="text" name="name" placeholder="First Name" />
                    </div>
                  </div>
                  <div className={styles.col_half}>
                    <div className={styles.input_field}>
                      {' '}
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <input type="text" name="name" placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div className={`${styles.input_field} ${styles['radio_option']}`}>
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label htmlFor="rd1">Male</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label htmlFor="rd2">Female</label>
                  <input type="radio" name="radiogroup1" id="rd3" />
                  <label htmlFor="rd3">Other</label>
                </div>
                <div className={`${styles.input_field} ${styles['select_option']}`}>
                  <select>
                    <option>Select a country</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <div className={styles.select_arrow}></div>
                </div>
                <div className={`${styles.input_field} ${styles['checkbox_option']}`}>
                  <input type="checkbox" id="cb1" />
                  <label htmlFor="cb1">I agree with terms and conditions</label>
                </div>
                <div className={`${styles.input_field} ${styles['checkbox_option']}`}>
                  <input type="checkbox" id="cb2" />
                  <label htmlFor="cb2">I want to receive the newsletter</label>
                </div>
                <input className={styles.button} type="submit" value="Register" />
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

export default SignUp;

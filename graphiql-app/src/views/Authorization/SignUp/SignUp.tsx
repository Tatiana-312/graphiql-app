import styles from './SignUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  return (
    <>
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>Sign Up</h2>
          </div>
          <div className={`${styles.row} ${styles.clearfix}`}>
            <div>
              <form>
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" name="password" placeholder="Re-type Password" required />
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
                      <input type="text" name="name" placeholder="Last Name" required />
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

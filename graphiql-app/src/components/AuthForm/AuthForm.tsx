import styles from './AuthForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { AuthFormProps, AuthFormFields } from '../../types/authTypes';

const AuthForm: FC<AuthFormProps> = ({ submitFunction, type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<AuthFormFields>({
    reValidateMode: 'onSubmit',
  });

  useEffect(() => {
    if (formState.errors.email?.type === 'required') {
      toast.error('Email is required', {
        toastId: 'emailRequired',
      });
    }

    formState.errors.password?.type === 'required' &&
      toast.error('Password is required', {
        toastId: 'passwordRequired',
      });

    formState.errors.email?.type === 'pattern' &&
      toast.error('Invalid email pattern', {
        toastId: 'emailPattern',
      });

    formState.errors.password?.type === 'minLength' &&
      toast.error('Password must have at least 8 characters', {
        toastId: 'minLength',
      });

    formState.errors.password?.type === 'pattern' &&
      toast.error('Password must have at least one letter, one digit, and one special character', {
        toastId: 'pattern',
      });
  }, [formState]);

  return (
    <>
      <ToastContainer />
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>Sign Up</h2>
          </div>
          <div className={`${styles.row} ${styles.clearfix}`}>
            <div>
              <form onSubmit={handleSubmit(submitFunction)}>
                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    className={`${errors.email && styles.error}`}
                    placeholder="Email"
                    {...register('email', {
                      ...(type === 'SignUp' && {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      }),
                    })}
                  />
                </div>

                <div className={styles.input_field}>
                  {' '}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    className={`${errors.password && styles.error}`}
                    placeholder="Password"
                    {...register('password', {
                      ...(type === 'SignUp' && {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                      }),
                    })}
                  />
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

export default AuthForm;

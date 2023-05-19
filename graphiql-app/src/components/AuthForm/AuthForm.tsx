import styles from './AuthForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { AuthFormProps, AuthFormFields } from '../../types/authTypes';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const AuthForm: FC<AuthFormProps> = ({ submitFunction, type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<AuthFormFields>({
    reValidateMode: 'onSubmit',
  });
  const { t } = useTranslation();
  const { formLoading } = useAuth();

  useEffect(() => {
    if (formState.errors.email?.type === 'required') {
      toast.error(`${t('email-required')}`, {
        toastId: 'emailRequired',
      });
    }

    formState.errors.password?.type === 'required' &&
      toast.error(`${t('password-required')}`, {
        toastId: 'passwordRequired',
      });

    formState.errors.email?.type === 'pattern' &&
      toast.error(`${t('invalid-email')}`, {
        toastId: 'emailPattern',
      });

    formState.errors.password?.type === 'minLength' &&
      toast.error(`${t('password-length')}`, {
        toastId: 'minLength',
      });

    formState.errors.password?.type === 'pattern' &&
      toast.error(`${t('password-pattern')}`, {
        toastId: 'pattern',
      });
  }, [formState]);

  return (
    <>
      <ToastContainer />
      <div className={styles.form_wrapper}>
        <div className={styles.form_container}>
          <div className={styles.title_container}>
            <h2>{type === 'SignUp' ? t('sign-up') : t('sign-in')}</h2>
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
                    placeholder={`${t('email')}`}
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
                    placeholder={`${t('password')}`}
                    {...register('password', {
                      ...(type === 'SignUp' && {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                      }),
                    })}
                  />
                </div>
                <input
                  className={styles.button}
                  type="submit"
                  value={formLoading ? 'Loading...' : `${t('register')}`}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.credit}>
        Go back to{' '}
        <Link className={styles.link} to="../">
          welcome page
        </Link>
      </p>
    </>
  );
};

export default AuthForm;

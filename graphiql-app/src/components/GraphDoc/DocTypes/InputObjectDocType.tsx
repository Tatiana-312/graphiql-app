import { GraphQLObjectType } from 'graphql';
import { FC } from 'react';
import Fields from '../Fields';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { updateCurrentName } from '../../../redux/store/docSlice';
import Description from '../Description';
import styles from './typeStyles.module.scss';

const InputObjectDocType: FC<any> = ({ type }) => {
  const dispatch = useAppDispatch();
  const updateName = (currentPlace: string) => dispatch(updateCurrentName(currentPlace));

//   console.log('type', type);

  return (
    <div>
      <h2 className={styles.title}>{type.name}</h2>
      <Description description={type.description}/>
    {/* TODO arguments */}
    </div>
  );
};

export default InputObjectDocType;

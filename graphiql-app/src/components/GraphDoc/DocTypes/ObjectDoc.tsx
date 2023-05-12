import { GraphQLObjectType } from 'graphql';
import { FC } from 'react';
import Fields from '../Fields';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { updateCurrentName } from '../../../redux/store/docSlice';

const ObjectDoc: FC<any> = ({ type }) => {
  const dispatch = useAppDispatch();
  const updateName = (currentPlace: string) => dispatch(updateCurrentName(currentPlace));

  console.log('type', type);
  return (
    <div>
      <p className="title">{type.name}</p>
      <p className="description">{type.description}</p>
      <Fields fields={type.getFields()} />
    </div>
  );
};

export default ObjectDoc;

import { GraphQLObjectType } from 'graphql';
import { FC } from 'react';
import Fields from '../Fields';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { updateCurrentName } from '../../../redux/store/docSlice';
import Description from '../Description';

const ObjectDocType: FC<any> = ({ type }) => {
  const dispatch = useAppDispatch();
  const updateName = (currentPlace: string) => dispatch(updateCurrentName(currentPlace));

  console.log('type', type);

  return (
    <div>
      <h3 className="title">{type.name}</h3>
      <Description description={type.description}/>
      <Fields fields={type.getFields()} />
    </div>
  );
};

export default ObjectDocType;

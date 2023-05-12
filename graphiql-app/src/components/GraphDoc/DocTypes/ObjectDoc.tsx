import { GraphQLObjectType } from 'graphql';
import { FC } from 'react';
import Fields from '../Fields';

// interface ObjectTypeProps {
//   name: string;
//   description: string;
//   fields: any;
// }

const ObjectDoc: FC<any> = ({ type }) => {
//   console.log('type', type);
  return (
    <div>
      <p className="title">{type.name}</p>
      <p className="description">{type.description}</p>
      <Fields fields={type.getFields()} />
    </div>
  );
};

export default ObjectDoc;

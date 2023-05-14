export interface ObjectType {
  description: string;
  enumValues: null;
  fields: FieldType[];
  interfaces: object[];
  kind: string;
  name: string;
  possibleTypes: null;
}

export interface ScalarType {
  description: string;
  enumValues: null;
  fields: null;
  inputFields: null;
  interfaces: null;
  kind: string;
  name: string;
  possibleTypes: null;
}

export interface InputObjectType {
  description: string;
  enumValues: null;
  fields: null;
  inputFields: InputField[];
  interfaces: null;
  kind: string;
  name: string;
  possibleTypes: null;
}

export interface FieldType {
  args: ArgType[];
  deprecationReason: null;
  description: string;
  isDeprecated: boolean;
  name: string;
  type: Type;
}

export interface InputField {
  defaultValue: null;
  description: string;
  name: string;
  type: Type;
}

export interface Type {
  kind: string;
  name: string;
  ofType: null | OfType;
}

export interface OfType {
  kind: string;
  name: string;
  ofType: null;
}

export interface ArgType {
  defaultValue: null;
  description: string;
  name: string;
  type: Type;
}

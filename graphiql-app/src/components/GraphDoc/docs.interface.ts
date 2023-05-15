export interface SchemaType {
  directives: Directive[];
  mutationType: RootType | null;
  queryType: RootType;
  subscriptionType: RootType | null;
  types: ObjectType[];
}

interface RootType {
  name: string;
}

interface Directive {
  args: ArgType[];
  description: string;
  locations: string[];
  name: string;
}
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

export interface UnionType {
  kind: string;
  name: string;
  description: string;
  fields: null;
  inputFields: null;
  interfaces: null;
  enumValues: null;
  possibleTypes: OfType[];
}

export interface EnumType {
  kind: string;
  name: string;
  description: string;
  fields: null;
  inputFields: null;
  interfaces: null;
  enumValues: EnumValueType[];
  possibleTypes: null;
}

export interface EnumValueType {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: null;
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

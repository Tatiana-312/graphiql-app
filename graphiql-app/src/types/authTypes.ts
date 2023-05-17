export type AuthFormFields = {
  email: string;
  password: string;
};

export type AuthFormProps = {
  submitFunction: (data: AuthFormFields) => void;
  type?: string;
};

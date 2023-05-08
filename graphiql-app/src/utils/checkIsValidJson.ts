import { ERROR_MESSAGE } from './constants';

export const checkIsValidVariables = (variables: string) => {
  try {
    variables && JSON.parse(variables);
  } catch {
    throw new Error(ERROR_MESSAGE.VARIABLES);
  }
};

export const checkIsValidHeaders = (headers: string) => {
  try {
    headers && JSON.parse(headers);
  } catch {
    throw new Error(ERROR_MESSAGE.HEADERS);
  }
};

import { validateRules } from '../constants/validateRules';

const getErrorMessage = (name, field) => {
  const rules = validateRules[`${name}MaxCharacterCount`]
  const obj = {
    empty: 'There must be minimum 1 character.',
    overed: `You characters must be less than ${rules} characters.`
  };
  return obj[field];
}

export default getErrorMessage;

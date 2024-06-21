/**
 * Validates form fields based on provided rules.
 * @param {Object} formData - The form data object.
 * @param {Object} validationRules - The validation rules object.
 * @returns {Object} errors - An object containing validation errors.
 */
export function ValidateForm(formData, validationRules) {
  const errors = {};

  Object.keys(validationRules).forEach((field) => {
    // Check if field is required
    if (validationRules[field].required && !formData[field]) {
      errors[field] = `${validationRules[field].label} is required`;
    }

    // Check if field has specific length requirement
    if (
      validationRules[field].length &&
      formData[field]?.length !== validationRules[field].length
    ) {
      errors[
        field
      ] = `${validationRules[field].label} must be ${validationRules[field].length} characters long`;
    }

    // Check if field has maximum length requirement
    if (
      validationRules[field].maxLength &&
      formData[field]?.length > validationRules[field].maxLength
    ) {
      errors[
        field
      ] = `${validationRules[field].label} must be at most ${validationRules[field].maxLength} characters long`;
    }

    // Check if field has minimum length requirement
    if (
      validationRules[field].minLength &&
      formData[field]?.length < validationRules[field].minLength
    ) {
      errors[
        field
      ] = `${validationRules[field].label} must be at least ${validationRules[field].minLength} characters long`;
    }
  });

  return errors;
}

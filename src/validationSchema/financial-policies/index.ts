import * as yup from 'yup';

export const financialPolicyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  implementation_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});

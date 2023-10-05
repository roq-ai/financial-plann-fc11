import * as yup from 'yup';

export const financialProcedureValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  implementation_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});

import * as yup from 'yup';

export const financialProgramValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});

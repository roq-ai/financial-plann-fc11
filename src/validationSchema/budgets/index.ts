import * as yup from 'yup';

export const budgetValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  total_amount: yup.number().integer().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});

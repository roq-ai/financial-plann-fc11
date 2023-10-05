import * as yup from 'yup';

export const financialGoalValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  target_amount: yup.number().integer().nullable(),
  due_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});

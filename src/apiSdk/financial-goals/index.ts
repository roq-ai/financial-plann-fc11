import queryString from 'query-string';
import { FinancialGoalInterface, FinancialGoalGetQueryInterface } from 'interfaces/financial-goal';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFinancialGoals = async (
  query?: FinancialGoalGetQueryInterface,
): Promise<PaginatedInterface<FinancialGoalInterface>> => {
  return fetcher('/api/financial-goals', {}, query);
};

export const createFinancialGoal = async (financialGoal: FinancialGoalInterface) => {
  return fetcher('/api/financial-goals', { method: 'POST', body: JSON.stringify(financialGoal) });
};

export const updateFinancialGoalById = async (id: string, financialGoal: FinancialGoalInterface) => {
  return fetcher(`/api/financial-goals/${id}`, { method: 'PUT', body: JSON.stringify(financialGoal) });
};

export const getFinancialGoalById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/financial-goals/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFinancialGoalById = async (id: string) => {
  return fetcher(`/api/financial-goals/${id}`, { method: 'DELETE' });
};

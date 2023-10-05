import queryString from 'query-string';
import { FinancialPolicyInterface, FinancialPolicyGetQueryInterface } from 'interfaces/financial-policy';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFinancialPolicies = async (
  query?: FinancialPolicyGetQueryInterface,
): Promise<PaginatedInterface<FinancialPolicyInterface>> => {
  return fetcher('/api/financial-policies', {}, query);
};

export const createFinancialPolicy = async (financialPolicy: FinancialPolicyInterface) => {
  return fetcher('/api/financial-policies', { method: 'POST', body: JSON.stringify(financialPolicy) });
};

export const updateFinancialPolicyById = async (id: string, financialPolicy: FinancialPolicyInterface) => {
  return fetcher(`/api/financial-policies/${id}`, { method: 'PUT', body: JSON.stringify(financialPolicy) });
};

export const getFinancialPolicyById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/financial-policies/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFinancialPolicyById = async (id: string) => {
  return fetcher(`/api/financial-policies/${id}`, { method: 'DELETE' });
};

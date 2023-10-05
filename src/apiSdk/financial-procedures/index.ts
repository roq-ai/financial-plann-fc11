import queryString from 'query-string';
import { FinancialProcedureInterface, FinancialProcedureGetQueryInterface } from 'interfaces/financial-procedure';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFinancialProcedures = async (
  query?: FinancialProcedureGetQueryInterface,
): Promise<PaginatedInterface<FinancialProcedureInterface>> => {
  return fetcher('/api/financial-procedures', {}, query);
};

export const createFinancialProcedure = async (financialProcedure: FinancialProcedureInterface) => {
  return fetcher('/api/financial-procedures', { method: 'POST', body: JSON.stringify(financialProcedure) });
};

export const updateFinancialProcedureById = async (id: string, financialProcedure: FinancialProcedureInterface) => {
  return fetcher(`/api/financial-procedures/${id}`, { method: 'PUT', body: JSON.stringify(financialProcedure) });
};

export const getFinancialProcedureById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/financial-procedures/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFinancialProcedureById = async (id: string) => {
  return fetcher(`/api/financial-procedures/${id}`, { method: 'DELETE' });
};

import queryString from 'query-string';
import { FinancialProgramInterface, FinancialProgramGetQueryInterface } from 'interfaces/financial-program';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFinancialPrograms = async (
  query?: FinancialProgramGetQueryInterface,
): Promise<PaginatedInterface<FinancialProgramInterface>> => {
  return fetcher('/api/financial-programs', {}, query);
};

export const createFinancialProgram = async (financialProgram: FinancialProgramInterface) => {
  return fetcher('/api/financial-programs', { method: 'POST', body: JSON.stringify(financialProgram) });
};

export const updateFinancialProgramById = async (id: string, financialProgram: FinancialProgramInterface) => {
  return fetcher(`/api/financial-programs/${id}`, { method: 'PUT', body: JSON.stringify(financialProgram) });
};

export const getFinancialProgramById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/financial-programs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFinancialProgramById = async (id: string) => {
  return fetcher(`/api/financial-programs/${id}`, { method: 'DELETE' });
};

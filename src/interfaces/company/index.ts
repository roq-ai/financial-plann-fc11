import { BudgetInterface } from 'interfaces/budget';
import { FinancialGoalInterface } from 'interfaces/financial-goal';
import { FinancialPolicyInterface } from 'interfaces/financial-policy';
import { FinancialProcedureInterface } from 'interfaces/financial-procedure';
import { FinancialProgramInterface } from 'interfaces/financial-program';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  established_at?: any;
  address?: string;
  contact_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  budget?: BudgetInterface[];
  financial_goal?: FinancialGoalInterface[];
  financial_policy?: FinancialPolicyInterface[];
  financial_procedure?: FinancialProcedureInterface[];
  financial_program?: FinancialProgramInterface[];
  user?: UserInterface;
  _count?: {
    budget?: number;
    financial_goal?: number;
    financial_policy?: number;
    financial_procedure?: number;
    financial_program?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

const mapping: Record<string, string> = {
  budgets: 'budget',
  companies: 'company',
  'financial-goals': 'financial_goal',
  'financial-policies': 'financial_policy',
  'financial-procedures': 'financial_procedure',
  'financial-programs': 'financial_program',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

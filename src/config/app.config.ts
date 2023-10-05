interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Financial Manager'],
  tenantName: 'Company',
  applicationName: ' Financial Planning and Management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read financial goal',
    'Read financial policy',
    'Read financial program',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage financial goals',
    'Manage financial policies',
    'Manage financial procedures',
    'Manage financial programs',
    'Manage budget details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/469c7dec-6678-44a3-8334-e999f51fdb24',
};

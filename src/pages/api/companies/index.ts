import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { companyValidationSchema } from 'validationSchema/companies';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';
import omit from 'lodash/omit';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req);
  if (!session) {
    if (req.method === 'GET') {
      return getCompaniesPublic();
    }
    return res.status(403).json({ message: `Forbidden` });
  }
  const { roqUserId, user } = session;
  switch (req.method) {
    case 'GET':
      return getCompanies();
    case 'POST':
      return createCompany();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCompaniesPublic() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const findOptions = convertQueryToPrismaUtil(query, 'company');
    const countOptions = omit(findOptions, 'include');
    const [totalCount, data] = await prisma.$transaction([
      prisma.company.count(countOptions as unknown),
      prisma.company.findMany({
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
        ...findOptions,
      }),
    ]);
    return res.status(200).json({ totalCount, data });
  }

  async function getCompanies() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.company
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'company'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createCompany() {
    await companyValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.budget?.length > 0) {
      const create_budget = body.budget;
      body.budget = {
        create: create_budget,
      };
    } else {
      delete body.budget;
    }
    if (body?.financial_goal?.length > 0) {
      const create_financial_goal = body.financial_goal;
      body.financial_goal = {
        create: create_financial_goal,
      };
    } else {
      delete body.financial_goal;
    }
    if (body?.financial_policy?.length > 0) {
      const create_financial_policy = body.financial_policy;
      body.financial_policy = {
        create: create_financial_policy,
      };
    } else {
      delete body.financial_policy;
    }
    if (body?.financial_procedure?.length > 0) {
      const create_financial_procedure = body.financial_procedure;
      body.financial_procedure = {
        create: create_financial_procedure,
      };
    } else {
      delete body.financial_procedure;
    }
    if (body?.financial_program?.length > 0) {
      const create_financial_program = body.financial_program;
      body.financial_program = {
        create: create_financial_program,
      };
    } else {
      delete body.financial_program;
    }
    const data = await prisma.company.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}

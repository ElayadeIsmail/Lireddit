import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import { createUpdootLoader } from './utils/createUpdootLoader';
import { createUserLoader } from './utils/createUserLoader';

export type MyContext = {
  req: Request & { session: Express.Session };
  res: Response;
  redis: Redis;
  // * Typescript trick to get the type of
  userLoader: ReturnType<typeof createUserLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};

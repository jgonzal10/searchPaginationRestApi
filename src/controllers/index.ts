import { applications } from "../data/sampleData";
import config from "../config";
import { getPaginationParameters, parseQueryParams } from "../utils/index";
import { NextFunction, Request, Response } from "express";

export interface Application {
  email: string;
  name: string;
  lastName: string;
  creationDate: Date;
}

export const health = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  response.json({ ok: true, environment: config.env });
};
export const getApplications = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    // TODO Get application from DB
    response.status(200).json(applications);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getApplicationsBySearch = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { page, perPage } = getPaginationParameters(request);
  const searchParams = parseQueryParams(request, applications);
  try {
    // TODO Get application from DB
    response.status(200).json({
      applications: searchParams,
      page,
      perPage,
      totalPage: Math.ceil(searchParams.length / perPage),
      totalCount: searchParams.length,
    });
  } catch (error) {
    response.status(500).json(error);
  }
};

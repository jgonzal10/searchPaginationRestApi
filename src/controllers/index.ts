import config from "../config";
import { getPaginationParameters, parseQueryParams } from "../utils/index";
import { NextFunction, Request, Response } from "express";

export interface Application {
  email: string;
  name: string;
  lastName: string;
  creationDate: Date;
}
const applications: Application[] = [
  {
    email: "email1",
    name: "name",
    lastName: "lastName",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email2",
    name: "sonne",
    lastName: "shine",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email3",
    name: "rechner",
    lastName: "ram",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email4",
    name: "note",
    lastName: "book",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email5",
    name: "eve",
    lastName: "alza",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email7",
    name: "mau",
    lastName: "Lopez",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email8",
    name: "otto",
    lastName: "niel",
    creationDate: new Date("2024-04"),
  },
  {
    email: "email9",
    name: "el",
    lastName: "ultimo",
    creationDate: new Date("2024-04"),
  },
];
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

import { Request} from "express";
import config from "../config";
import { Application } from "@/controllers";

export const getPaginationParameters= (req:Request)=>{
    const page =  parseInt(req.query.page as string,10)
    const perPage = parseInt(req.query.perPage as string, 10)
    const validPage = isNaN(page) || page < 1 ? 1: page;
    const validPerPage = isNaN(perPage) || perPage < 1 ? config.defaultPageSize : perPage;
    const limit = validPerPage;
    const offset =  (validPage - 1) * validPerPage
    return {
        page: validPage,
        perPage: validPerPage,
        limit,
        offset
    }
}


export const parseQueryParams=(req:Request, applications: Application[])=>{
    const keywords: string = (req.query.keywords as string)
    const searchParams = applications.filter(application => {
        const fullText = `${application.email} ${application.name} ${application.lastName}`.toLowerCase();
        return fullText.indexOf(keywords) !== -1;
    })
    return searchParams;

}
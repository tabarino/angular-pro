import { Request, Response } from 'express';
import { BRANCHES, CART, PRODUCTS } from '../src/db-data';

export function getCart(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(CART) });
}

export function getProducts(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(PRODUCTS) });
}

export function getBranches(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(BRANCHES) });
}

export function getBranchById(req: Request, res: Response) {
    const queryParams = req.query;
    const branchId = queryParams.id;
    const branches: any = Object.values(BRANCHES);
    const branch = branches.find(searchBranch => searchBranch.id == branchId);

    res.status(200).json(branch);
}

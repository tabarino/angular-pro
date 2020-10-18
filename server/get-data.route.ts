import { Request, Response } from 'express';
import { CART, PRODUCTS } from '../src/db-data';

export function getCart(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(CART) });
}

export function getProducts(req: Request, res: Response) {
    res.status(200).json({ payload: Object.values(PRODUCTS) });
}

// export function getCourseById(req: Request, res: Response) {
//     const courseId = req.params['id'];
//     const courses: any = Object.values(COURSES);
//     const course = courses.find(course => course.id == courseId);
//
//     res.status(200).json(course);
// }

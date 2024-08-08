import { Router } from "express";
import * as empController from './../controllers/empControllers'

const router = Router();

router.post('/emps',empController.CreateEmployee);
router.get('/emps',empController.getAllEmployees);
router.get('/emps/:id',empController.getEmpById);
router.put('/emps/:id',empController.updateEmployee);
router.delete('/emps/:id',empController.deleteEmployee);

export default router;
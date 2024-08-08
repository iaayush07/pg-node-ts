import { Emp } from "../models/empModel";
import { pool } from "../config/db";

export const createEmp = async (name: string, email: string): Promise<Emp> => {
    const query = 'INSERT INTO anys (name,email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];
    const result = await pool.query(query, values);
    return result.rows[0];
}
export const getAllEmp = async (): Promise<Emp[]> => {
    const query = 'SELECT * FROM anys';
    const result = await pool.query(query);
    return result.rows;
}
export const getEmpById = async (id: number): Promise<Emp | null> => {
    const query = 'SELECT * FROM anys WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
}
export const updateEmpById = async (id: number, name : string, email: string): Promise<Emp | null> => {
    const query = 'UPDATE anys SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    const values = [name, email, id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
}
export const deleteEmpById = async (id: number): Promise<Emp | null> => {
    const query = 'DELETE FROM anys WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
}

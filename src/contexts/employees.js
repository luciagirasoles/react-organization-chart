import { createContext } from "react";

const EmployeesContext = createContext();

export const Provider = EmployeesContext.Provider;
export const Consumer = EmployeesContext.Consumer;
export default EmployeesContext;

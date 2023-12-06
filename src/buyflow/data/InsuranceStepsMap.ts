import { ProductIds } from "./ProductTypes";

export interface InsuranceStepIdentification {
    [key: string]: string[]; // Define steps involved for each insurance
  }
  
export const insuranceStepIdentification: InsuranceStepIdentification = {
    [ProductIds.devIns]: ['email', 'age'],
    [ProductIds.uxIns]: ['email', 'age', 'name'],
    // Define steps for other insurances
  };

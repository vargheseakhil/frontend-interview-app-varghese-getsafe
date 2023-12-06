import AgeStep from "../components/AgeStep";
import EmailStep from "../components/EmailStep";
import FullNameStep from "../components/FullNameStep";

export interface InsuranceStep {
    title: string;
    component: React.FC<any>; // Component instance directly
}
  
  export interface InsuranceStepsMap {
    [key: string]: InsuranceStep[];
  }
  
  export const insuranceStepDetails: InsuranceStepsMap = {
    email: [
      { title: 'Personal Email', component: EmailStep },
      // Add more steps as needed
    ],
    age: [
      { title: 'Age of the buyer', component: AgeStep },
      // Add more steps as needed
    ],
    name: [
      { title: 'Full name of the buyer ', component: FullNameStep },
      // Add more steps as needed
    ],
    // Define steps to components for other insurances
  };
  
  
export interface Patient {
  /** Unique patient identifier */
  id: string;
  /** First name of the patient */
  firstName: string;
  /** Last name of the patient */
  lastName: string;
  /** Patients phone number */
  phoneNumber: string;
  /** 
   * Submitted module's values
   * Each key represents module entry with latest value submitted.
   */
  moduleValues: {
    height: number;
    weight: number;
    steps: number;
    sleep: string;
  }
}



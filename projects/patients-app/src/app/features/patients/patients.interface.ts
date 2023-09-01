export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  moduleValues: {
    height: number;
    weight: number;
    steps: number;
    sleep: string;
  }
}



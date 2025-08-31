export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  currentSalary?: number;
  targetSalary?: number;
  experience?: number;
  location?: string;
  skills?: string[];
}

export interface NegotiationData {
  id: string;
  userId: string;
  currentRole: string;
  targetRole?: string;
  currentSalary: number;
  targetSalary: number;
  company: string;
  location: string;
  experience: number;
  skills: string[];
  status: 'draft' | 'active' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface MarketData {
  role: string;
  location: string;
  experience: number;
  averageSalary: number;
  percentile25: number;
  percentile75: number;
  percentile90: number;
  sampleSize: number;
}

export interface AIRecommendation {
  id: string;
  negotiationId: string;
  strategy: string;
  justification: string;
  confidence: number;
  expectedOutcome: {
    minIncrease: number;
    maxIncrease: number;
    probability: number;
  };
  tactics: string[];
  createdAt: Date;
}

export interface OfferUploadData {
  // Primary Fuel Supply (Base Salary)
  baseSalary: number;
  // Bonus Fuel Reserves (Annual Bonus)
  annualBonus?: number;
  bonusType?: 'percentage' | 'amount';
  // Mission Shares (Stock/Equity)
  equity?: number;
  equityType?: 'shares' | 'dollar_value';
  // Life Support Systems (Benefits)
  benefits: string[];
  // Launch Window (Start Date)
  startDate: Date;
  // Mission Assignment (Job Title)
  jobTitle: string;
  // Fleet Command (Company)
  company: string;
  // Mission Coordinates (Location)
  location: string;
  // Additional mission parameters
  workType?: 'remote' | 'hybrid' | 'onsite';
  reportingManager?: string;
  department?: string;
  notes?: string;
}

export interface FileUploadState {
  file: File | null;
  uploading: boolean;
  uploaded: boolean;
  error: string | null;
  progress: number;
}
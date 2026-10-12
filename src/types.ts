export type MinistryId = 'church_building' | 'charity' | 'youth' | 'scholarship' | 'choir';

export interface Ministry {
  id: MinistryId;
  title: string;
  subtitle: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  donorCount: number;
  iconName: string;
  image?: string;
  colorScheme: string;
  tags: string[];
}

export interface DonorRecord {
  id: string;
  donorName: string;
  amount: number;
  date: string;
  ministry: string;
  message?: string;
  isAnonymous?: boolean;
}

export interface BankAccount {
  bankName: string;
  shortName: string;
  accountNumber: string;
  accountHolder: string;
  branch: string;
  bin: string; // for VietQR standard (e.g. 970436 for VCB)
}

export interface ParishMilestone {
  step: number;
  title: string;
  targetDate: string;
  description: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  costEstimate: number;
}

export type TransactionType = 'Payment' | 'Credit';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  name: string;
  description: string;
  date: string;          // ISO 8601
  pending?: boolean;
  authorizedUser?: string;
  icon?: string;         // clase FontAwesome, e.g. "fa-apple"
  logo?: string;         // path to logo image, e.g. "apple.png"
}

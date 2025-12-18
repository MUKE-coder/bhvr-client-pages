
export interface Product {
  id: string;
  name: string;
  price: number;
  status: 'active' | 'draft' | 'archived';
  category: string;
  stock: number;
}

export interface Order {
  id: string;
  customer: string;
  total: number;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
}

export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  contributions: number;
}

export interface ChatMessage {
  id: string;
  sender: string;
  message: string;
  timestamp: string;
  isMe: boolean;
}

export interface Product {
    id?: string;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    featured: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

// STRICT REQUIREMENT: Standard Task Schema
export interface Task {
    id?: string;
    title: string;
    status: 'open' | 'in_progress' | 'done';
    priority: 'low' | 'medium' | 'high';
    dueDate: string; // ISO String
}

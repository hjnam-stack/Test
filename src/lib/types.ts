export interface Project {
  id: string;
  name: string;
  clientName: string;
  status: "planning" | "in_progress" | "review" | "completed";
  roomType: string;
  style: string;
  budget: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  progress: number;
}

export interface FurnitureItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  dimensions: { width: number; height: number; depth: number };
  color: string;
  material: string;
  image: string;
  rating: number;
  inStock: boolean;
}

export interface RoomItem {
  id: string;
  furnitureId: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
}

export interface MoodboardItem {
  id: string;
  type: "color" | "material" | "furniture" | "inspiration";
  title: string;
  image: string;
  color?: string;
  note?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalRevenue: number;
  clientSatisfaction: number;
}

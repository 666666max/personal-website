export interface Work {
  id: string;
  title: string;
  description: string;
  type: "ai-art" | "hand-draw" | "literary";
  image_url?: string;
  content?: string;
  tags: string[];
  created_at: string;
}
export interface Work {
  id: string;
  title: string;
  description: string;
  type: "visual" | "illustrated" | "literary";
  subtype?: "poetry" | "novel";
  image_url?: string;
  content?: string;
  tags: string[];
  bg_style?: "elegant" | "dreamy" | "minimal" | "warm" | "night";
  bg_image_url?: string;
  created_at: string;
}
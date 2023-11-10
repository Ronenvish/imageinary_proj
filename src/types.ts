export interface SingleProductType {
  success: boolean;
  total_photos: number;
  message: string;
  offset: number;
  limit: number;
  photos: Photo[];
}

export interface Photo {
  url: string;
  title: string;
  user: number;
  description: string;
  id: number;
}

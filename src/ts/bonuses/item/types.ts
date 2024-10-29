export interface TBadge {
  title: string;
  type?: "recommended";
}

export interface TItem {
  badges: TBadge[];
  image: string;
  id: number;
  title?: string;
}

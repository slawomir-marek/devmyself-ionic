type MoneyAlias = number;
type ImageUrlAlias = string;

export interface ProductWithAlias {
  id: string;
  title: string;
  price: MoneyAlias;
  description: string;
  category: string;
  image: ImageUrlAlias;
  rating: {
    rate: number;
    count: number;
  };
}

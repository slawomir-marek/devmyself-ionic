import { ImageUrlAlias, ImageUrlModel, MoneyAlias, MoneyModel } from '@devmyself/shared/util-common';

export interface ProductModel {
  id: string;
  title: string;
  price: MoneyModel;
  description: string;
  category: string;
  image: ImageUrlModel;
  rating: {
    rate: number;
    count: number;
  };
}

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

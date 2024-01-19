import { ImageUrlModel, MoneyModel } from '@devmyself/shared/util-common';

export interface TileItemModel {
  title: string;
  subtitle: string;
  description: string;
  price: MoneyModel;
  image: ImageUrlModel;
}

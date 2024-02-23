import { ImageUrlModel, MoneyModel } from './opaque-and-alias.types';

export interface TileItemModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: MoneyModel;
  image: ImageUrlModel;
}

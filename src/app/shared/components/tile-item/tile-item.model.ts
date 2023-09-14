import { ImageUrlModel, MoneyModel, ProductModel } from '@devmyself/inventory';

export interface TileItemModel {
  title: string;
  subtitle: string;
  description: string;
  price: MoneyModel;
  image: ImageUrlModel;
}

function tileItemModelArrayFromProductModelArray(source: ProductModel[]): TileItemModel[] {
  return source.map((item) => {
    return {
      title: item.title,
      subtitle: item.category,
      description: item.description,
      price: item.price,
      image: item.image,
    };
  });
}

export const toTileItemModelArray = {
  fromProductModelArray: tileItemModelArrayFromProductModelArray,
};

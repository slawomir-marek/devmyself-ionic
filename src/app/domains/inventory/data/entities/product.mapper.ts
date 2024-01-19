import { TileItemModel } from '@devmyself/shared/ui-common';
import { createImageUrlModel, createMoneyModel } from '@devmyself/shared/util-common';

import { ProductDto } from './product.dto';
import { ProductModel, ProductWithAlias } from './product.model';

function productWithAliasArrayFromProductDtoArray(source: ProductDto[]): ProductWithAlias[] {
  return source.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      rating: {
        rate: item.rating.rate,
        count: item.rating.count,
      },
    };
  });
}

function productModelArrayFromProductDtoArray(source: ProductDto[]): ProductModel[] {
  return source.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: createMoneyModel(item.price),
      description: item.description,
      category: item.category,
      image: createImageUrlModel(item.image),
      rating: {
        rate: item.rating.rate,
        count: item.rating.count,
      },
    };
  });
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

export const toProductWithAliasArray = {
  fromProductDtoArray: productWithAliasArrayFromProductDtoArray,
};

export const toProductModelArray = {
  fromProductDtoArray: productModelArrayFromProductDtoArray,
};

export const toTileItemModelArray = {
  fromProductModelArray: tileItemModelArrayFromProductModelArray,
};

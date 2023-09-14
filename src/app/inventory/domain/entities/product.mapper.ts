import { ProductDto } from './product.dto';
import { createImageUrlModel, createMoneyModel, ProductModel, ProductWithAlias } from './product.model';

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

export const toProductWithAliasArray = {
  fromProductDtoArray: productWithAliasArrayFromProductDtoArray,
};

export const toProductModelArray = {
  fromProductDtoArray: productModelArrayFromProductDtoArray,
};

import { ProductDto } from './product.dto';
import { ProductWithAlias } from './product-alias';
import { createImageUrlOpaque, createMoneyOpaque, ProductWithOpaque } from './product-opaque';

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

function productWithOpaqueArrayFromProductDtoArray(source: ProductDto[]): ProductWithOpaque[] {
  return source.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: createMoneyOpaque(item.price),
      description: item.description,
      category: item.category,
      image: createImageUrlOpaque(item.image),
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

export const toProductWithOpaqueArray = {
  fromProductDtoArray: productWithOpaqueArrayFromProductDtoArray,
};

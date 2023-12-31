declare const type_symbol: unique symbol;
type OpaqueType<BaseType, OpaqueName> = BaseType & {
  readonly [type_symbol]: OpaqueName;
};

export type MoneyModel = OpaqueType<number, 'MONEY_OPAQUE'>;
export type ImageUrlModel = OpaqueType<string, 'IMAGE_URL_OPAQUE'>;

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

export function createMoneyModel(value: number): MoneyModel {
  return value as MoneyModel;
}

export function createImageUrlModel(value: string): ImageUrlModel {
  if (isImageUrlOpaque(value)) {
    return value;
  }

  throw new Error('Not an image url');
}

function isImageUrlOpaque(value: string): value is ImageUrlModel {
  //eslint-disable-next-line
  const regexp = new RegExp('https?://.*.(?:png|jpg)', 'gm');
  return regexp.test(value);
}

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

declare const type_symbol: unique symbol;
type OpaqueType<BaseType, OpaqueName> = BaseType & {
  readonly [type_symbol]: OpaqueName;
};

type MoneyOpaque = OpaqueType<number, 'MONEY_OPAQUE'>;
type ImageUrlOpaque = OpaqueType<string, 'IMAGE_URL_OPAQUE'>;

export interface ProductWithOpaque {
  id: string;
  title: string;
  price: MoneyOpaque;
  description: string;
  category: string;
  image: ImageUrlOpaque;
  rating: {
    rate: number;
    count: number;
  };
}

export function createMoneyOpaque(value: number): MoneyOpaque {
  return value as MoneyOpaque;
}

export function createImageUrlOpaque(value: string): ImageUrlOpaque {
  if (isImageUrlOpaque(value)) {
    return value;
  }

  throw new Error('Not an image url');
}

function isImageUrlOpaque(value: string): value is ImageUrlOpaque {
  //eslint-disable-next-line
  const regexp = new RegExp('https?://.*.(?:png|jpg)', 'gm');
  return regexp.test(value);
}

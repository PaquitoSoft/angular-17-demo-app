export type TProduct = {
  altName: string;
  code: string;
  colorName: string;
  description: {
    assetUrl: string;
    subtitle: string;
    text: string;
    title: string;
  };
  detailImages: string[];
  gridImages: string[];
  id: string;
  name: string;
  price: number;
}

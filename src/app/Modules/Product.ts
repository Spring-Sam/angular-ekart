//想在文件之外使用這個類，要加export關鍵字，
//例如給其他文件引用到此文件類
export class Product{
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color: string[];
    price: number;
    discountPrice?: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;

}
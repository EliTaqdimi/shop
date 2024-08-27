import { ProductsType } from "../../types/Type";

function ProductItem({ image, title, price }: ProductsType) {
  return (
    <div>
      <div className="shadow border">
        <img className="w-full" src={image} alt="" />

        <div className="flex justify-between p-2">
          <p className="font-bold line-clamp-1">{title} </p>
          <p className="font-bold">{price}$</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

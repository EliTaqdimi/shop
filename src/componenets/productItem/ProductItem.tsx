import { ProductsType } from "../../types/Type";

function ProductItem({ image, title, price }: ProductsType) {
  return (
    <div className="w-full p-2">
      <div className="shadow border h-full flex flex-col justify-between items-center min-h-[400px] pt-5">
        <img className="md:w-1/2 h-58 object-cover transition-transform duration-300 hover:scale-105" src={image} alt={title} />

        <div className="flex flex-col items-center p-4">
          <p className="font-bold text-center line-clamp-1">{title}</p>
          <p className="font-bold text-lg mt-2">{price}:$</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

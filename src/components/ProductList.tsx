
import type { Product } from "../types"

type ProductList = {
    item: Product
}

export const ProductList = ({item} : ProductList) => {
    return(
        <>
            <button className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-sm text-gray-500">${item.price}</span>
            </button>
        </>
    )
}
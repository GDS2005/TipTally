import type { OrderProduct, Product } from "../types"
import { formatCurrency } from "../helpers"

type OrderContentsProps = {
    order: OrderProduct[]
    removeItem: (id: Product['id']) => void
}

export const OrderContents = ({order, removeItem} : OrderContentsProps) => {
    return(
        <>
            {order.map( item => (
                <li key={item.id} className="flex justify-between items-center bg-gray-100 rounded-lg p-3 shadow-sm">
                    <div>
                        <div className="font-medium text-gray-800">{item.name}</div>
                        <div className="text-sm text-gray-500">Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)} </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="text-sm text-gray-700">{formatCurrency(item.price)}</div>
                        <button className="text-red-500 hover:text-red-700 transition" onClick={() => removeItem(item.id)}>
                        ✕
                        </button>
                    </div>
                </li>
            ))
            }
        </>
    )  
}
import { useCallback } from "react"
import type { OrderProduct } from "../types"

type OrderTotalProps = {
    order: OrderProduct[]
    tip: number
    cleanOrder: () => void
}

export const OrderTotal = ({order, tip, cleanOrder} : OrderTotalProps) => {

    const subTotal = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price),0), [order])
    {/* const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price),0), [order]) */}
    const tipAmount = useCallback(() => subTotal() + (subTotal() * tip), [tip, order])

    return (
        <>
            <div className="mt-6">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-[#235789]">${subTotal()}</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total con propina</span>
                    <span className="text-lg font-bold text-green-600">${tipAmount()}</span>
                </div>
            </div>

            <div className="flex space-x-4 mt-4">
                <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition" onClick={cleanOrder}>
                    Vaciar
                </button>
                <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition disabled:opacity-10">
                    Pagar
                </button>
            </div>
        </>
    )
}
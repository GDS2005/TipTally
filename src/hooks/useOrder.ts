import { useState } from "react";
import type { OrderProduct, Product } from "../types";

export default function useOrder() {
    /* Generic establece un tipo de valor distinto al establecido en el state useState<>() */
    const [order, setOrder] = useState<OrderProduct[]>([])
    const [tip, setTip] = useState(0)

    const addProduct = (item : Product) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist){
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        }else{
            const newItem : OrderProduct = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: Product['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const cleanOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addProduct,
        removeItem,
        cleanOrder
    }
}
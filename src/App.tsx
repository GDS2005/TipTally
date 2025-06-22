import { ProductList } from "./components/ProductList"
import { OrderContents } from "./components/OrderContents"
import { OrderTotal } from "./components/OrderTotal"
import { TipPercentageForm } from "./components/TipPercentageForm"
import { products } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addProduct, removeItem, cleanOrder } = useOrder()

  return (
    <>
      <header className="bg-[#235789] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          TipTally: Calculadora de propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-5 grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-4">

      {/* Menu */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#235789] mb-4">Menú</h2>
        <div className="space-y-4">
            {products.map(item => (
              <ProductList
                key={item.id}
                item={item}
                addProduct={addProduct}
              />
            ))}
          </div>
        </div>

        {/* Consumo */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-full">
          <h2 className="text-2xl font-bold text-[#235789] mb-4">Consumo</h2>
          
          {order.length? (
            <div className="flex-1 overflow-y-auto">
              <ul className="space-y-3">
                <OrderContents 
                  order={order}
                  removeItem={removeItem}
                />
              </ul>

              <TipPercentageForm
                setTip={setTip}
              />

              {/* Total */}
              <OrderTotal
                order={order}
                tip={tip}
                cleanOrder={cleanOrder}
              />
            </div>
          ) : ( <p>No hay consumos.</p> )}

        </div>
      </main>
    </>
  )
}

export default App

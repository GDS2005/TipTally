import { ProductList } from "./components/ProductList"
import { products } from "./data/db"

function App() {

  return (
    <>
      <header className="bg-[#235789] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Propinas
        </h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Contacto</a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 gap-10 px-4">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-[#235789] mb-4">Menú</h2>
        <div className="space-y-4">
            {products.map(item => (
              <ProductList
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* Consumo */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#235789] mb-4">Consumo</h2>
          <p className="text-gray-600">
            Aquí se reflejará el consumo actual del cliente.
          </p>
        </div>
      </main>
    </>
  )
}

export default App

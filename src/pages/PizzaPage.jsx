import ProductCard from "../components/card/ProductCard"
import products from "../data/Products"

const PizzaPage = () => {
    return (
        <div className="max-w-[1330px] px-5 mx-auto py-10">
            <div className="flex flex-wrap justify-evenly md:justify-between gap-1">
                {products
                    .filter(product => product.category === "Пицца")
                    .map(filteredProduct => (
                        <ProductCard key={filteredProduct.id} {...filteredProduct} />
                    ))
                }
            </div>
        </div>
    )
}

export default PizzaPage
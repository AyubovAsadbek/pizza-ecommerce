import PropTypes from 'prop-types';
import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"

const ControlQuantityBtns = ({ id, quantity }) => {
    const { increaseQuantity, decreaseQuantity } = useContext(ProductsContext)
    return (
        <div>
            <div className="join ">
                <button onClick={() => decreaseQuantity(id)} className="btn-sm sm:btn join-item sm:text-[#FF7010] sm:font-bold">-</button>
                <button className="btn-sm sm:btn join-item sm:text-[#FF7010] text-[16px] sm:font-bold">{quantity}</button>
                <button onClick={() => increaseQuantity(id)} className="btn-sm sm:btn join-item sm:text-[#FF7010] sm:font-bold">+</button>
            </div>
        </div>
    )
}

ControlQuantityBtns.propTypes = {
    id: PropTypes.string,
    quantity: PropTypes.string
}

export default ControlQuantityBtns
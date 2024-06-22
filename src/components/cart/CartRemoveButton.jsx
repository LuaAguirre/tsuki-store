
import { useCartStore } from "../../stores/useCartStore"

export default function CartRemoveButton() {
    const clearCart = useCartStore(state => state.clearCart)

  return (
    <button onClick={() => clearCart()} class='hover:scale-110 border rounded-sm p-1 mt-2'>
      clear
    </button>
  )
}

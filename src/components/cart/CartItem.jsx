export default function CartItem ({ title, images, price, quantity, setCart }) {
    return (
        <li class='flex flex-col gap-2
            rounded border p-2'>
        <img
          src={images}
          alt={title}
          class='w-full rounded block object-cover'
        />
        <div class='flex justify-center text-sm'>
          <strong class='text-sm font-semibold'>{title}</strong> - ${price}
        </div>

        <footer class='flex justify-center items-center gap-2'>
          <small> Qty: {quantity} </small>
          <button onClick={setCart} class='p-2 hover:scale-110'>+</button>
        </footer>
      </li>
    )
}
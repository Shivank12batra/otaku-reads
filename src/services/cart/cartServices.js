import { ACTION_TYPE } from "../../utils";

export const addToCart = (dataDispatch, product, token, toast) => {
    try {
        const data = fetch('/api/user/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
              },
              body: JSON.stringify({ product })
        })
        toast.success('Added In Cart!')

        dataDispatch({
            type: ACTION_TYPE.ADD_TO_CART,
            payload: data.cart
        })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!')
    }
}

export const removeFromCart = (id, dataDispatch, token, toast) => {
    try {
        const data = fetch(`/api/user/cart/${id}`, {
            method: 'DELETE',
            headers: {
              'authorization': token
            }
          })
          toast.error('Removed From Cart!')
          dataDispatch({
            type: ACTION_TYPE.REMOVE_FROM_CART,
            payload: data.cart
          })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!')
    }
}

export const clearCart = (dataDispatch, cart, token) => {
    try {
        for (const item of cart) {
            const data = fetch(`/api/user/cart/${item._id}`, {
                method: 'DELETE',
                headers: {
                  'authorization': token
                }
              })
              dataDispatch({
                action: ACTION_TYPE.CLEAR_CART
              })
        }
    } catch (error) {
        console.log(error)
    }
}

export const increaseQtyFromCart = (id, dataDispatch, token, actionType) => {
    try {
        const data = fetch(`/api/user/cart/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                action: {
                    type: actionType === 'INC_QTY' ? "increment" : "decrement"
                }
            })
          })

          dataDispatch({
            type: ACTION_TYPE.UPDATE_QTY_IN_CART,
            payload: data.cart
          })

    } catch (error) {
        console.log(error)
    }
}
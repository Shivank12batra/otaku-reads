import { ACTION_TYPE } from "../../utils";

export const addToCart = async(dataDispatch, product, token, toast) => {
    try {
        const res = await fetch('/api/user/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
              },
              body: JSON.stringify({ product })
        })
        const data = await res.json()
        toast.success('Added In Cart!', {
            className: 'toast-success',
            progressClassName: 'toast-progress',
        })

        dataDispatch({
            type: ACTION_TYPE.ADD_TO_CART,
            payload: data.cart
        })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!', {
            className: 'toast-error',
            progressClassName: 'toast-progress',
        })
    }
}

export const removeFromCart = async(id, dataDispatch, token, toast) => {
    try {
        const res = await fetch(`/api/user/cart/${id}`, {
            method: 'DELETE',
            headers: {
              'authorization': token
            }
          })
          const data = await res.json()
          toast.error('Removed From Cart!')
          dataDispatch({
            type: ACTION_TYPE.REMOVE_FROM_CART,
            payload: data.cart
          })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!', {
            className: 'toast-error',
            progressClassName: 'toast-progress',
        })
    }
}

export const clearCart = async (dataDispatch, cart, token) => {
    try {
        for (const item of cart) {
            await fetch(`/api/user/cart/${item._id}`, {
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

export const increaseQtyFromCart = async(id, dataDispatch, token, actionType) => {
    try {
        const res = await fetch(`/api/user/cart/${id}`, {
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
          const data = await res.json()

          dataDispatch({
            type: ACTION_TYPE.UPDATE_QTY_IN_CART,
            payload: data.cart
          })

    } catch (error) {
        console.log(error)
    }
}
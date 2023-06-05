import { ACTION_TYPE } from "../../utils";

export const addToWishlist = (dataDispatch, product, token, toast) => {
    try {
        const data = fetch('/api/user/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
              },
              body: JSON.stringify({ product })
        })
        toast.success('Added In Wishlist!')

        dataDispatch({
            type: ACTION_TYPE.ADD_TO_WISHLIST,
            payload: data.wishlist
        })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!')
    }
}

export const removeFromWishlist = (id, dataDispatch, token, toast) => {
    try {
        const data = fetch(`/api/user/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
              'authorization': token
            }
          })
          toast.error('Removed From Wishlist!')
          dataDispatch({
            type: ACTION_TYPE.REMOVE_FROM_WISHLIST,
            payload: data.wishlist
          })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!')
    }
}
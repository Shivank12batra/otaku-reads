import { ACTION_TYPE } from "../../utils";

export const addToWishlist = async(dataDispatch, product, token, toast) => {
    try {
        const res = await fetch('/api/user/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token,
              },
              body: JSON.stringify({ product })
        })
        const data = await res.json()
        toast.success('Added In Wishlist!', {
            className: 'toast-success',
            progressClassName: 'toast-progress',
        })

        dataDispatch({
            type: ACTION_TYPE.ADD_TO_WISHLIST,
            payload: data.wishlist
        })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!', {
            className: 'toast-error',
            progressClassName: 'toast-progress',
        })
    }
}

export const removeFromWishlist = async(id, dataDispatch, token, toast) => {
    console.log(id)
    try {
        const res = await fetch(`/api/user/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
              'authorization': token
            }
          })
          const data = await res.json()
          console.log(data.wishlist)
          toast.error('Removed From Wishlist!', {
            className: 'toast-error',
              progressClassName: 'toast-progress',
          })
          dataDispatch({
            type: ACTION_TYPE.REMOVE_FROM_WISHLIST,
            payload: data.wishlist
          })
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong!', {
            className: 'toast-error',
            progressClassName: 'toast-progress',
        })
    }
}
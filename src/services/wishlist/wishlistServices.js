import { ACTION_TYPE } from "../../utils";
import axios from 'axios';

export const addToWishlist = async(dataDispatch, product, token, toast) => {
    try {
        const {
            data
          } = await axios.post(
            "/api/user/wishlist",
            {
              product,
            },
            {
              headers: {
                authorization: token,
              },
            }
          );
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
    try {
        const {
          data
        } = await axios.delete(`api/user/wishlist/${id}`, {
          headers: {
            authorization: token,
          },
        });
        console.log(data.wishlist)
        toast.error('Removed from wishlist!', {
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
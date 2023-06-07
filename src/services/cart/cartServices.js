import { ACTION_TYPE } from "../../utils";
import axios from 'axios';

export const addToCart = async(dataDispatch, product, token, toast, setDisableBtn) => {
    setDisableBtn(() => true)
    try {
        const {
          data
        } = await axios.post(
          "/api/user/cart",
          {
            product,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
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
    } finally {
        setDisableBtn(() => false)
    }
}

export const removeFromCart = async(id, dataDispatch, token, toast) => {
    console.log('remove from cart')
    try {
        const {
          data
        } = await axios.delete(`api/user/cart/${id}`, {
          headers: {
            authorization: token,
          },
        });
        toast.error('Removed from cart!', {
            className: 'toast-error',
            progressClassName: 'toast-progress',
        })
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
            await axios.delete(`api/user/cart/${item._id}`, {
              headers: {
                authorization: token,
              },
            });
          }
        dataDispatch({
            type: ACTION_TYPE.CLEAR_CART
          })
    } catch (error) {
        console.log(error)
    }
}

export const increaseQtyFromCart = async(id, dataDispatch, token, actionType) => {
    try {
        const {
            data
          } = await axios.post(
            `api/user/cart/${id}`,
            {
              action: {
                type: actionType === "INC_QTY" ? "increment" : "decrement",
              },
            },
            {
              headers: {
                authorization: token,
              },
            }
          );
          console.log(data)
      
          dataDispatch({
            type: ACTION_TYPE.UPDATE_QTY_IN_CART,
            payload: data.cart
          })

    } catch (error) {
        console.log(error)
    }
}
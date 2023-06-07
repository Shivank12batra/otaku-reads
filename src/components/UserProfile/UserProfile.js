import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import { useData } from '../../context/data/DataContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserProfile.css'
import { ACTION_TYPE } from '../../utils';
import {v4 as uuid } from "uuid";

const UserProfile = () => {
  const navigate = useNavigate()
  const {user, setUser, setToken} = useAuth() 
  const {dataDispatch, address} = useData()
  const [tab, selectTab] = useState('Profile')
  const [addressForm, showAddressForm] = useState(false)
  const [addressValues, setAddressValues] = useState({
    id: uuid(),
    name: "",
    block: "",
    region: "",
    state: "",
    phoneNumber: "",
  })

  const changeTab = (newTab) => {
    selectTab(newTab)
  }

  const logoutHandler = () => {
    setUser({})
    setToken('')
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dataDispatch({
      type: ACTION_TYPE.LOG_OUT
    })
    navigate('/')
  }

  const editAddressHandler = (id, name, block, region, state, phoneNumber) => {
    showAddressForm(true)
    setAddressValues({
      id,
      name,
      block,
      region,
      state,
      phoneNumber
    })
  }

  const removeAddressHandler = (location) => {
    dataDispatch({
      type: ACTION_TYPE.REMOVE_ADDRESS,
      payload: location
    })
    toast.error('Address removed!', {
            className: 'toast-error',
            progressClassName: 'toast-progress',
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const addressPresent = address.find(({id}) => addressValues.id === id)
    console.log(addressPresent)
    if (addressPresent) {
      dataDispatch({
        type: ACTION_TYPE.UPDATE_ADDRESS,
        payload: addressValues
      })
      toast.success('Address Updated!', {
        className: 'toast-success',
        progressClassName: 'toast-progress',
      })
    } else {
      dataDispatch({
        type: ACTION_TYPE.ADD_ADDRESS,
        payload: addressValues
      })
      toast.success('Address Added!', {
        className: 'toast-success',
        progressClassName: 'toast-progress',
      })
    }
    setAddressValues({
      id: uuid(),
      name: "",
      block: "",
      region: "",
      state: "",
      phoneNumber: "",
    })
    showAddressForm(false)
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAddressValues((prevAddressValues) => ({
      ...prevAddressValues,
      [name]: value,
    }));
  }

  return (
    <div className='profile-container'>
      <ToastContainer/>
      <h2 className='profile-header'>Your Account</h2>
      <div className='main-container'>
        <div className='profile-btns'>
          <button className={`${tab === 'Profile' ? 'selected' : ''}`}
           onClick={() => changeTab('Profile')}>
            Profile
            </button>
          <button className={`${tab === 'Address' ? 'selected' : ''}`}
           onClick={() => changeTab('Address')}>
            Address
            </button>
          </div>
          <div className="profile-divider"></div>
          {tab === 'Profile' ? 
          <div className='profile-details'>
            <h3>Profile Details</h3>
            <div className="profile-line"></div>
            <div className='user-details'>
              <div className='user-info'>
              <span className='attribute'>Email</span>
              <span className='value'>{user.email}</span>
              </div>
              <div className='user-info'>
              <span className='attribute'>Name</span>
              <span className='value'>{user.firstName} {user.lastName}</span>
              </div>
            </div>
             <h3>Account Settings</h3>
             <div className="profile-line"></div>
             <button className='logout-btn'
             onClick={logoutHandler}>
              Log Out
              </button>
          </div>
        : tab === 'Address' && !addressForm ? 
        <div className='address-detail'>
          <h3 className='address-header'>My Addresses</h3>
          <div className="profile-line"></div>
          <ul className='addresses-container'>
            {address.map((location) => {
              const {id, name, block, region, state, phoneNumber} = location
              return (
                <li key={id} className='address-container'>
                  <h2>{name}</h2>
                  <p>Block: {block},</p>
                  <p>Region: {region},</p>
                  <p>State: {state},</p>
                  <p>Phone no: {phoneNumber}</p>
                  <button className='edit-address-btn' onClick={() => editAddressHandler(id, name,block, region, state, phoneNumber)}>
                    Edit
                  </button>
                  <button className='remove-address-btn' onClick={() => removeAddressHandler(location)}>
                    Remove
                  </button>
                </li>
              )
            })}
          </ul>
          <button className='new-address-btn'
             onClick={() => showAddressForm(true)}>
              + Add New Address
            </button>
        </div> 
        : 
        <div className='address-form'>
          <h2>Add New Address</h2>
          <form onSubmit={submitHandler}>
          <input type='text'
            name='name'
             value={addressValues.name}
              required 
              placeholder='enter name'
              onChange={(e) => inputHandler(e)}
              />
            <input type='text'
            name='block'
             value={addressValues.block}
              required
              placeholder='enter block'
              onChange={(e) => inputHandler(e)}/>
            <input type='text'
            name='region'
             value={addressValues.region}
              required
               placeholder='enter region'
               onChange={(e) => inputHandler(e)}/>
            <input type='text'
            name='state'
             value={addressValues.state}
              required
               placeholder='enter state'
               onChange={(e) => inputHandler(e)}/>
            <input type='tel'
             name='phoneNumber'
             value={addressValues.phoneNumber}
              required 
              placeholder='enter phone number'
              onChange={(e) => inputHandler(e)}/>
            <button className='cancel-btn'
            onClick={() => {
              showAddressForm(false)
              setAddressValues({
                id: uuid(),
                name: "",
                block: "",
                region: "",
                state: "",
                phoneNumber: "",
              })
            }}>
                Cancel
            </button>
            <button className='save-address-btn'
            type='submit'>
                Save
              </button>
          </form>
        </div>}
      </div>
    </div>
  )
}

export default UserProfile
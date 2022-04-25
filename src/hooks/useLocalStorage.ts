import { useContext } from 'react'
import LocalStorageContext, { LocalStorageContextProps } from '../context/LocalStorage'

export default (): LocalStorageContextProps => useContext(LocalStorageContext)

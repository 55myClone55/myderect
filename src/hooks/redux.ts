import { AppDispatch, RoorState } from "../store/store";
import {useDispatch, useSelector,TypedUseSelectorHook} from 'react-redux'


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RoorState> = useSelector
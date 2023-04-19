import React,{useContext, useReducer, useEffect, Children} from "react";

import DemoReducer_27 from "./DemoReducer_27";

import { supabase } from "../db/clientSupabase";


const initialState = {
    pName: '陳信安',
    pId: '210417027',
    items: [],
    items2: []
}


const MidContext_27 = React.createContext();

const DemoProvider_27 = ({children}) => {
    const [state, dispatch] = useReducer(DemoReducer_27, initialState);

    const  fetchBlogDataFromSupabase = async() => {
          try{
            let { data, error } = await supabase.from('mid_27').select('*')
    
            console.log('data', data);
            dispatch({type:'GET_BLOGS_SUPABASE_SUCCESS', payload:data});
            // console.log('result', result);
            // setData(data);
          } catch (error){
            console.log(error);
          }
        }
    
        useEffect(()=> {
          fetchBlogDataFromSupabase();
        }, []);
    
    return (
        <MidContext_27.Provider value={{...state}}>
            {children}
        </MidContext_27.Provider>
    )


}

const useMidContext_27 = () => {
    return useContext(MidContext_27);
}

export { DemoProvider_27, useMidContext_27}
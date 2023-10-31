import { createSlice ,PayloadAction} from "@reduxjs/toolkit";


interface CartType{
    id:string,
    title:string,
    price:string,
    imgUrl:string
}
const initialState:any={
    product:[]
}

const productReducer=createSlice({
    name:'product',
    initialState,
    reducers:{
        cartdata:(state,action:PayloadAction<any>)=>{
          state.product=action.payload
        }
    }
})

export const {cartdata}=productReducer.actions;
export default productReducer.reducer
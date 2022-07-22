import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    coin: 0,
    count:"demo"
    
  },
  reducers: {
    // increment: (state) => {
    //   state.cash += 1
    // },
    // decrement: (state) => {
    //   state.cash -= 1
    // },
    incrementByAmount: (state, action) => {
        state.coin =parseInt(action.payload)
        console.log(action.payload)

      },
    decrementByAmount:(state, action)=>{
      state.coin -= parseInt(action.payload)
      console.log(action.payload)
    }

  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,decrementByAmount } = counterSlice.actions

export default counterSlice.reducer
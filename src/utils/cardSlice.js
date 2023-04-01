import { createSlice } from "@reduxjs/toolkit";
const cardslice = createSlice(
    {
        name: "card",
        initialState: {
            item: [],
        },
        reducers: {
            addItem: (state, action) => {
                state.item.push(action.payload)
            },
            removeItem: (action) => {
                state.item.pop()
            }
            ,
            clearCard: (state) => {
                state.item = []
            },
        }
    }
)
export const { addItem, removeItem, clearCard } = cardslice.actions
export default cardslice.reducer
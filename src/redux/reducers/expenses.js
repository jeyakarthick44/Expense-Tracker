import { ADD_EXPENSE, DELETE_EXPENSE} from "../action-types/expenses"

const initialState = {
    expenseList:[],
}

export const expenseReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_EXPENSE:{
            return {
                ...state,
                expenseList:[...state.expenseList, action.data],
            }
        }
        case DELETE_EXPENSE:{
            return {
                
            }
        }
        default:
            return state;

    }
};
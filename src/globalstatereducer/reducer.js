import { v4 as uuidv4 } from 'uuid';
const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
           const newbal=state.bal-action.payload.amount;
           const newspend=state.spend+parseInt(action.payload.amount);
           const newexpense={id:uuidv4(),
            amount:action.payload.amount,
            description:action.payload.description}
        
        return {...state,bal:newbal,spend:newspend,
        expenses:[...state.expenses,newexpense]
        }

        case "DELETE_EXPENSE":
         return{...state,
            spend:state.spend-Number(state.expenses.find((el)=>el.id===action.payload).amount),
            bal:state.bal+Number(state.expenses.find((el)=>el.id===action.payload).amount),
         
            expenses:state.expenses.filter((ex)=>ex.id!==action.payload)} 
       default:
        return state;
    };
    
    
}

export default reducer;
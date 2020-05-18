import produce from "immer"

const goalReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_GOALS': {
      return {loading: true}
    }
    case 'GOALS_RECEIVED': {
      const { payload } = action
      return { goalList: payload, loading: false }
    }
    case 'DELETE_GOAL': {
      const { goalId } = action.payload
      return state.goalList.reduce( goal => goal.id === goalId)
    }
    case 'CHECK_GOAL': {
      const { isCompleted, goal } = action.payload
      return produce(state, draft => {
        draft.goalList.find(element => element.id===goal.id).completed = isCompleted
      })
    }
    case 'ADD_GOAL': {
      const { goalText } = action.payload
      return state
    }
    case 'EDIT_GOAL': {
      const { goalText, goal } = action.payload
      return produce(state, draft => {
        draft.goalList.find(element => element.id===goal.id).text = goalText
      })
    }
    default: {
      return state
    }
  }
}

export default goalReducer

export type InitialState = {
    currentQuestionIndex: number,
    selectedOption: string,
    isSubmit: boolean,
    isCorrect: boolean,
    score: number,
};

export type ActionType =
    | {type: 'SELECT_OPTION', payload: string}
    | {type: 'SUBMIT_ANSWER', payload: boolean }
    | {type: 'NEXT_QUESTION'}
    | {type: 'RESET', payload: InitialState}


export const quizReducer = (state:InitialState, action:ActionType) => {
    let updatedScore;
    switch (action.type){
        case 'SELECT_OPTION':
            return {...state,
                selectedOption:
                action.payload,
                isSubmit: false
            };
        case 'SUBMIT_ANSWER':
            updatedScore = action.payload ? state.score + 1 : state.score;
            return {...state,
                isSubmit: true,
                isCorrect: action.payload,
                score: updatedScore
            };
        case 'NEXT_QUESTION':
            return { ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                selectedOption: '',
                isSubmit: false,
                isCorrect: false,
                score: state.score
            };
        case 'RESET':
            return action.payload;
        default:
            return state;
    }
}
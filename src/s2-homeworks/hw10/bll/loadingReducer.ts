
type LoadingActionType = ReturnType<typeof loadingAC>;

type LoadingStateType = {
    isLoading: boolean;
};

const initialState: LoadingStateType = {
    isLoading: false,
};

export const loadingReducer = (
    state: LoadingStateType = initialState,
    action: LoadingActionType
): LoadingStateType => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export const loadingAC = (isLoading: boolean) => ({
    type: 'SET_LOADING' as const,
    payload: isLoading,
});

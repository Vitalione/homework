export interface ThemeState {
    themeId: number;
}

const initState: ThemeState = {
    themeId: 1,
};

export const themeReducer = (state = initState, action: { type: string; id: number }): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id,
            };

        default:
            return state;
    }
};

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id });

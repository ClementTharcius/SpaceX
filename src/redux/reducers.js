const initialState = {
    dashboardLinkClicked: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DASHBOARD_LINK_CLICKED':
            return {
                ...state,
                dashboardLinkClicked: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
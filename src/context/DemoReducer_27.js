const DemoReducer_27 = (state, action) => {
    if (action.type === 'GET_BLOGS_SUPABASE_SUCCESS') {
        return{ ...state, blogs:action.payload , blogs2:action.payload}
    }
}

export default DemoReducer_27;

// these are ACTION CREATORS - FUNCTIONS that create ACTIONS (objects);

export const setTextFilter = (text='') =>({
    type:'SET_TEXT_FILTER',
    text
});

export const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
})
export const sortByDate = () =>({
    type:'SORT_BY_DATE'
})

export const setStartDate = (startDate=undefined) => ({  // no need to write the =undefined but doesnt matters
    type:'SET_START_DATE',
    startDate
});
export const setEndDate = (endDate=undefined) => ({
    type:'SET_END_DATE',
    endDate
});
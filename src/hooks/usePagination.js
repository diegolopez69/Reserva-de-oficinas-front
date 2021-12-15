import { useReducer } from 'react';

export const usePagination = (items = [], itemsPerPage = 5) => {
  const getInitialValue = (page) => {
    return parseInt(page * itemsPerPage - (itemsPerPage), 10)
  };
  
  const getMaxValue = (page) => {
    return parseInt(itemsPerPage, 10) * page;
  };
  
  const getNewArray = (initial, max) => {
    return [...items.slice(initial, max)];
  };

  const countNumberOfPages = () => {
    return parseInt(Math.ceil(items.length / itemsPerPage), 10);
  };

  const reducer = (state, {page}) => {
    return {
      data: getNewArray(
        getInitialValue(page),
        getMaxValue(page),
      ),
      count: countNumberOfPages(),
      page,
    };
  };

  const [state, dispatch] = useReducer(reducer, {
    data: getNewArray(
      getInitialValue(1),
      getMaxValue(1),
    ), 
    count: countNumberOfPages(),
    page: 1,
  });

  const handleChange = (page) => dispatch({page});
  return {...state, handleChange};
};

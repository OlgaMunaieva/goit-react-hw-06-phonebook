// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';
// import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  // console.log(filter);

  const handleFilterChange = e => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  // const handleChange = event => {
  //   onChange(event.target.value);
  // };
  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleFilterChange} type="search" name="filter" id="" />
    </>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;

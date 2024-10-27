import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilters } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  return (
    <div className={css.container}>
      <label className={css.label}>
        <p>Search contacts by name</p>
        <input
          type='text'
          value={filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;

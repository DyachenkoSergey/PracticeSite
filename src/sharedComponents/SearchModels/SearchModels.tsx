import { ChangeEvent, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { InputBlock } from "sharedComponents/InputBlock";
import { setSearchQueryParam } from "store/slices/models";
import { useDebouncedCallback } from "use-debounce/lib";

export const SearchModels: FunctionComponent = () => {
  const dispatch = useDispatch();
  const debounced = useDebouncedCallback((searchQueryParams) => {
    dispatch(setSearchQueryParam(searchQueryParams));
  }, 1000);

  const changeSearchQueryParams = (e: ChangeEvent<HTMLInputElement>): void => {
    return debounced(e.target.value);
  };

  return (
    <InputBlock
      type="text"
      placeholder="Search for models"
      onChange={changeSearchQueryParams}
      className="form-control"
      maxLength={11}
    />
  );
};

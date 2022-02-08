import {
  IAmountOfElements,
  IValueProps,
  EnumAge,
  EnumBodyType,
  EnumEthnicity,
  EnumHair,
} from "interfaces/model";
import { getNumberOfTabModels } from "model/api/models";
import { FunctionComponent, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SearchModels } from "sharedComponents/SearchModels";
import { searchModelsSelector } from "store/selectors/models";
import { setSearchQueryParam } from "store/slices/models";
import { FiltrationLinks } from "./FiltrationListItem";

export const Filtration: FunctionComponent = () => {
  const dispatch = useDispatch();
  const queryParam = useSelector(searchModelsSelector);
  const searchQueryParam = queryParam.searchQueryParam;
  const [amountOfElements, setAmountOfElements] = useState<IAmountOfElements>();

  const bodyTypeArray = Object.entries(EnumBodyType);
  const ethnicityArray = Object.entries(EnumEthnicity);
  const hairArray = Object.entries(EnumHair);
  const ageArray = Object.entries(EnumAge);

  useEffect(() => {
    getNumberOfTabModels().then((data) => setAmountOfElements(data));
  }, []);

  const setQuery = ({ value }: IValueProps) => {
    return () => {
      dispatch(setSearchQueryParam({ searchQueryParam, value }));
    };
  };

  const renderAge = () => {
    const age = ageArray.map((age) => {
      return (
        <FiltrationLinks
          to={`/find/age/${age[1]}`}
          key={age[0]}
          label={age[0]}
          onClick={setQuery({ value: { age: age[1] } })}
          numberElements={amountOfElements?.age[age[1]]}
        />
      );
    });
    return age;
  };

  const renderBodyType = () => {
    const type = bodyTypeArray.map((type) => {
      return (
        <FiltrationLinks
          to={`/find/bodyType/${type[1]}`}
          key={type[0]}
          label={type[0]}
          onClick={setQuery({ value: { bodyType: type[1] } })}
          numberElements={amountOfElements?.bodyType[type[1]]}
        />
      );
    });
    return type;
  };

  const renderHair = () => {
    const hair = hairArray.map((hair) => {
      return (
        <FiltrationLinks
          to={`/find/hair/${hair[1]}`}
          key={hair[0]}
          label={hair[0]}
          onClick={setQuery({ value: { hair: hair[1] } })}
          numberElements={amountOfElements?.hair[hair[1]]}
        />
      );
    });
    return hair;
  };

  const renderEthnicity = () => {
    const ethnicity = ethnicityArray.map((ethnicity) => {
      return (
        <FiltrationLinks
          to={`/find/ethnicity/${ethnicity[1]}`}
          key={ethnicity[0]}
          label={ethnicity[0]}
          onClick={setQuery({ value: { ethnicity: ethnicity[1] } })}
          numberElements={amountOfElements?.ethnicity[ethnicity[1]]}
        />
      );
    });
    return ethnicity;
  };

  return (
    <div className="p-2 rounded bg-secondary">
      <div className="pt-2 pb-2">
        <SearchModels />
      </div>
      <ListGroup style={{ textAlign: "left" }}>
        <FiltrationLinks
          to={`/find/all`}
          onClick={setQuery({ value: {} })}
          label={"All models"}
          numberElements={amountOfElements?.all}
        />
        <h5 className="text-white">Age</h5>
        {renderAge()}
        <hr />
        <h5 className="text-white">Body type</h5>
        {renderBodyType()}
        <hr />
        <h5 className="text-white">Hair</h5>
        {renderHair()}
        <hr />
        <h5 className="text-white">Ethnicity</h5>
        {renderEthnicity()}
      </ListGroup>
    </div>
  );
};

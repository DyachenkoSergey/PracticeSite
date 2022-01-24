import { useFormik } from "formik";
import { editModelProfile, getModelProfile } from "model/api/models";
// import countries from "i18n-iso-countries";
import { FunctionComponent, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { userIdSelector } from "store/selectors/auth";
import { languagesList } from "constants/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import {
  ageOption,
  bodyTypeOptions,
  countryOption,
  ethnicityOptions,
  eyesOptions,
  genderOptions,
  hairOptions,
  sexualPreferenceOptions,
} from "./options";

// countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

interface IModelEditProfile {
  aboutMe?: string;
  age?: string;
  country?: string;
  languages?: any;
  birthday?: string;
  gender?: string;
  sexualPreference?: string;
  ethnicity?: string;
  eyes?: string;
  hair?: string;
  bodyType?: string;
}

export const EditModelInfo: FunctionComponent = () => {
  const modelId = useSelector(userIdSelector);
  const navigate = useNavigate();

  // const countryObj = countries.getNames("en", { select: "official" });
  // const countryArr = Object.entries(countryObj).map(([key, value]) => {
  //   return {
  //     label: value,
  //     value: key,
  //   };
  // });

  const [selected, setSelected] = useState([]);
  const [modelInfo, setModelInfo] = useState<IModelEditProfile>();

  useEffect(() => {
    getModelProfile(modelId).then((data) => {
      if (data) {
        setSelected(data[0].languages);
        setModelInfo(data[0]);
      }
    });
  }, [modelId]);

  // const countryOption = countryArr.map(({ label, value }) => (
  //   <option key={value} value={label}>
  //     {label}
  //   </option>
  // ));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      aboutMe: modelInfo?.aboutMe,
      age: modelInfo?.age,
      country: modelInfo?.country,
      languages: modelInfo?.languages || Option,
      birthday: modelInfo?.birthday,
      gender: modelInfo?.gender,
      sexualPreference: modelInfo?.sexualPreference,
      ethnicity: modelInfo?.ethnicity,
      eyes: modelInfo?.eyes,
      hair: modelInfo?.hair,
      bodyType: modelInfo?.bodyType,
    },
    // validationSchema: editPageFormValidation,
    onSubmit: (values: IModelEditProfile) => {
      values.languages = selected;
      editModelProfile({ modelId, values }).then((response) => {
        toast(response.message);
        navigate(`/modelProfile/${modelId}`);
      });
    },
  });

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <div className="col-6">
            <h3>Edit profile</h3>
            <Form
              onSubmit={formik.handleSubmit}
              className="mb-5 border border-secondary p-5"
              style={{ textAlign: "left" }}
            >
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="aboutMe">
                  <strong>About Me</strong>
                </FormLabel>
                <FormControl
                  className="form-control"
                  id="aboutMe"
                  name="aboutMe"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.aboutMe}
                />
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="age">
                  <strong>Age</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  id="age"
                  name="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                >
                  <option />
                  {ageOption()}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="country">
                  <strong>Country</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="country"
                  id="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                >
                  <option />
                  {countryOption}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="languages">
                  <strong>Languages</strong>
                </FormLabel>

                <MultiSelect
                  options={languagesList}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                  hasSelectAll={false}
                />
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="birthday">
                  <strong>Birthday</strong>
                </FormLabel>
                <input
                  className="form-control"
                  type="date"
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                  id="birthday"
                  key="birthday"
                />
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="gender">
                  <strong>Gender</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="gender"
                  id="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  {genderOptions()}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="sexualPreference">
                  <strong>Sexual Preference</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="sexualPreference"
                  id="sexualPreference"
                  value={formik.values.sexualPreference}
                  onChange={formik.handleChange}
                >
                  {sexualPreferenceOptions()}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="ethnicity">
                  <strong>Ethnicity</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="ethnicity"
                  id="ethnicity"
                  value={formik.values.ethnicity}
                  onChange={formik.handleChange}
                >
                  {ethnicityOptions()}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="eyes">
                  <strong>Eyes</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="eyes"
                  id="eyes"
                  value={formik.values.eyes}
                  onChange={formik.handleChange}
                >
                  {eyesOptions()}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="hair">
                  <strong>Hair</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="hair"
                  id="hair"
                  value={formik.values.hair}
                  onChange={formik.handleChange}
                >
                  {hairOptions()}
                </FormSelect>
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="bodyType">
                  <strong>Body Type</strong>
                </FormLabel>
                <FormSelect
                  className="form-control"
                  name="bodyType"
                  id="bodyType"
                  value={formik.values.bodyType}
                  onChange={formik.handleChange}
                >
                  {bodyTypeOptions()}
                </FormSelect>
              </FormGroup>
              <div className="text-center">
                <Button
                  type="submit"
                  className="mb-5 mt-2 col-4 btn btn-secondary"
                >
                  Edit profile
                </Button>
              </div>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
};

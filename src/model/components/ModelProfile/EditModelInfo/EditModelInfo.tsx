import { useFormik } from "formik";
import { editModelProfile, getModelProfile } from "model/api/models";
import { FunctionComponent, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { userIdSelector, userNameSelector } from "store/selectors/auth";
import { languagesList } from "constants/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import {
  ageOptions,
  bodyTypeOptions,
  countryOption,
  ethnicityOptions,
  eyesOptions,
  genderOptions,
  hairOptions,
  sexualPreferenceOptions,
  weightOptions,
  heightOptions,
  smokeOptions,
  drinkOptions,
  drugsOptions,
  martialStatusOptions,
} from "./options";
import { FormControlSelect } from "./FormControlSelect";
import { IModelEditProfile } from "interfaces/model";

export const EditModelInfo: FunctionComponent = () => {
  const modelId = useSelector(userIdSelector);
  const userName = useSelector(userNameSelector);
  const navigate = useNavigate();

  const [modelInfo, setModelInfo] = useState<IModelEditProfile>();
  const [selected, setSelected] = useState<Array<HTMLOptionElement>>([]);

  useEffect(() => {
    getModelProfile(modelId).then((data) => {
      if (data) {
        data?.languages ? setSelected(data.languages) : setSelected([]);
        setModelInfo(data);
      }
    });
  }, [modelId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      aboutMe: modelInfo?.aboutMe || "",
      userName: userName || "",
      age: modelInfo?.age || "",
      country: modelInfo?.country || "",
      languages: modelInfo?.languages || Option,
      birthday: modelInfo?.birthday || "",
      gender: modelInfo?.gender || "",
      sexualPreference: modelInfo?.sexualPreference || "",
      ethnicity: modelInfo?.ethnicity || "",
      eyes: modelInfo?.eyes || "",
      hair: modelInfo?.hair || "",
      weight: modelInfo?.weight || "",
      height: modelInfo?.height || "",
      bodyType: modelInfo?.bodyType || "",
      smoke: modelInfo?.smoke || "",
      drink: modelInfo?.drink || "",
      drugs: modelInfo?.drugs || "",
      talents: modelInfo?.talents || "",
      maritalStatus: modelInfo?.maritalStatus || "",
      occupationMajor: modelInfo?.occupationMajor || "",
      favoriteFood: modelInfo?.favoriteFood || "",
      automobile: modelInfo?.automobile || "",
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
          <div className="col-12 col-lg-6">
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
                  as="textarea"
                  rows={5}
                  style={{ resize: "none" }}
                  className="form-control"
                  id="aboutMe"
                  name="aboutMe"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.aboutMe}
                />
              </FormGroup>
              <FormControlSelect
                id="age"
                labelName="Age"
                onChange={formik.handleChange}
                value={formik.values.age}
                option={ageOptions()}
              />
              <FormControlSelect
                id="country"
                labelName="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                option={countryOption}
              />
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
                <FormControl
                  className="form-control"
                  id="birthday"
                  name="birthday"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                />
              </FormGroup>
              <FormControlSelect
                id="gender"
                labelName="Gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                option={genderOptions()}
              />
              <FormControlSelect
                id="sexualPreference"
                labelName="Sexual preference"
                onChange={formik.handleChange}
                value={formik.values.sexualPreference}
                option={sexualPreferenceOptions()}
              />
              <FormControlSelect
                id="ethnicity"
                labelName="Ethnicity"
                onChange={formik.handleChange}
                value={formik.values.ethnicity}
                option={ethnicityOptions()}
              />
              <FormControlSelect
                id="eyes"
                labelName="Eyes"
                onChange={formik.handleChange}
                value={formik.values.eyes}
                option={eyesOptions()}
              />
              <FormControlSelect
                id="hair"
                labelName="Hair"
                onChange={formik.handleChange}
                value={formik.values.hair}
                option={hairOptions()}
              />
              <FormControlSelect
                id="weight"
                labelName="Weight"
                onChange={formik.handleChange}
                value={formik.values.weight}
                option={weightOptions()}
              />
              <FormControlSelect
                id="height"
                labelName="Height"
                onChange={formik.handleChange}
                value={formik.values.height}
                option={heightOptions()}
              />
              <FormControlSelect
                id="bodyType"
                labelName="Body type"
                onChange={formik.handleChange}
                value={formik.values.bodyType}
                option={bodyTypeOptions()}
              />
              <FormControlSelect
                id="smoke"
                labelName="Smoke"
                onChange={formik.handleChange}
                value={formik.values.smoke}
                option={smokeOptions()}
              />
              <FormControlSelect
                id="drink"
                labelName="Drink"
                onChange={formik.handleChange}
                value={formik.values.drink}
                option={drinkOptions()}
              />
              <FormControlSelect
                id="drugs"
                labelName="Drugs"
                onChange={formik.handleChange}
                value={formik.values.drugs}
                option={drugsOptions()}
              />
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="talents">
                  <strong>Talents</strong>
                </FormLabel>
                <FormControl
                  as="textarea"
                  rows={2}
                  style={{ resize: "none" }}
                  className="form-control"
                  id="talents"
                  name="talents"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.talents}
                />
              </FormGroup>
              <FormControlSelect
                id="maritalStatus"
                labelName="Marital status"
                onChange={formik.handleChange}
                value={formik.values.maritalStatus}
                option={martialStatusOptions()}
              />
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="occupationMajor">
                  <strong>Occupation / Major</strong>
                </FormLabel>
                <FormControl
                  as="textarea"
                  rows={2}
                  style={{ resize: "none" }}
                  className="form-control"
                  id="occupationMajor"
                  name="occupationMajor"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.occupationMajor}
                />
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="favoriteFood">
                  <strong>Favorite food</strong>
                </FormLabel>
                <FormControl
                  as="textarea"
                  rows={2}
                  style={{ resize: "none" }}
                  className="form-control"
                  id="favoriteFood"
                  name="favoriteFood"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.favoriteFood}
                />
              </FormGroup>
              <FormGroup className="mb-3 form-group">
                <FormLabel htmlFor="automobile">
                  <strong>Automobile</strong>
                </FormLabel>
                <FormControl
                  as="textarea"
                  rows={2}
                  style={{ resize: "none" }}
                  className="form-control"
                  id="automobile"
                  name="automobile"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.automobile}
                />
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

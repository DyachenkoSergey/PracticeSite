import { useFormik } from "formik";
import {
  editModelProfile,
  getModelProfile,
  IModelEditProfile,
} from "model/api/models";
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
import { FormControlSelect } from "./FormControlSelect";

export const EditModelInfo: FunctionComponent = () => {
  const modelId = useSelector(userIdSelector);
  const navigate = useNavigate();

  const [modelInfo, setModelInfo] = useState<IModelEditProfile>();
  const [selected, setSelected] = useState<Array<HTMLOptionElement>>([]);

  useEffect(() => {
    getModelProfile(modelId).then((data) => {
      if (data) {
        data[0]?.languages ? setSelected(data[0].languages) : setSelected([]);
        setModelInfo(data[0]);
      }
    });
  }, [modelId]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      aboutMe: modelInfo?.aboutMe || "",
      age: modelInfo?.age || "",
      country: modelInfo?.country || "",
      languages: modelInfo?.languages || Option,
      birthday: modelInfo?.birthday || "",
      gender: modelInfo?.gender || "",
      sexualPreference: modelInfo?.sexualPreference || "",
      ethnicity: modelInfo?.ethnicity || "",
      eyes: modelInfo?.eyes || "",
      hair: modelInfo?.hair || "",
      bodyType: modelInfo?.bodyType || "",
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
                option={ageOption()}
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
                <input
                  className="form-control"
                  type="date"
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                  id="birthday"
                  key="birthday"
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
                id="bodyType"
                labelName="Body type"
                onChange={formik.handleChange}
                value={formik.values.bodyType}
                option={bodyTypeOptions()}
              />
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

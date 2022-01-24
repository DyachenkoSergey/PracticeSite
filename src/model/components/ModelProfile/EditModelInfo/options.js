import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
const countryObj = countries.getNames("en", { select: "official" });
const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
});

export const countryOption = countryArr.map(({ label, value }) => (
    <option key={value} value={label}>
      {label}
    </option>
  ));



export const ageOption = () => {
  const age = [];
  for (let i = 18; i <= 80; i++) {
    age.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return age;
};

export const genderOptions = () => {
  return (
    <>
      <option />
      <option>Male</option>
      <option>Female</option>
    </>
  );
};

export const sexualPreferenceOptions = () => {
  return (
    <>
      <option />
      <option>Homosexual</option>
      <option>Asexual or ace</option>
      <option>Aromantic or aro</option>
      <option>Heterosexual / straight</option>
      <option>Demisexual</option>
      <option>Gay</option>
      <option>Lesbian</option>
      <option>Bisexual</option>
      <option>Pansexual</option>
      <option>Queer</option>
      <option>QUILTBAG </option>
    </>
  );
};

export const ethnicityOptions = () => {
  return (
    <>
      <option />
      <option>American Indian or Alaska Native</option>
      <option>Asian</option>
      <option>Black or African American</option>
      <option>Hispanic or Latino</option>
      <option>Native Hawaiian or Other Pacific Islander</option>
      <option>White</option>
    </>
  );
};

export const eyesOptions = () => {
  return (
    <>
      <option />
      <option>Black</option>
      <option>Hazel</option>
      <option>Brown</option>
      <option>Yellow</option>
      <option>Brown-yellow-green</option>
      <option>Green</option>
      <option>Gray-green</option>
      <option>Grey</option>
      <option>Grey-blue</option>
      <option>Blue</option>
    </>
  );
};

export const hairOptions = () => {
  return (
    <>
      <option />
      <option>Black</option>
      <option>Blond(e)</option>
      <option>Brown</option>
      <option>Fair</option>
      <option>Ginger</option>
      <option>Grey</option>
      <option>Bald</option>
    </>
  );
};

export const bodyTypeOptions = () => {
  return (
    <>
      <option />
      <option>The inverted triangle</option>
      <option>The lean column</option>
      <option>The rectangle</option>
      <option>The apple</option>
      <option>The pear</option>
      <option>The neat hour glass</option>
      <option>The full hour glass</option>
    </>
  );
};

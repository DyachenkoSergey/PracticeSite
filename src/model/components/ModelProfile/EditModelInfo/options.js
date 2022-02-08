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

export const ageOptions = () => {
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

export const heightOptions = () => {
  const weight = [];
  for (let i = 120; i <= 220; i++) {
    weight.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return weight;
};

export const weightOptions = () => {
  const height = [];
  for (let i = 40; i <= 150; i++) {
    height.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return height;
};

export const smokeOptions = () => {
  return (
    <>
      <option>Yes</option>
      <option>No</option>
      <option>Sometimes</option>
    </>
  );
};
export const drinkOptions = () => {
  return (
    <>
      <option>Yes</option>
      <option>No</option>
      <option>Sometimes</option>
    </>
  );
};
export const drugsOptions = () => {
  return (
    <>
      <option>Yes</option>
      <option>No</option>
      <option>Sometimes</option>
    </>
  );
};
export const martialStatusOptions = () => {
  return (
    <>
      <option>Not married</option>
      <option>Single</option>
      <option>Dating</option>
      <option>Engaged</option>
      <option>Married</option>
      <option>In love</option>
      <option>It's complicated</option>
      <option>Actively looking</option>
      <option>Divorced</option>
    </>
  );
};

export const genderOptions = () => {
  return (
    <>
      <option>Male</option>
      <option>Female</option>
    </>
  );
};

export const sexualPreferenceOptions = () => {
  return (
    <>
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
      <option>Arab</option>
      <option>Indian</option>
      <option>Asian</option>
      <option>Black</option>
      <option>Latina</option>
      <option>White</option>
    </>
  );
};

export const eyesOptions = () => {
  return (
    <>
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
      <option>Black</option>
      <option>Blond(e)</option>
      <option>Brown</option>
      <option>Ginger</option>
      <option>Grey</option>
      <option>Bald</option>
    </>
  );
};

export const bodyTypeOptions = () => {
  return (
    <>
      <option>Skinny</option>
      <option>Athletic</option>
      <option>Curvy</option>
      <option>Bbw</option>
    </>
  );
};

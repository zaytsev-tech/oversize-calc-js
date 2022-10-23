export enum GENDER_TYPE {
  MALE = "male",
  FEMALE = "female",
}

export interface CalcOversizeProps {
  gender: GENDER_TYPE;
  height: number;
  weight: number;
}

export enum MAN_DUMMY {
  STANDARD = "man_tshirt_standard",
  OVERSIZE = "man_tshirt_oversize",
}

export enum WOMAN_DUMMY {
  STANDARD = "woman_tshirt_standard",
  OVERSIZE = "woman_tshirt_oversize",
}

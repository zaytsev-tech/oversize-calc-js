import { CalcOversizeProps, SEX_TYPE } from "../constants/types";
import { searchFemaleOversize } from "./searchFemaleOversize";
import { searchMaleOversize } from "./searchMaleOversize";

export function calcOversize({
  sex = SEX_TYPE.MALE,
  height,
  mass,
}: CalcOversizeProps) {
  if (sex === SEX_TYPE.FEMALE) {
    searchFemaleOversize({ sex, height, mass });
  } else {
    searchMaleOversize({ sex, height, mass });
  }
}

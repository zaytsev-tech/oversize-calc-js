import { CalcOversizeProps, SEX_TYPE } from "../constants/types";
import { searchFemaleOversize } from "./searchFemaleOversize";
import { searchMaleOversize } from "./searchMaleOversize";

export function calculateOversize({
  sex = SEX_TYPE.MALE,
  height,
  weight,
}: CalcOversizeProps) {
  if (sex === SEX_TYPE.FEMALE) {
    return searchFemaleOversize({ sex, height, weight });
  } else {
    return searchMaleOversize({ sex, height, weight });
  }
}

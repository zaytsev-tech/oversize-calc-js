import { CalcOversizeProps, GENDER_TYPE } from "../constants/types";
import { searchFemaleOversize } from "./searchFemaleOversize";
import { searchMaleOversize } from "./searchMaleOversize";

export function calculateOversize({
  gender = GENDER_TYPE.MALE,
  height,
  weight,
}: CalcOversizeProps) {
  if (gender === GENDER_TYPE.FEMALE) {
    return searchFemaleOversize({ gender, height, weight });
  } else {
    return searchMaleOversize({ gender, height, weight });
  }
}

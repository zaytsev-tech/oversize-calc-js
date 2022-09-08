import { WOMAN_SIZES } from "../constants/sizeArrays";
import { CalcOversizeProps } from "../constants/types";

export function searchFemaleOversize({
  sex,
  height,
  weight,
}: CalcOversizeProps) {
  for (let i = 0; i <= WOMAN_SIZES.length; i++) {
    if (height >= WOMAN_SIZES[i][0] && height < WOMAN_SIZES[i + 1][0]) {
      if (weight >= WOMAN_SIZES[i][2]) {
        return [
          WOMAN_SIZES[i + 1][3],
          WOMAN_SIZES[i + 1][4],
          WOMAN_SIZES[i + 1][5],
        ];
      }
      if (weight < WOMAN_SIZES[i][1]) {
        return [
          WOMAN_SIZES[i - 1][3],
          WOMAN_SIZES[i - 1][4],
          WOMAN_SIZES[i - 1][5],
        ];
      }
      return [WOMAN_SIZES[i][3], WOMAN_SIZES[i][4], WOMAN_SIZES[i][5]];
    }
  }
}

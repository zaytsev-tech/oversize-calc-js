import { MAN_SIZES } from "../constants/sizeArrays";
import { CalcOversizeProps } from "../constants/types";

export function searchMaleOversize({
  gender,
  height,
  weight,
}: CalcOversizeProps) {
  for (let i = 0; i <= MAN_SIZES.length; i++) {
    if (height >= MAN_SIZES[i][0] && height < MAN_SIZES[i + 1][0]) {
      if (weight >= MAN_SIZES[i][2]) {
        return [MAN_SIZES[i + 1][3], MAN_SIZES[i + 1][4], MAN_SIZES[i + 1][5]];
      }
      if (weight < MAN_SIZES[i][1]) {
        return [MAN_SIZES[i - 1][3], MAN_SIZES[i - 1][4], MAN_SIZES[i - 1][5]];
      }

      return [MAN_SIZES[i][3], MAN_SIZES[i][4], MAN_SIZES[i][5]];
    }
  }
}

import { FC } from "react";
import { SEX_TYPE } from "../../lib/constants/types";
import { calculateOversize, searchMaleOversize } from "../../lib/utils";
import { CalcOversizeProps } from "../../lib/constants/types";

export const CalcOversize: FC<CalcOversizeProps> = ({
  height,
  weight,
  sex,
}) => {
  const calculatedSizes = calculateOversize({
    sex,
    height,
    weight,
  }) as string[];

  return (
    <div>
      <div>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </div>
      <div id="sizes-container">
        <p>Standard size: {calculatedSizes[0]}</p>
        <p>Overzise: {calculatedSizes[1]}</p>
        <p>Super oversize: {calculatedSizes[2]}</p>
      </div>
      <div id="dummy-container"></div>
    </div>
  );
};

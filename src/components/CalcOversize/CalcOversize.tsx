import { FC, useState } from "react";
import { calculateOversize } from "../../lib/utils";
import manTshirt from "../../images/man_tshirt_oversize.png";
import {
  CalcOversizeProps,
  MAN_DUMMY,
  GENDER_TYPE,
  WOMAN_DUMMY,
} from "../../lib/constants/types";

export const CalcOversize: FC<CalcOversizeProps> = ({
  height,
  weight,
  gender,
}) => {
  const [currentDummy, setCurrentDummy] = useState(
    gender && gender === GENDER_TYPE.FEMALE
      ? WOMAN_DUMMY.STANDARD
      : MAN_DUMMY.STANDARD
  );

  const calculatedSizes = calculateOversize({
    gender,
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
      <div id="dummy-container">
        <img src={currentDummy} alt="tshirt-dummy" />
      </div>
    </div>
  );
};

import { FC, useState } from "react";
import { calculateOversize } from "../../lib/utils";
import manTshirt from "../../images/man_tshirt_oversize.png";
import {
  CalcOversizeProps,
  MAN_DUMMY,
  SEX_TYPE,
  WOMAN_DUMMY,
} from "../../lib/constants/types";

export const CalcOversize: FC<CalcOversizeProps> = ({
  height,
  weight,
  sex,
}) => {
  // const [currentDummy, setCurrentDummy] = useState(
  //   sex && sex === SEX_TYPE.FEMALE ? WOMAN_DUMMY.STANDARD : MAN_DUMMY.STANDARD
  // );

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
      <div id="dummy-container">
        <img src={manTshirt} alt="tshirt-dummy" />
      </div>
    </div>
  );
};

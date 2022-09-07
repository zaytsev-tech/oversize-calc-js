export declare enum SEX_TYPE {
    MALE = "male",
    FEMALE = "female"
}
export interface CalcOversizeProps {
    sex?: SEX_TYPE;
    height: number;
    mass: number;
}

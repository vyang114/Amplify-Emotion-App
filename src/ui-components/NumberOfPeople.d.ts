/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, StepperFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NumberOfPeopleInputValues = {
    image?: string;
    boundingBoxNum?: number;
    etag?: string;
    name?: string;
};
export declare type NumberOfPeopleValidationValues = {
    image?: ValidationFunction<string>;
    boundingBoxNum?: ValidationFunction<number>;
    etag?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NumberOfPeopleOverridesProps = {
    NumberOfPeopleGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    boundingBoxNum?: PrimitiveOverrideProps<StepperFieldProps>;
    etag?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NumberOfPeopleProps = React.PropsWithChildren<{
    overrides?: NumberOfPeopleOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NumberOfPeopleInputValues) => NumberOfPeopleInputValues;
    onSuccess?: (fields: NumberOfPeopleInputValues) => void;
    onError?: (fields: NumberOfPeopleInputValues, errorMessage: string) => void;
    onChange?: (fields: NumberOfPeopleInputValues) => NumberOfPeopleInputValues;
    onValidate?: NumberOfPeopleValidationValues;
} & React.CSSProperties>;
export default function NumberOfPeople(props: NumberOfPeopleProps): React.ReactElement;

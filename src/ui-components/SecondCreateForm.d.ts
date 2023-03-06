/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SecondCreateFormInputValues = {
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
};
export declare type SecondCreateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SecondCreateFormOverridesProps = {
    SecondCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SecondCreateFormProps = React.PropsWithChildren<{
    overrides?: SecondCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SecondCreateFormInputValues) => SecondCreateFormInputValues;
    onSuccess?: (fields: SecondCreateFormInputValues) => void;
    onError?: (fields: SecondCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SecondCreateFormInputValues) => SecondCreateFormInputValues;
    onValidate?: SecondCreateFormValidationValues;
} & React.CSSProperties>;
export default function SecondCreateForm(props: SecondCreateFormProps): React.ReactElement;

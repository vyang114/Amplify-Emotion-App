/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Second } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SecondUpdateFormInputValues = {
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
};
export declare type SecondUpdateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SecondUpdateFormOverridesProps = {
    SecondUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SecondUpdateFormProps = React.PropsWithChildren<{
    overrides?: SecondUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    second?: Second;
    onSubmit?: (fields: SecondUpdateFormInputValues) => SecondUpdateFormInputValues;
    onSuccess?: (fields: SecondUpdateFormInputValues) => void;
    onError?: (fields: SecondUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SecondUpdateFormInputValues) => SecondUpdateFormInputValues;
    onValidate?: SecondUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SecondUpdateForm(props: SecondUpdateFormProps): React.ReactElement;

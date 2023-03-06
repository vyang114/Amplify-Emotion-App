/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { First } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FirstUpdateFormInputValues = {
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
};
export declare type FirstUpdateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirstUpdateFormOverridesProps = {
    FirstUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FirstUpdateFormProps = React.PropsWithChildren<{
    overrides?: FirstUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    first?: First;
    onSubmit?: (fields: FirstUpdateFormInputValues) => FirstUpdateFormInputValues;
    onSuccess?: (fields: FirstUpdateFormInputValues) => void;
    onError?: (fields: FirstUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FirstUpdateFormInputValues) => FirstUpdateFormInputValues;
    onValidate?: FirstUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FirstUpdateForm(props: FirstUpdateFormProps): React.ReactElement;

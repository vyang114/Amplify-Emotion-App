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
export declare type ThirdCreateFormInputValues = {
    physicalAppearance?: string;
    physicalSignal?: string[];
    socialIdentity?: string[];
};
export declare type ThirdCreateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThirdCreateFormOverridesProps = {
    ThirdCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThirdCreateFormProps = React.PropsWithChildren<{
    overrides?: ThirdCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ThirdCreateFormInputValues) => ThirdCreateFormInputValues;
    onSuccess?: (fields: ThirdCreateFormInputValues) => void;
    onError?: (fields: ThirdCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThirdCreateFormInputValues) => ThirdCreateFormInputValues;
    onValidate?: ThirdCreateFormValidationValues;
} & React.CSSProperties>;
export default function ThirdCreateForm(props: ThirdCreateFormProps): React.ReactElement;

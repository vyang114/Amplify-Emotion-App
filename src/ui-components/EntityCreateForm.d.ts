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
export declare type EntityCreateFormInputValues = {
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
    emotion?: string;
};
export declare type EntityCreateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
    emotion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntityCreateFormOverridesProps = {
    EntityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
    emotion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EntityCreateFormProps = React.PropsWithChildren<{
    overrides?: EntityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EntityCreateFormInputValues) => EntityCreateFormInputValues;
    onSuccess?: (fields: EntityCreateFormInputValues) => void;
    onError?: (fields: EntityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntityCreateFormInputValues) => EntityCreateFormInputValues;
    onValidate?: EntityCreateFormValidationValues;
} & React.CSSProperties>;
export default function EntityCreateForm(props: EntityCreateFormProps): React.ReactElement;

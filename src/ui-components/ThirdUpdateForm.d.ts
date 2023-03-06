/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Third } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThirdUpdateFormInputValues = {
    physicalAppearance?: string;
    physicalSignal?: string[];
    socialIdentity?: string[];
};
export declare type ThirdUpdateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThirdUpdateFormOverridesProps = {
    ThirdUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThirdUpdateFormProps = React.PropsWithChildren<{
    overrides?: ThirdUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    third?: Third;
    onSubmit?: (fields: ThirdUpdateFormInputValues) => ThirdUpdateFormInputValues;
    onSuccess?: (fields: ThirdUpdateFormInputValues) => void;
    onError?: (fields: ThirdUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThirdUpdateFormInputValues) => ThirdUpdateFormInputValues;
    onValidate?: ThirdUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ThirdUpdateForm(props: ThirdUpdateFormProps): React.ReactElement;

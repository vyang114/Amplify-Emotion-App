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
export declare type ImageEntityCreateFormInputValues = {
    image?: string;
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
    emotion?: string;
};
export declare type ImageEntityCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
    emotion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImageEntityCreateFormOverridesProps = {
    ImageEntityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
    emotion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImageEntityCreateFormProps = React.PropsWithChildren<{
    overrides?: ImageEntityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ImageEntityCreateFormInputValues) => ImageEntityCreateFormInputValues;
    onSuccess?: (fields: ImageEntityCreateFormInputValues) => void;
    onError?: (fields: ImageEntityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImageEntityCreateFormInputValues) => ImageEntityCreateFormInputValues;
    onValidate?: ImageEntityCreateFormValidationValues;
} & React.CSSProperties>;
export default function ImageEntityCreateForm(props: ImageEntityCreateFormProps): React.ReactElement;

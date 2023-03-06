/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageEntity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ImageEntityUpdateFormInputValues = {
    image?: string;
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
    emotion?: string;
};
export declare type ImageEntityUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
    emotion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImageEntityUpdateFormOverridesProps = {
    ImageEntityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
    emotion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ImageEntityUpdateFormProps = React.PropsWithChildren<{
    overrides?: ImageEntityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    imageEntity?: ImageEntity;
    onSubmit?: (fields: ImageEntityUpdateFormInputValues) => ImageEntityUpdateFormInputValues;
    onSuccess?: (fields: ImageEntityUpdateFormInputValues) => void;
    onError?: (fields: ImageEntityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ImageEntityUpdateFormInputValues) => ImageEntityUpdateFormInputValues;
    onValidate?: ImageEntityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ImageEntityUpdateForm(props: ImageEntityUpdateFormProps): React.ReactElement;

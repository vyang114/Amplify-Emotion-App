/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Entity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EntityUpdateFormInputValues = {
    physicalAppearance?: string[];
    physicalSignal?: string[];
    socialIdentity?: string[];
    emotion?: string;
};
export declare type EntityUpdateFormValidationValues = {
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
    emotion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntityUpdateFormOverridesProps = {
    EntityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextFieldProps>;
    emotion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EntityUpdateFormProps = React.PropsWithChildren<{
    overrides?: EntityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    entity?: Entity;
    onSubmit?: (fields: EntityUpdateFormInputValues) => EntityUpdateFormInputValues;
    onSuccess?: (fields: EntityUpdateFormInputValues) => void;
    onError?: (fields: EntityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntityUpdateFormInputValues) => EntityUpdateFormInputValues;
    onValidate?: EntityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EntityUpdateForm(props: EntityUpdateFormProps): React.ReactElement;

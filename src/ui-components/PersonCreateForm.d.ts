/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PersonCreateFormInputValues = {
    boxColour?: string;
    image?: string;
    physicalAppearance?: string;
    physicalSignal?: string;
    socialIdentity?: string;
    relation?: string;
    socialRelation?: string;
    interaction?: string;
    environment?: string;
};
export declare type PersonCreateFormValidationValues = {
    boxColour?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    physicalAppearance?: ValidationFunction<string>;
    physicalSignal?: ValidationFunction<string>;
    socialIdentity?: ValidationFunction<string>;
    relation?: ValidationFunction<string>;
    socialRelation?: ValidationFunction<string>;
    interaction?: ValidationFunction<string>;
    environment?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonCreateFormOverridesProps = {
    PersonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    boxColour?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    physicalAppearance?: PrimitiveOverrideProps<TextFieldProps>;
    physicalSignal?: PrimitiveOverrideProps<TextAreaFieldProps>;
    socialIdentity?: PrimitiveOverrideProps<TextAreaFieldProps>;
    relation?: PrimitiveOverrideProps<TextFieldProps>;
    socialRelation?: PrimitiveOverrideProps<TextAreaFieldProps>;
    interaction?: PrimitiveOverrideProps<TextAreaFieldProps>;
    environment?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PersonCreateFormProps = React.PropsWithChildren<{
    overrides?: PersonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onSuccess?: (fields: PersonCreateFormInputValues) => void;
    onError?: (fields: PersonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PersonCreateFormInputValues) => PersonCreateFormInputValues;
    onValidate?: PersonCreateFormValidationValues;
} & React.CSSProperties>;
export default function PersonCreateForm(props: PersonCreateFormProps): React.ReactElement;

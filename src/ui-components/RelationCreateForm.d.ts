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
export declare type RelationCreateFormInputValues = {
    box1?: string;
    box2?: string;
    relation?: string;
};
export declare type RelationCreateFormValidationValues = {
    box1?: ValidationFunction<string>;
    box2?: ValidationFunction<string>;
    relation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationCreateFormOverridesProps = {
    RelationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    box1?: PrimitiveOverrideProps<TextFieldProps>;
    box2?: PrimitiveOverrideProps<TextFieldProps>;
    relation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RelationCreateFormProps = React.PropsWithChildren<{
    overrides?: RelationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RelationCreateFormInputValues) => RelationCreateFormInputValues;
    onSuccess?: (fields: RelationCreateFormInputValues) => void;
    onError?: (fields: RelationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationCreateFormInputValues) => RelationCreateFormInputValues;
    onValidate?: RelationCreateFormValidationValues;
} & React.CSSProperties>;
export default function RelationCreateForm(props: RelationCreateFormProps): React.ReactElement;

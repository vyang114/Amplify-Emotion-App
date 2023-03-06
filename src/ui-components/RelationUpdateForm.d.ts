/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Relation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RelationUpdateFormInputValues = {
    box1?: string;
    box2?: string;
    relation?: string;
};
export declare type RelationUpdateFormValidationValues = {
    box1?: ValidationFunction<string>;
    box2?: ValidationFunction<string>;
    relation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationUpdateFormOverridesProps = {
    RelationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    box1?: PrimitiveOverrideProps<TextFieldProps>;
    box2?: PrimitiveOverrideProps<TextFieldProps>;
    relation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RelationUpdateFormProps = React.PropsWithChildren<{
    overrides?: RelationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    relation?: Relation;
    onSubmit?: (fields: RelationUpdateFormInputValues) => RelationUpdateFormInputValues;
    onSuccess?: (fields: RelationUpdateFormInputValues) => void;
    onError?: (fields: RelationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationUpdateFormInputValues) => RelationUpdateFormInputValues;
    onValidate?: RelationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RelationUpdateForm(props: RelationUpdateFormProps): React.ReactElement;

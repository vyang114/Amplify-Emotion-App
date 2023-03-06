/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<ViewProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    TextField29766936?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766938?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766939?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField29766937?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField29766935?: PrimitiveOverrideProps<SelectFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;

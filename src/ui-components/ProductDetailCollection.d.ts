/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductDetailProps } from "./ProductDetail";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductDetailCollectionOverridesProps = {
    ProductDetailCollection?: PrimitiveOverrideProps<CollectionProps>;
    ProductDetail?: ProductDetailProps;
} & EscapeHatchProps;
export declare type ProductDetailCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ProductDetailProps;
} & {
    overrides?: ProductDetailCollectionOverridesProps | undefined | null;
}>;
export default function ProductDetailCollection(props: ProductDetailCollectionProps): React.ReactElement;

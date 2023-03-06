/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Image, TextField } from "@aws-amplify/ui-react";
export default function ProductDetail(props) {
  const { post, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="858px"
      height="508px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 109px 0px"
      {...getOverrideProps(overrides, "ProductDetail")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 401")}
      >
        <Image
          width="unset"
          height="480px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={post?.image}
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <TextField
          label="Name"
          width="unset"
          shrink="0"
          alignSelf="stretch"
          placeholder={post?.name}
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
      </Flex>
      <Divider
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Image,
  SelectField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function ContactUs(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1202px"
      height="639px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ContactUs")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        position="absolute"
        top="0px"
        left="873px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <TextField
          width="unset"
          height="88px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField29766936")}
        ></TextField>
        <TextField
          width="unset"
          height="88px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField29766938")}
        ></TextField>
        <TextField
          width="unset"
          height="88px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField29766939")}
        ></TextField>
        <SelectField
          width="unset"
          height="88px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField29766937")}
        ></SelectField>
        <SelectField
          width="unset"
          height="88px"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField29766935")}
        ></SelectField>
        <Button
          alignItems="flex-end"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Primary Button"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <Image
        width="833px"
        height="480px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  StepperField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Post } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NumberOfPeople(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    image: "",
    boundingBoxNum: 0,
    etag: "",
    name: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [boundingBoxNum, setBoundingBoxNum] = React.useState(
    initialValues.boundingBoxNum
  );
  const [etag, setEtag] = React.useState(initialValues.etag);
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImage(initialValues.image);
    setBoundingBoxNum(initialValues.boundingBoxNum);
    setEtag(initialValues.etag);
    setName(initialValues.name);
    setErrors({});
  };
  const validations = {
    image: [{ type: "URL" }],
    boundingBoxNum: [],
    etag: [],
    name: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          image,
          boundingBoxNum,
          etag,
          name,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Post(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NumberOfPeople")}
      {...rest}
    >
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image: value,
              boundingBoxNum,
              etag,
              name,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <StepperField
        label="Number of boxes in the image"
        isReadOnly={false}
        isRequired={false}
        value={boundingBoxNum}
        onStepChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              image,
              boundingBoxNum: value,
              etag,
              name,
            };
            const result = onChange(modelFields);
            value = result?.boundingBoxNum ?? value;
          }
          if (errors.boundingBoxNum?.hasError) {
            runValidationTasks("boundingBoxNum", value);
          }
          setBoundingBoxNum(value);
        }}
        onBlur={() => runValidationTasks("boundingBoxNum", boundingBoxNum)}
        errorMessage={errors.boundingBoxNum?.errorMessage}
        hasError={errors.boundingBoxNum?.hasError}
        {...getOverrideProps(overrides, "boundingBoxNum")}
      ></StepperField>
      <TextField
        label="Etag"
        isRequired={false}
        isReadOnly={false}
        value={etag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              boundingBoxNum,
              etag: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.etag ?? value;
          }
          if (errors.etag?.hasError) {
            runValidationTasks("etag", value);
          }
          setEtag(value);
        }}
        onBlur={() => runValidationTasks("etag", etag)}
        errorMessage={errors.etag?.errorMessage}
        hasError={errors.etag?.hasError}
        {...getOverrideProps(overrides, "etag")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              boundingBoxNum,
              etag,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

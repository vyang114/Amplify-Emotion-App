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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Person } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PersonCreateForm(props) {
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
    boxColour: "",
    image: "",
    physicalAppearance: "",
    physicalSignal: "",
    socialIdentity: "",
    relation: "",
    socialRelation: "",
    interaction: "",
    environment: "",
  };
  const [boxColour, setBoxColour] = React.useState(initialValues.boxColour);
  const [image, setImage] = React.useState(initialValues.image);
  const [physicalAppearance, setPhysicalAppearance] = React.useState(
    initialValues.physicalAppearance
  );
  const [physicalSignal, setPhysicalSignal] = React.useState(
    initialValues.physicalSignal
  );
  const [socialIdentity, setSocialIdentity] = React.useState(
    initialValues.socialIdentity
  );
  const [relation, setRelation] = React.useState(initialValues.relation);
  const [socialRelation, setSocialRelation] = React.useState(
    initialValues.socialRelation
  );
  const [interaction, setInteraction] = React.useState(
    initialValues.interaction
  );
  const [environment, setEnvironment] = React.useState(
    initialValues.environment
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBoxColour(initialValues.boxColour);
    setImage(initialValues.image);
    setPhysicalAppearance(initialValues.physicalAppearance);
    setPhysicalSignal(initialValues.physicalSignal);
    setSocialIdentity(initialValues.socialIdentity);
    setRelation(initialValues.relation);
    setSocialRelation(initialValues.socialRelation);
    setInteraction(initialValues.interaction);
    setEnvironment(initialValues.environment);
    setErrors({});
  };
  const validations = {
    boxColour: [{ type: "Required" }],
    image: [{ type: "Required" }],
    physicalAppearance: [],
    physicalSignal: [{ type: "JSON" }],
    socialIdentity: [{ type: "JSON" }],
    relation: [],
    socialRelation: [{ type: "JSON" }],
    interaction: [{ type: "JSON" }],
    environment: [{ type: "JSON" }],
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
          boxColour,
          image,
          physicalAppearance,
          physicalSignal,
          socialIdentity,
          relation,
          socialRelation,
          interaction,
          environment,
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
          await DataStore.save(new Person(modelFields));
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
      {...getOverrideProps(overrides, "PersonCreateForm")}
      {...rest}
    >
      <TextField
        label="Box colour"
        isRequired={true}
        isReadOnly={false}
        value={boxColour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour: value,
              image,
              physicalAppearance,
              physicalSignal,
              socialIdentity,
              relation,
              socialRelation,
              interaction,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.boxColour ?? value;
          }
          if (errors.boxColour?.hasError) {
            runValidationTasks("boxColour", value);
          }
          setBoxColour(value);
        }}
        onBlur={() => runValidationTasks("boxColour", boxColour)}
        errorMessage={errors.boxColour?.errorMessage}
        hasError={errors.boxColour?.hasError}
        {...getOverrideProps(overrides, "boxColour")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image: value,
              physicalAppearance,
              physicalSignal,
              socialIdentity,
              relation,
              socialRelation,
              interaction,
              environment,
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
      <TextField
        label="Label"
        value={physicalAppearance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance: value,
              physicalSignal,
              socialIdentity,
              relation,
              socialRelation,
              interaction,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.physicalAppearance ?? value;
          }
          if (errors.physicalAppearance?.hasError) {
            runValidationTasks("physicalAppearance", value);
          }
          setPhysicalAppearance(value);
        }}
        onBlur={() =>
          runValidationTasks("physicalAppearance", physicalAppearance)
        }
        errorMessage={errors.physicalAppearance?.errorMessage}
        hasError={errors.physicalAppearance?.hasError}
        {...getOverrideProps(overrides, "physicalAppearance")}
      ></TextField>
      <TextAreaField
        label="Physical signal"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance,
              physicalSignal: value,
              socialIdentity,
              relation,
              socialRelation,
              interaction,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.physicalSignal ?? value;
          }
          if (errors.physicalSignal?.hasError) {
            runValidationTasks("physicalSignal", value);
          }
          setPhysicalSignal(value);
        }}
        onBlur={() => runValidationTasks("physicalSignal", physicalSignal)}
        errorMessage={errors.physicalSignal?.errorMessage}
        hasError={errors.physicalSignal?.hasError}
        {...getOverrideProps(overrides, "physicalSignal")}
      ></TextAreaField>
      <TextAreaField
        label="Social identity"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance,
              physicalSignal,
              socialIdentity: value,
              relation,
              socialRelation,
              interaction,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.socialIdentity ?? value;
          }
          if (errors.socialIdentity?.hasError) {
            runValidationTasks("socialIdentity", value);
          }
          setSocialIdentity(value);
        }}
        onBlur={() => runValidationTasks("socialIdentity", socialIdentity)}
        errorMessage={errors.socialIdentity?.errorMessage}
        hasError={errors.socialIdentity?.hasError}
        {...getOverrideProps(overrides, "socialIdentity")}
      ></TextAreaField>
      <TextField
        label="Label"
        value={relation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance,
              physicalSignal,
              socialIdentity,
              relation: value,
              socialRelation,
              interaction,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.relation ?? value;
          }
          if (errors.relation?.hasError) {
            runValidationTasks("relation", value);
          }
          setRelation(value);
        }}
        onBlur={() => runValidationTasks("relation", relation)}
        errorMessage={errors.relation?.errorMessage}
        hasError={errors.relation?.hasError}
        {...getOverrideProps(overrides, "relation")}
      ></TextField>
      <TextAreaField
        label="Social relation"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance,
              physicalSignal,
              socialIdentity,
              relation,
              socialRelation: value,
              interaction,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.socialRelation ?? value;
          }
          if (errors.socialRelation?.hasError) {
            runValidationTasks("socialRelation", value);
          }
          setSocialRelation(value);
        }}
        onBlur={() => runValidationTasks("socialRelation", socialRelation)}
        errorMessage={errors.socialRelation?.errorMessage}
        hasError={errors.socialRelation?.hasError}
        {...getOverrideProps(overrides, "socialRelation")}
      ></TextAreaField>
      <TextAreaField
        label="Interaction"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance,
              physicalSignal,
              socialIdentity,
              relation,
              socialRelation,
              interaction: value,
              environment,
            };
            const result = onChange(modelFields);
            value = result?.interaction ?? value;
          }
          if (errors.interaction?.hasError) {
            runValidationTasks("interaction", value);
          }
          setInteraction(value);
        }}
        onBlur={() => runValidationTasks("interaction", interaction)}
        errorMessage={errors.interaction?.errorMessage}
        hasError={errors.interaction?.hasError}
        {...getOverrideProps(overrides, "interaction")}
      ></TextAreaField>
      <TextAreaField
        label="Environment"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              boxColour,
              image,
              physicalAppearance,
              physicalSignal,
              socialIdentity,
              relation,
              socialRelation,
              interaction,
              environment: value,
            };
            const result = onChange(modelFields);
            value = result?.environment ?? value;
          }
          if (errors.environment?.hasError) {
            runValidationTasks("environment", value);
          }
          setEnvironment(value);
        }}
        onBlur={() => runValidationTasks("environment", environment)}
        errorMessage={errors.environment?.errorMessage}
        hasError={errors.environment?.hasError}
        {...getOverrideProps(overrides, "environment")}
      ></TextAreaField>
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

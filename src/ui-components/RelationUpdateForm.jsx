/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Relation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RelationUpdateForm(props) {
  const {
    id: idProp,
    relation,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    box1: "",
    box2: "",
    relation: "",
  };
  const [box1, setBox1] = React.useState(initialValues.box1);
  const [box2, setBox2] = React.useState(initialValues.box2);
  const [relation, setRelation] = React.useState(initialValues.relation);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = relationRecord
      ? { ...initialValues, ...relationRecord }
      : initialValues;
    setBox1(cleanValues.box1);
    setBox2(cleanValues.box2);
    setRelation(cleanValues.relation);
    setErrors({});
  };
  const [relationRecord, setRelationRecord] = React.useState(relation);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Relation, idProp)
        : relation;
      setRelationRecord(record);
    };
    queryData();
  }, [idProp, relation]);
  React.useEffect(resetStateValues, [relationRecord]);
  const validations = {
    box1: [],
    box2: [],
    relation: [],
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
          box1,
          box2,
          relation,
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
          await DataStore.save(
            Relation.copyOf(relationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RelationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Box1"
        isRequired={false}
        isReadOnly={false}
        value={box1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              box1: value,
              box2,
              relation,
            };
            const result = onChange(modelFields);
            value = result?.box1 ?? value;
          }
          if (errors.box1?.hasError) {
            runValidationTasks("box1", value);
          }
          setBox1(value);
        }}
        onBlur={() => runValidationTasks("box1", box1)}
        errorMessage={errors.box1?.errorMessage}
        hasError={errors.box1?.hasError}
        {...getOverrideProps(overrides, "box1")}
      ></TextField>
      <TextField
        label="Box2"
        isRequired={false}
        isReadOnly={false}
        value={box2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              box1,
              box2: value,
              relation,
            };
            const result = onChange(modelFields);
            value = result?.box2 ?? value;
          }
          if (errors.box2?.hasError) {
            runValidationTasks("box2", value);
          }
          setBox2(value);
        }}
        onBlur={() => runValidationTasks("box2", box2)}
        errorMessage={errors.box2?.errorMessage}
        hasError={errors.box2?.hasError}
        {...getOverrideProps(overrides, "box2")}
      ></TextField>
      <TextField
        label="Relation"
        isRequired={false}
        isReadOnly={false}
        value={relation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              box1,
              box2,
              relation: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || relation)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || relation) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

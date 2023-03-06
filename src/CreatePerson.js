import { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Person } from "./models";
import { Icon, Button, Flex, Text, TextField, SelectField } from '@aws-amplify/ui-react';

// await DataStore.save(
//   new Person({
//   "image": "Lorem ipsum dolor sit amet",
//   "boxColour": "Lorem ipsum dolor sit amet",
//   "physicalSignal":  /* Provide init commands */,
//   "socialIdentity":  /* Provide init commands */,
//   "emotion": "Lorem ipsum dolor sit amet",
//   "socialRelation":  /* Provide init commands */,
//   "socialInteraction":  /* Provide init commands */,
//   "environment":  /* Provide init commands */
// })
// );

export default function CreatePerson () {

  const [image, setImageSrc] = useState('')
  const [boxColour, setBoxColour] = useState('')
  const [facialExpression, setFacialExpression] = useState([{item: ""}])
  const [physicalSignal, setPhysicalSignal] = useState([{item: ""}])
  const [socialIdentity, setSocialIdentity] = useState([{item: ""}])
  const [relation, setRelation] = useState([{ name: "Red", relationship: "" }])
  const [interaction, setInteraction] = useState([{ name: "Red", interaction: "" }])
  const [environment, setEnvironment] = useState([{ time: "", location: "" }])
  const [defaultEmotion, setDefaultEmotion] = useState("Anger")
  // const [emotion, setEmotion] = useState("")

  var emotion = ""

  if (defaultEmotion !== "Others"){
    emotion = defaultEmotion
  }

  const handleSubmit = async e => {
      e.preventDefault()

      const entity = {
        image,
        boxColour,
        physicalSignal,
        socialIdentity,
        emotion,
        relation,
        interaction,
        environment,
      }

      console.log(entity)
      
      // const newEntity = await DataStore.save(
      //     new Person(entity)
      // )

      alert('Submitted for ' + boxColour + "." );

      // if input ==== submitAndKeepInput{
        // setBoxColour('Red');
        // setFacialExpression([{item: ""}]);
        // setPhysicalSignal([{item: ""}]);
        // setSocialIdentity([{item: ""}]);
        // setEmotion("Anger");
        // setRelation([{name: "Red", relationship: ""}]);
        // setInteraction([{ name: "Red", interaction: "" }])
      // } else {
        // execute following
      // }

      setImageSrc("");
      setBoxColour('');
      setFacialExpression([{item: ""}]);
      setPhysicalSignal([{item: ""}]);
      setSocialIdentity([{item: ""}]);
      // setEmotion("Anger");
      setRelation([{name: "Red", relationship: ""}]);
      setInteraction([{ name: "Red", interaction: "" }])
      setEnvironment([{ time: "", location: "" }])
  };


  const handleFacialExpressionNameChange = idx => evt => {
      const newFacialExpression = facialExpression.map((facialExpression, sidx) => {
        if (idx !== sidx) return facialExpression;
        return { ...facialExpression, item: evt.target.value };
      });
  
      setFacialExpression(newFacialExpression);
  };
  
  const handleAddFacialExpression = () => {
    // setFacialExpression(facialExpression.concat([{ key: facialExpression.length ,item: "" }]));
    setFacialExpression(facialExpression.concat([{ item: "" }]));
  };

  const handleRemoveFacialExpression = idx => () => {
    setFacialExpression(facialExpression.filter((s, sidx) => idx !== sidx));
  };

  const handlePhysicalSignalNameChange = idx => evt => {
      const newPhysicalSignal = physicalSignal.map((physicalSignal, sidx) => {
        if (idx !== sidx) return physicalSignal;
        return { ...physicalSignal, item: evt.target.value };
      });
  
      setPhysicalSignal(newPhysicalSignal);
    };
  
  const handleAddPhysicalSignal = () => {
      setPhysicalSignal(physicalSignal.concat([{ item: "" }]));
    };
  
  const handleRemovePhysicalSignal = idx => () => {
      setPhysicalSignal(physicalSignal.filter((s, sidx) => idx !== sidx));
    };

  
  const handleSocialIdentityNameChange = idx => evt => {
      const newSocialIdentity = socialIdentity.map((socialIdentity, sidx) => {
          if (idx !== sidx) return socialIdentity;
          return { ...socialIdentity, item: evt.target.value };
      });

      setSocialIdentity(newSocialIdentity);
      };

  const handleAddSocialIdentity = () => {
      setSocialIdentity(socialIdentity.concat([{ item: "" }]));
      };

  const handleRemoveSocialIdentity = idx => () => {
      setSocialIdentity(socialIdentity.filter((s, sidx) => idx !== sidx));
      };
      
  const handleRelationNameChange = idx => evt => {
      const newRelationName = relation.map((rel, sidx) => {
        if (idx !== sidx) return rel;
        return { ...rel, name: evt.target.value };
      });
  
      setRelation(newRelationName);
    };

  const handleRelationRelationshipChange = idx => evt => {
      const newRelationRelationship = relation.map((rel, sidx) => {
        if (idx !== sidx) return rel;
        return { ...rel, relationship: evt.target.value };
      });
  
      setRelation(newRelationRelationship);
    };
  
  const handleAddRelation = () => {
      setRelation(relation.concat([{ name: "Red", relationship: "" }]));
    };
  
  const handleRemoveRelation = idx => () => {
      setRelation(relation.filter((s, sidx) => idx !== sidx));
    };

  const handleInteractionNameChange = idx => evt => {
    const newInteractionName = interaction.map((int, sidx) => {
      if (idx !== sidx) return int;
      return { ...int, name: evt.target.value };
    });

    setInteraction(newInteractionName);
  };

  const handleInteractionInteractionChange = idx => evt => {
      const newInteractionInteraction = interaction.map((rel, sidx) => {
        if (idx !== sidx) return rel;
        return { ...rel, interaction: evt.target.value };
      });
  
      setInteraction(newInteractionInteraction);
    };
  
  const handleAddInteraction = () => {
    setInteraction(interaction.concat([{ name: "Red", interaction: "" }]));
    };
  
  const handleRemoveInteraction = idx => () => {
    setInteraction(interaction.filter((s, sidx) => idx !== sidx));
    };

  return (
      <form onSubmit={handleSubmit}>
          <div>
            <label>
                Image Name
                <Text as="span" fontSize="0.8rem" color="red">
                  {' '}
                  (required)
                </Text>
                <br />
                <input
                  type="text"
                  placeholder={`labelme_wqnscyafmdgxnwn_1.jpg`}
                  value={image}
                  onChange={e => setImageSrc(e.target.value)}
                />
            </label>
            <br />
            <label>
                Box Colour
              <br />
              <SelectField 
                  name="boxColour"
                  value={boxColour}
                  placeholder="Choose colour"
                  onChange={e => setBoxColour(e.target.value)}>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Purple">Purple</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Black">Black</option>
                  <option value="None">None</option>
              </SelectField>
            </label>
          </div>
          <div>
              <label>
                  Facial Expression
                  {facialExpression.map((facialExpression, idx) => (
                      <div className="facialExpression">
                          <input
                          type="text"
                          placeholder={`Young woman, long hair`}
                          value={facialExpression.item}
                          onChange={handleFacialExpressionNameChange(idx)}
                          />
                          <button
                          type="button"
                          onClick={handleRemoveFacialExpression(idx)}
                          className="small"
                          >
                          -
                          </button>
                      </div>
                      ))}
                      <button
                      type="button"
                      onClick={handleAddFacialExpression}
                      className="small"
                      >
                      Add Facial Expression
                      </button>
                  </label>
          </div>
          <div>
              <label>
                  Physical Signal
                  {physicalSignal.map((physicalSignal, idx) => (
                      <div className="physicalSignal">
                          <input
                          type="text"
                          placeholder={`Pointing finger, furrowed eyebrows`}
                          value={physicalSignal.item}
                          onChange={handlePhysicalSignalNameChange(idx)}
                          />
                          <button
                          type="button"
                          onClick={handleRemovePhysicalSignal(idx)}
                          className="small"
                          >
                          -
                          </button>
                      </div>
                      ))}
                      <button
                      type="button"
                      onClick={handleAddPhysicalSignal}
                      className="small"
                      >
                      Add Physical Signal
                      </button>
                  </label>
          </div>
          <div>
              <label>
                  Social Identity
                  {socialIdentity.map((socialIdentity, idx) => (
                      <div className="socialIdentity">
                          <input
                          type="text"
                          placeholder={`Doctor, Athlete, Man`}
                          
                          value={socialIdentity.item}
                          onChange={handleSocialIdentityNameChange(idx)}
                          />
                          <button
                          type="button"
                          onClick={handleRemoveSocialIdentity(idx)}
                          className="small"
                          >
                          -
                          </button>
                      </div>
                      ))}
                      <button
                      type="button"
                      onClick={handleAddSocialIdentity}
                      className="small"
                      >
                      Add Social Identity
                      </button>
                  </label>
          </div>
          <div>
            <label>
                  Emotion
                  <Text as="span" fontSize="0.8rem" color="red">
                    {' '}
                    (required)
                  </Text>
                  <br />
                  <select 
                  name="emotion"
                  value={defaultEmotion}
                  // onChange={e => checkEmotion(e)}>
                  onChange={e => setDefaultEmotion(e.target.value)}>
                  <option value="Anger">Anger</option>
                  <option value="Annoyance">Annoyance</option>
                  <option value="Aversion">Aversion</option>
                  <option value="Confusion">Confusion</option>
                  <option value="Disapproval">Disapproval</option>
                  <option value="Disquietment">Disquietment</option>
                  <option value="Embarrassment">Embarrassment</option>
                  <option value="Fatigue">Fatigue</option>
                  <option value="Fear">Fear</option>
                  <option value="Physical Pain">Physical Pain</option>
                  <option value="Emotional Pain">Emotional Pain</option>
                  <option value="Sadness">Sadness</option>
                  <option value="Physical Suffering">Physical Suffering</option>
                  <option value="Emotional Suffering">Emotional Suffering</option>
                  <option value="Others">Others</option>
              </select>   
              {defaultEmotion === "Others" ? 
              <div>
                <Text as="span" fontSize="0.8rem" color="red">
                    Please specify
                    {' '}
                  </Text>
                <input type="text" onChange={e => emotion = defaultEmotion + ":" + e.target.value}></input>
              </div> : null}
            </label>
          </div>
          <div>
          <label>
            Social Relation
            {relation.map((relation, idx) => (
                <div className="relation">
                    <select 
                        type="select"
                        value={relation.name}
                        onChange={handleRelationNameChange(idx)}>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Black">Black</option>
                    </select>
                    <input
                        type="text"
                        placeholder={`Daughter, Teacher, Patient`}
                        value={relation.relationship}
                        onChange={handleRelationRelationshipChange(idx)}
                        />
                    <button
                        type="button"
                        onClick={handleRemoveRelation(idx)}
                        className="small"
                        >
                        -
                        </button>
                </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddRelation}
                    className="small"
                    >
                    Add Social Relation
                    </button>
            </label>
          </div>
          <div>
          <label>
            Social Interaction
            {interaction.map((interaction, idx) => (
                <div className="interaction">
                    <select 
                        type="select"
                        value={interaction.name}
                        onChange={handleInteractionNameChange(idx)}>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Black">Black</option>
                    </select>
                    <input
                        type="text"
                        placeholder={`Pointing at, Looking at`}
                        value={interaction.interaction}
                        onChange={handleInteractionInteractionChange(idx)}
                        />
                    <button
                        type="button"
                        onClick={handleRemoveInteraction(idx)}
                        className="small"
                        >
                        -
                        </button>
                </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddInteraction}
                    className="small"
                    >
                    Add Social Interaction
                    </button>
            </label>
          </div>
          {/* <p style={{ color: boxColour === "Red" ? "Red" : '${boxColour}' }}> */}
          <p>
        { facialExpression.map((appearance) => {return <span>{appearance.item}&nbsp;</span>;}) }, a&nbsp;
        { socialIdentity.map((identity) => {return <span>{identity.item}&nbsp;</span>;})},
        {physicalSignal.map((signal) => {return <span>{signal.item}&nbsp;</span>;})}
        feels {emotion}</p>
        <p>{boxColour} is { relation.map((rel) => {return <span>{rel.name}'s {rel.relationship}</span>;})}</p>
        {/* <p>{boxColour} is { relation.map((rel) => {return <span>{rel.relationship} {rel.name}&nbsp;</span>;})}</p> */}
          <input type='submit' value='submit' />
      </form>
  )

}
import * as React from "react";
import { DataStore } from '@aws-amplify/datastore';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      physicalAppearance: [{ name: "" }],
      // physicalAppearance: [],
      physicalSignal: [{ name: "" }],
      emotion: 'Anger',
      boxColour: 'Red',
      relation:  [{ name: "", interaction: "" }],
      placeholder: "Default"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const emotionValue = target.type === 'select' ? target.select : target.value;
    const name = target.name;
    
    // this.setState({emotion: event.target.value});
    // this.setState({boxColour: event.target.value});
    console.log(name)

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async event => {
    // alert('Your favorite flavor is: ' + this.state.isGoing);
    event.preventDefault();
    console.log(this.state);

    const appearance = ["Man", "Glasses"]
    const signal = this.state.physicalSignal
    const identity = this.state.boxColour
    const emo = this.state.placeholder

  //   await DataStore.save(
  //     new First({
  //       appearance,
  //       appearance,
  //       appearance
  //     })
  //   )
  }

  handleRelationNameChange = idx => evt => {
    const newRelationName = this.state.relation.map((relation, sidx) => {
      if (idx !== sidx) return relation;
      return { ...relation, name: evt.target.value };
    });

    this.setState({ relation: newRelationName });
  };

  handleRelationInteractionChange = idx => evt => {
    const newRelationInteraction = this.state.relation.map((relation, sidx) => {
      if (idx !== sidx) return relation;
      return { ...relation, interaction: evt.target.value };
    });

    this.setState({ relation: newRelationInteraction });
  };

  handleAddRelation = () => {
    this.setState({
      relation: this.state.relation.concat([{ name: "", interaction: "" }])
    });
  };

  handleRemoveRelation = idx => () => {
    this.setState({
      relation: this.state.relation.filter((s, sidx) => idx !== sidx)
    });
  };

  handlePhysicalAppearanceNameChange = idx => evt => {
    const newPhysicalAppearance = this.state.physicalAppearance.map((physicalAppearance, sidx) => {
      if (idx !== sidx) return physicalAppearance;
      return { ...physicalAppearance, name: evt.target.value };
    });

    this.setState({ physicalAppearance: newPhysicalAppearance });
  };

  handleAddPhysicalAppearance = () => {
    this.setState({
      physicalAppearance: this.state.physicalAppearance.concat([{ name: "" }])
    });
  };

  handleRemovePhysicalAppearance = idx => () => {
    this.setState({
      physicalAppearance: this.state.physicalAppearance.filter((s, sidx) => idx !== sidx)
    });
  };

  handlePhysicalSignalNameChange = idx => evt => {
    const newPhysicalSignal = this.state.physicalSignal.map((physicalSignal, sidx) => {
      if (idx !== sidx) return physicalSignal;
      return { ...physicalSignal, name: evt.target.value };
    });

    this.setState({ physicalSignal: newPhysicalSignal });
  };

  handleAddPhysicalSignal = () => {
    this.setState({
      physicalSignal: this.state.physicalSignal.concat([{ name: "" }])
    });
  };

  handleRemovePhysicalSignal = idx => () => {
    this.setState({
      physicalSignal: this.state.physicalSignal.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Box Colour
          <select 
          name="boxColour"
          value={this.state.boxColour}
          onChange={this.handleInputChange}>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Purple">Purple</option>
            <option value="Yellow">Yellow</option>
            <option value="Black">Black</option>
          </select>
        </label>
        <br />
        <label>
          Physical Appearance
          {this.state.physicalAppearance.map((physicalAppearance, idx) => (
              <div className="physicalAppearance">
                <input
                  type="text"
                  placeholder={`Young woman, long hair`}
                  value={physicalAppearance.name}
                  onChange={this.handlePhysicalAppearanceNameChange(idx)}
                />
                <button
                  type="button"
                  onClick={this.handleRemovePhysicalAppearance(idx)}
                  className="small"
                >
                  -
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={this.handleAddPhysicalAppearance}
              className="small"
            >
              Add Physical Appearance
            </button>
        </label>
        <br />
        <label>
          Physical Signal
          {this.state.physicalSignal.map((physicalSignal, idx) => (
              <div className="physicalSignal">
                <input
                  type="text"
                  placeholder={`Pointing finger, furrowed eyebrows`}
                  value={physicalSignal.name}
                  onChange={this.handlePhysicalSignalNameChange(idx)}
                />
                <button
                  type="button"
                  onClick={this.handleRemovePhysicalSignal(idx)}
                  className="small"
                >
                  -
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={this.handleAddPhysicalSignal}
              className="small"
            >
              Add Physical Signal
            </button>
        </label>
        <br />
        {/* <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br /> */}
        <label>
          Emotion         
          <select 
          name="emotion"
          value={this.state.emotion} 
          onChange={this.handleInputChange}>
            <option value="Anger">Anger</option>
            <option value="Annoyance">Annoyance</option>
            <option value="Aversion">Aversion</option>
            <option value="Confusion">Confusion</option>
            <option value="Disapproval">Disapproval</option>
            <option value="Disquietment">Disquietment</option>
            <option value="Embarrassment">Embarrassment</option>
            <option value="Fatigue">Fatigue</option>
            <option value="Fear">Fear</option>
            <option value="Pain">Pain</option>
            <option value="Sadness">Sadness</option>
            <option value="Suffering">Suffering</option>
            <option value="None of the above">None of the above</option>
          </select>
        </label>
        <br />
        <label>
          Relation
          {this.state.relation.map((relation, idx) => (
              <div className="relation">
                <select 
                  type="select"
                  placeholder={`Box`}
                  value={relation.name}
                  onChange={this.handleRelationNameChange(idx)}>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Purple">Purple</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Black">Black</option>
                </select>
                <input
                  type="text"
                  placeholder={`Igoring`}
                  value={relation.interaction}
                  onChange={this.handleRelationInteractionChange(idx)}
                />
                <button
                  type="button"
                  onClick={this.handleRemoveRelation(idx)}
                  className="small"
                >
                  -
                </button>
              </div>
            ))}
          <button
              type="button"
              onClick={this.handleAddRelation}
              className="small"
            >
              Add Relation
            </button>
        </label>
        <p>
          { this.state.physicalAppearance.map((item) => {return <span>{item.name}&nbsp;</span>;}) }
          { this.state.physicalSignal.map((item) => {return <span>{item.name}&nbsp;</span>;})}
          feels {this.state.emotion}</p>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

  export default PersonForm;
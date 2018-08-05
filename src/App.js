import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { initializeIcons } from "@uifabric/icons";
import { getDetails, clearDetails } from "./action";

import Description from "./description";
import "./App.css";

class App extends Component {
  state = {
    selectedDepartment: "",
    selectedEmployeeId: "",
    departmentEmployeeIds: [],
    loading: false
  };
  componentDidMount() {
    initializeIcons();
  }
  changeState = item => {
    this.setState(
      {
        selectedDepartment: item
      },
      () => {
        this.setState({
          departmentEmployeeIds: []
        });
        console.log(this.state.selectedDepartment);
        if (this.state.selectedDepartment.text === "HR") {
          this.setState(() => {
            return {
              departmentEmployeeIds: [
                {
                  key: "1",
                  text: 1
                },
                {
                  key: "2",
                  text: 2
                },
                {
                  key: "3",
                  text: 3
                },
                {
                  key: "4",
                  text: 4
                },
                {
                  key: "5",
                  text: 5
                }
              ]
            };
          });
        } else {
          this.setState(prevState => {
            return {
              departmentEmployeeIds: [
                {
                  key: "6",
                  text: 6
                },
                {
                  key: "7",
                  text: 7
                },
                {
                  key: "8",
                  text: 8
                },
                {
                  key: "9",
                  text: 9
                },
                {
                  key: "10",
                  text: 10
                }
              ]
            };
          });
        }
      }
    );
  };
  getEmployeeId = employee => {
    this.setState({
      selectedEmployeeId: employee
    });
  };

  getDetails = () => {
    this.setState({
      loading: true
    });
    const { selectedEmployeeId } = this.state;
    let url = `https://reqres.in/api/users/${selectedEmployeeId.text}`;
    console.log(url);
    axios.get(url).then(res => {
      this.setState({
        loading: false
      });
      this.props.getDetails(res.data.data);
    });
  };

  clearDetails = () => {
    console.log(this.props.clearDetails());
  };

  render() {
    const {
      departmentEmployeeIds,
      selectedDepartment,
      selectedEmployeeId
    } = this.state;
    return (
      <div className="form-container">
        <Dropdown
          placeHolder="Select a department"
          label="Departments:"
          id="Basicdrop1"
          selectedKey={selectedDepartment ? selectedDepartment.key : ""}
          ariaLabel="Basic dropdown example"
          onChanged={this.changeState}
          options={[
            { key: "A", text: "HR" },
            { key: "B", text: "Engineering" }
          ]}
        />
        <Dropdown
          placeHolder="Select employee id"
          label="Employee Id:"
          id="Basicdrop2"
          selectedKey={selectedEmployeeId ? selectedEmployeeId.key : ""}
          ariaLabel="Basic dropdown example"
          onChanged={this.getEmployeeId}
          options={departmentEmployeeIds}
        />
        <DefaultButton
          primary={true}
          data-automation-id="test"
          text="Get Details"
          onClick={this.getDetails}
          allowDisabledFocus={true}
        />
        <DefaultButton
          primary={false}
          data-automation-id="test"
          text="Clear Details"
          onClick={this.clearDetails}
          allowDisabledFocus={true}
        />
        <Description loading={this.state.loading} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getDetails(details) {
    dispatch(getDetails(details));
  },
  clearDetails() {
    dispatch(clearDetails());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);

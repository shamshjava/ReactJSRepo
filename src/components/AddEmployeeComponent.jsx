import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empName: '',
            empAddress: '',
            empSalary: ''
        }
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeEmployeeAddressHandler = this.changeEmployeeAddressHandler.bind(this);
        this.changeEmployeeSalaryHandler = this.changeEmployeeSalaryHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeEmployeeNameHandler = (event) => {
        this.setState({empName: event.target.value});
    }
    changeEmployeeAddressHandler = (event) => {
        this.setState({empAddress: event.target.value});
    }
    changeEmployeeSalaryHandler = (event) => {
        this.setState({empSalary: event.target.value});
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {empName: this.state.empName, empAddress: this.state.empAddress, empSalary: this.state.empSalary};
        console.log('Employee =>' + JSON.stringify(employee));
        EmployeeService.addEmployee(employee).then(res =>{
            this.props.history.push('/employee');
        })
    }
    cancel(){
        this.props.history.push('/employee');
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>Employee Name:</label>
                                        <input type="text" placeholder="Employee Name" name="name" className="form-control"
                                        value={this.state.empName} onChange={this.changeEmployeeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Address:</label>
                                        <input type="text" placeholder="Employee Address" name="name" className="form-control"
                                        value={this.state.empAddress} onChange={this.changeEmployeeAddressHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Salary:</label>
                                        <input type="text" placeholder="Employee Salary" name="name" className="form-control"
                                        value={this.state.empSalary} onChange={this.changeEmployeeSalaryHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AddEmployeeComponent;
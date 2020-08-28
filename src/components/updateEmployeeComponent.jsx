import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class updateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empId: this.props.match.params.empId,
            empName: '',
            empAddress: '',
            empSalary: ''
        }
        console.log(`Employee ID=>>${this.state.empId}`);
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeEmployeeAddressHandler = this.changeEmployeeAddressHandler.bind(this);
        this.changeEmployeeSalaryHandler = this.changeEmployeeSalaryHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then((res) => {
            let employee = res.data;
            console.log("Employee=>>" + employee);
            this.setState({
                empId: employee.empId, 
                empName: employee.empName, 
                empAddress: employee.empAddress, 
                empSalary: employee.empSalary
            });
        });
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
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {empId: this.state.empId, empName: this.state.empName, empAddress: this.state.empAddress, empSalary: this.state.empSalary};
        console.log('Employee =>' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee,employee.empId).then(res =>{
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
                            <h3 className="text-center">Update Employee</h3>
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
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
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

export default updateEmployeeComponent;
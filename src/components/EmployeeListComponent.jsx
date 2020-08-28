import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/addEmployee');
    }
    editEmployee(empId){
        this.props.history.push(`/updateEmployee/${empId}`);
    }
    deleteEmployee(empId){
        EmployeeService.deleteEmployee(empId).then((res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.empId != empId)});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button  className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee Address</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                            <tr key= {employee.empId}>
                                <td> {employee.empName}</td>
                                <td> {employee.empAddress}</td>
                                <td> {employee.empSalary}</td>
                               <td>
                               <button className="btn btn-info" onClick={() => this.editEmployee(employee.empId)}>Edit</button>
                               <button className="btn btn-danger" onClick={() => this.deleteEmployee(employee.empId)} style={{marginLeft: "10px"}}>Delete</button>
                               </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default EmployeeListComponent;
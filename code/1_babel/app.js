class App extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [
                {id: 1, name: "Terje"},
                {id: 2, name: "Ole"}
            ]
        };
    }

    employeeAdded(employeeName) {
        const nextId = this.state.employees.length + 1;
        this.setState({
            employees: [...this.state.employees, {
                id: nextId,
                name: employeeName
            }]
        });
    }

    render() {
        return (
            <div>
                <Header name="Kris-Mikael"/>
                <EmployeeList employees={this.state.employees}/>
                <AddEmployeeForm onAddEmployee={this.employeeAdded.bind(this)}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return <div>Hei {this.props.name}</div>;
    }
}

class EmployeeList extends React.Component {
    render() {
        const {employees} = this.props;
        return (
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        );
    }
}

class AddEmployeeForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ""
        };
    }

    valueChanged(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    buttonClicked() {
        this.props.onAddEmployee(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={this.valueChanged.bind(this)}/>
                <button onClick={this.buttonClicked.bind(this)}>Legg til</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("my-app"));

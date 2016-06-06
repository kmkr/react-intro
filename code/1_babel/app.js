class Header extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log('render header');
        return <div>Hello {this.props.name}</div>;
    }
}

class EmployeeList extends React.Component {
    render() {
        console.log('render employeelist');
        const {employees} = this.props;
        return (
            <ul>
                {employees.map(employee => <li key={employee.id}>{employee.name}</li>)}
            </ul>
        );
    }
}

class AddEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Foo'
        };
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    onClick() {
        this.props.onAdd(this.state.value);
    }

    render() {
        console.log('render AddEmployeeForm');
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}/>
                <button onClick={this.onClick.bind(this)}>Legg til</button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {id: 1, name: 'Terje'},
                {id: 2, name: 'Kris-Mikael'}
            ]
        };
    }
    onAdd(employeeName) {
        const newId = this.state.employees.length + 1;
        this.setState({
            employees: [...this.state.employees, {
                id: newId,
                name: employeeName
            }]
        });
    }

    render() {
        console.log('render App');
        return (
            <div>
                <Header name="Nøff"/>
                <EmployeeList employees={this.state.employees}/>
                <AddEmployeeForm onAdd={this.onAdd.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('my-app'));

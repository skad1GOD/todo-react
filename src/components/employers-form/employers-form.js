import {Component} from 'react'
import './employers-form.css'

class EmployersAddForm extends Component   {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
        this.maxId = 4;
    }

    formsMet= (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }



    render() {
        const {name, salary} = this.state


        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What's his name?" 
                        name='name'
                        value={name}
                        onChange={this.formsMet} />
                        
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name='salary'
                        value={salary}
                        onChange={this.formsMet} />
                        
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}













export default EmployersAddForm;
import { Component } from 'react';

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search/search';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employer.-list';
import EmployersAddForm from '../employers-form/employers-form';

import './app.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {name: 'John C.' , salary: 600, increase: false, rise:false , id:1},
                {name: 'Alex M.' , salary: 1600, increase: false, rise:false , id:2},
                {name: 'Mike L.' , salary: 2300, increase: false, rise:false , id:3},
            ],
            term: '',
            filter: 'all'
            
        }
        this.maxId  =4
    }



    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    
    addItem = (name, salary)  => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++,
            rise: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }


        onToogleincr = (id) => {
            this.setState(({data}) => ({
                data:data.map(item => {
                    if(item.id === id) {
                        return {...item, increase: !item.increase}
                    }
                    return item
                })
            }))

            
        }

        onToogleRise = (id) => {
            this.setState(({data}) => ({
                data:data.map(item => {
                    if(item.id === id) {
                        return {...item, rise: !item.rise}
                    }
                    return item
                })
            }))
        }


        searchEmp = (items, term) => {
            if (term.length === 0) {
                return items;
            }
            return items.filter(item => {
                return item.name.indexOf(term) > -1
            })
        }


        onUpdateSearch = (term) => {
            this.setState({term})
        }



        filterPost = (items, filter) => {
            switch (filter) {
                case 'rise':
                    return items.filter(item => item.rise);
                case 'moreThen1000':
                    return items.filter(item => item.salary > 1000);
                default:
                    return items
            }
        }

        onFilterSelect = (filter) => {
            this.setState({filter});
        }



    render() {

        const {data, term, filter} = this.state
        const employeer = this.state.data.length
        const increse = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);



        return(
            <div className="app">
                <AppInfo
                employeer={employeer}
                increse={increse} />
    
                <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch} />
            <AppFilter 
            filter={filter} onFilterSelect={this.onFilterSelect}
            />
            <EmployersList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToogleincr={this.onToogleincr}
            onToogleRise={this.onToogleRise}/>
            <EmployersAddForm onAdd={this.addItem} />
                </div>
            </div>
        );
    }

}

export default App;

/*
---> Свойства компонентів
->
->
->
->
->

*/
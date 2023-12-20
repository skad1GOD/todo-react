import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css';

const EmployersList = ({data, onDelete, onToogleincr, onToogleRise}) => {

    const elements = data.map(item =>  {
        const {id,  ...itemProps} = item;
        return (
            <EmployersListItem
            key ={id}
            {...itemProps}
            onDelete={() => {
                return onDelete(id)
            }} 
            onAdd = {() => {
                return console.log(id)
            }}
            onToogleincr = {() => {
                return onToogleincr(id)
            }}
            onToogleRise = {() => {
                return onToogleRise(id)
            }}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;
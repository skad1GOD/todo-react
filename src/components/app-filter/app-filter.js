
import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'Up for promotion'},
        {name: 'moreThen1000', label:  'Salaty more than $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

    
}

export default AppFilter;

/* при кліку на кнопку вибивало чи він йде на повишення і зп більше ніж 1000 баксів
я думаю це робитсья так ми пишимо методи дад інкріс і дата саларі і по ним вже писати лоігку 
і передавати у верс стейт     upforPromotion       


                <button
                className="btn
                btn-light">
                All employees
                </button>
                <button
                className="btn
                btn-outline-light" >
                Up for promotion
                </button>
                <button
                className="btn
                btn-outline-light">
                Salary more than $1000
                </button>
                
                */
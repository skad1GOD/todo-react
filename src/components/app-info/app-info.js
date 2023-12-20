import './app-info.css'





const AppInfo = ({employeer, increse}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in the company: A</h1>
            <h2>Total number of employees: {employeer}</h2>
            <h2>The prize will be received: {increse}</h2>
        </div>
        
    )
}

export default AppInfo;
import React from 'react'
import CreateTodo from './redux/containers/CreateTodo'
import Table from './redux/containers/Table'

const App = () => {
        return (
            <div className="App">
                <div className="container" style={{ marginTop: "80px"}} >
                    <div className="row">
                        <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
                            <CreateTodo />
                        </div>
                        <Table />
                    </div>
                </div>
            </div>
        );
}

export default App;

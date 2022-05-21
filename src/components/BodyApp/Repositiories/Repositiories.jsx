import React from 'react';
import axios from 'axios';

import Repo from './Repo';

const Repositiories = (props) => {
    const [repositories, setRepositories] = React.useState([]);
    
    React.useEffect(() => {
        axios.get('https://api.github.com/users/gaearon/repos?per_page=4').then(res => setRepositories(res.data))
    }, []);
    console.log(repositories)

    return(
        <div className="repositiories">
            <h3>
                Repositories (0)
            </h3>
            <div className="repositories-wrap">
                {repositories.map(item => <Repo key={item.id} name={item.name} description={item.description} url={item.html_url} />  )}
            </div>
        </div>
    )
}

export default Repositiories;
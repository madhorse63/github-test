const Repo = (props) => {
    return(
        <div className="repo">
            <a href={props.url} className="repo-name" target='_blank'>
                {props.name}
            </a>
            <p className="repo-descr">
                {props.description}
            </p>
        </div>
    )
}

export default Repo;
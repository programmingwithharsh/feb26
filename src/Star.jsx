function Star(props) {
    return (<div>
        <div>This is Star Functional Component</div>
        <div>{props.rating}</div>
        <div>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>
    </div>
    );
}

export default Star;
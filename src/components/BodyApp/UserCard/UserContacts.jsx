const UserContacts = (props) => {
    let quantity = props.quantity;
    if(quantity > 1000){
        quantity = (quantity / 1000).toFixed(1);
        quantity = quantity + 'k';
    }

    return(
        <div className="contact">
            <img src={props.image} alt="icon" />
            <p>{quantity} {props.word}</p>
        </div>
    )
}

export default UserContacts;
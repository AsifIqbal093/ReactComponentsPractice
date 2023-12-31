import './ConceptsItem.css';

function ConceptsItems(props){
    return (
        <li className="concept">
        <img src={props.concept.image} alt="" />
        <h2>{props.concept.title}</h2>
        <p>{props.concept.description}</p>
        </li>
    );
};

export default ConceptsItems;
import Friend from "../Friend/Friend";
// import Gf from "../Gf/Gf";
import Special from "../Special/Special";


const Cousin = ({name , asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <sec className="flex">
                {  asset && <Special asset={asset}></Special>  }
                {name === 'Mosabbir' && <Friend></Friend>}
            </sec>
        </div>
    );
};

export default Cousin;
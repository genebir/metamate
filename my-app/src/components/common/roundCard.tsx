import {mergeProps} from "solid-js";
import '../../styles/common.css';
const RoundCard = (props: any) => {
    props = mergeProps({style: ""}, props)
    return (
        <>
            <div class={'round-card'} style={props.style}>
            {props.children}
            </div>
        </>
    )
}

export default RoundCard;
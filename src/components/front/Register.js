import Reach from 'react'; 

export default function Register(props){
    return(
        <div>
            <div onClick={props.onRegisterHandler}>Click here to Register</div>
        </div>
    )
}
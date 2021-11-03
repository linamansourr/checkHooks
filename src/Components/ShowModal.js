import styled from "styled-components";
import Modal from "./Modal";
import React , {useState} from "react";

const Button = styled.button`
min-width: 100px;
padding: 16px 32px;
border-radius:  4px;
border: none;
background: white;
cursor: pointer;
`;


function ShowModal(){
    const [showModal, setShowModal] = useState(false);
    const openModal= () => {
        setShowModal(!showModal);

    };
    return(
        <div>

        </div>
    )
}
export default ShowModal;
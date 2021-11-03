import React from 'react'
import styled from "styled-components";

const Background = styled.div`
z-index: 999;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`;
const Modal = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px regba(0, 0, 0, 0.2);
color: #000;
background: #fff;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
z-index: 10;
border-radius: 10px;


`;

const ModalInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;
input{
    border: 2px solid #aaaa;
    border-radius: 4px;
}
`


function Modal({showModal, setShowModal, addMovie}) {
    const [title,setTitle] = useState("");
    const [postUrl, setdescription] = ("");
    const [description, setdescrition]= useState(initialState);
    const [rate, setRate] = useState(1);

    return (
        <>
        {showModal? (
         <Background>
             <Modal showModal={showModal}>
                 <ModalInput>
                     <div className="space-x-4 space-y3"
                     style={{margin:"2px"}}>

                     <label>Movie Title</label>
                    <input
                    name="title"
                    placeholder="titanic"
                    onchange = {(e) =>setTitle(e.target.value)} />
                    </div>

                    <div className="space-x-4 space-y-3"
                    style={{margin : "2px"}}
                    >
                        <label>Movie Post</label>
                        <input 
                        name = "postUrl"
                        placeholder= "https://www.telerama.fr/sites/tr_master/files/4d284051-ddd4-4ee7-8a15-74064ea61510_2.jpg"
                        onChange={(e)=>
                        setPosteurUrl(e.target.value)}
                        ></input>
                    </div>
                    <div className ="space-x-4 space-y-3">
                    <label>Movie Rate</label>
                    <input
                    name="rate"
                    placeholder="2"
                    onChange={(e)=>
                    setRate(e.target.value)}/>

                    </div>

                    <ModelContent>
                        <div>
                            <h1>Add Movie </h1>
                            <p>Be ure to type data correctly</p>
                            
                            <button
                            onClick={()=>addMovie({title,rate,postUrl})}>Add Movie</button>

                        </div>
                    </ModelContent>
                    <CloseModalButton
                    aria-label="Close modal"
                    onClick={()=>setShowModal(!showModal)}
                    />



                 </ModalInput>
             </Modal>

    </Background>
    ):null
}
</>
   ); 
}
export default Modal;

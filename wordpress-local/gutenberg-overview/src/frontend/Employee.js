import React from "react";
import "./employee.css";


function Employee () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div>
            <div className="employee" onClick={()=>setIsModalOpen(!isModalOpen)}>
                <img src={staffImage} alt="staff Image">
                <div className="employee__info">
                    <p>Paragraph from saved content: {firstName}</p>
                    <p>{position}</p>
                </div>
            </div>
                {
                    isModalOpen ?
                    (
                        <div className="modal-container">
                            <p>{firstName}</p>
                            <p>{description}</p>
                            socilalinks ....         
                        </div>
                    ): null
                }
          </div>
    )
}

export default Employee;

// const closeModal = () => {
//        setIsModalOpen(!isModalOpen)
//    }

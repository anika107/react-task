import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalC from "./modal-c/ModalC";

const ModalB = () => {
    const navigate = useNavigate();

    const [dataList, setDataList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const country = "United States";

    const handleOnClick = (data) => {
        setSelectedItem(data)
        setShowModal(true)
    }

    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/country-contacts/${country}/`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-CSRFToken': 'KgKKC7GC5KW08tVWP62yjYciPY33TU9klTOcomDXknNT53arNcywt2qAbtCmGXyC'
            }
        })
        .then(response => response.json())
        .then(data => {
           setDataList(data.results)
        })
        .catch(error => {
          console.error('Error', error);
        });
    }, [])

    return (
        <div>
            {showModal && <ModalC data={selectedItem} onClose={() => setShowModal(false)}/>}
            <ul>
                {dataList.map((data,index) => (
                    <li onClick={() => handleOnClick(data)} key={index}>{data.country.name}</li>
                ))}
            </ul>
            <button style={{ backgroundColor: "#46139f"}} onClick={() => navigate("/modal-a")} type="button" >All contacts</button>
            <button style={{ backgroundColor: "#ff7f50"}} onClick={() => navigate("/modal-b")} type="button" >US Contacts</button>
            <button style={{ backgroundColor: "#fff", border: "1px solid #46139f"}} onClick={() => navigate("/problem-2")} type="button" >Close</button>
        </div>
    )
}

export default ModalB;
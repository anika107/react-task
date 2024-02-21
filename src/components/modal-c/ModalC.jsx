import { useNavigate } from "react-router-dom";
import styles from "./ModalC.module.css";

const ModalC = ({ data, onClose = () => {} }) => {
    const navigate = useNavigate();
    const { phone, country} = data;
    console.log("modal c")
    return (
        <div className={styles["wrapper"]}>
            <h2>{phone}</h2>
            <p>{country.name}</p>
            <>
            <button style={{ backgroundColor: "#46139f"}} onClick={() => navigate("/modal-a")} type="button" >All contacts</button>
            <button style={{ backgroundColor: "#ff7f50"}} onClick={() => navigate("/modal-b")} type="button" >US Contacts</button>
            <button style={{ backgroundColor: "#fff", border: "1px solid #46139f"}} onClick={onClose} type="button" >Close</button>
            </>
        </div>
    )
}

export default ModalC;
import GlobalAccordion from "../../components/GlobalAccordion/GlobalAccordion";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";



const PermitCheck = () => {


    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page-container" >
            <main className="main-content">
                <div className="skip-picker-big-header">
                    {"Permit Check"}
                </div>
                <div className="navigation-button">
                    <PrimaryButton onClicked={() => { navigate("/") }} width="8rem" color="var(--primary)" text="Back" icon={null} />
                </div>

            </main>
        </div>
    );
};

export default PermitCheck;

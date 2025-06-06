import GlobalAccordion from "../../components/GlobalAccordion/GlobalAccordion";
import "./style.css";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/Icons/ArrowRight";



const WasteType = () => {

    const navigate = useNavigate();



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page-container" >
            <main className="main-content">
                <div className="skip-picker-big-header">
                    {"Waste Type"}
                </div>
                <div className="navigation-button">
                    <PrimaryButton onClicked={() => { navigate("/") }} width="8rem" color="var(--primary)" text="Continue" icon={<ArrowRightIcon />} />
                </div>

            </main>
        </div>
    );
};

export default WasteType;

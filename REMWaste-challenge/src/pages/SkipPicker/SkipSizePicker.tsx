import GlobalAccordion from "../../components/GlobalAccordion/GlobalAccordion";
import "./style.css";
// import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { useEffect, useState } from "react";
// import dayjs from "dayjs";
import skips from "../../../skips.json"
import ConfirmationPopUp from "../../components/ConfirmationPopUp/ConfirmationPopUp";
import { useNavigate } from "react-router-dom";

export interface Skip {
    id: number,
    size: number,
    hire_period_days: number,
    transport_cost: number | null,
    per_tonne_cost: number | null,
    price_before_vat: number,
    vat: number,
    postcode: string,
    area: string,
    forbidden: boolean,
    created_at: string,
    updated_at: string,
    allowed_on_road: boolean,
    allows_heavy_waste: boolean,
    image: string;
}

const SkipSizePicker = () => {
    const navigate = useNavigate();

    const [selected, setSelected] = useState<number | null>(null)
    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [selectedPrice, setSelectedPrice] = useState<number | null>(null)
    const [selectedHire, setSelectedHire] = useState<number | null>(null)
    const [popUpOpen, setPopUpOpen] = useState<boolean>(false)

    const handleSelectSkip = (index: number | null, size: number | null, price: number | null, hire: number | null) => {
        setSelected(index)
        setSelectedSize(size)
        setSelectedPrice(price)
        setSelectedHire(hire)
        if (index !== null) {
            setPopUpOpen(true)
        }
        if (index === null) {
            setPopUpOpen(false)
        }
    }



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page-container" >
            <main className="main-content">
                <div className="skip-picker-big-header">
                    {"Choose Your Skip Size"}
                </div>
                <p className="skip-picker-small-header">
                    {"Select the skip size that best suits your needs"}
                </p>

                <div className="skip-picker-row">
                    {skips && skips?.length > 0 && skips?.map((skip: Skip, index: number) => (
                        <GlobalAccordion
                            key={index}
                            index={index}
                            skip={skip}
                            selected={selected}
                            onClick={() => {
                                if (selected === index) {
                                    handleSelectSkip(null, null, null, null)
                                }
                                else {
                                    handleSelectSkip(index, skip.size, (skip.price_before_vat + (skip.price_before_vat * skip.vat / 100)), skip.hire_period_days)
                                }
                            }}
                        />
                    ))}
                </div>
                <ConfirmationPopUp
                    height={8}
                    width={50}
                    size={selectedSize}
                    price={selectedPrice}
                    hire={selectedHire}
                    isOpen={popUpOpen}
                    onConfirm={() => {
                        navigate("/permit-check")
                    }}
                    onClose={() => {
                        setPopUpOpen(false)
                        navigate("/waste-type")
                    }}
                />
            </main>
        </div>
    );
};

export default SkipSizePicker;

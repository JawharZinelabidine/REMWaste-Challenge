import GlobalAccordion from "../../components/GlobalAccordion/GlobalAccordion";
import "./style.css";
// import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { useEffect, useState } from "react";
// import dayjs from "dayjs";
import skips from "../../../skips.json"
import GlobalStepper from "../../components/Stepper/Stepper";

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
    allows_heavy_waste: boolean
}

const SkipSizePicker = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="page-container" >
            <main className="main-content">
                <div className="home-big-header">
                    {"Choose Your Skip Size"}
                </div>
                <p className="home-small-header">
                    {"Select the skip size that best suits your needs"}
                </p>

                <div className="home-trips-row">
                    {skips && skips?.length > 0 && skips?.map((skip: Skip, index: number) => (
                        <GlobalAccordion
                            index={index}
                            key={index}
                            skip={skip}
                            onClick={() => {

                            }}
                        />
                    ))}
                    {!skips?.length && (
                        <div className="no-trips">{"No trips available"}</div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default SkipSizePicker;

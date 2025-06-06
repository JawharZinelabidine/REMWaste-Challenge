import "./style.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Skip } from "../../pages/SkipPicker/SkipSizePicker";
import { ArrowDownIcon } from "../../assets/Icons/ArrowDown";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { ArrowRightIcon } from "../../assets/Icons/ArrowRight";
import { WeightIcon } from "../../assets/Icons/WeightIcon";

interface Props {
    skip: Skip;
    index: number;
    selected: number | null;
    onClick: () => void;
}

const GlobalAccordion = ({ skip, index, selected, onClick }: Props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <Accordion  >
            <AccordionSummary
                expandIcon={<ArrowDownIcon color="var(--primary)" />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordion-header"
                style={{ borderRadius: index === 0 ? "0.5rem 0.5rem 0rem 0rem" : undefined }}
            >
                <span className="skip-header" style={{ width: isMobile ? "95%" : "98%" }}>
                    <Typography component="span" className="skip-title">{`${skip.size} Yard Skip`}</Typography>
                    <Typography component="span" className="skip-price">{`£${(skip.price_before_vat + (skip.price_before_vat * skip.vat / 100)).toFixed(0)}`}</Typography>
                </span>
            </AccordionSummary>
            <AccordionDetails className="accordion-body" style={{ borderRadius: "0.5rem" }}>
                <div className={isMobile ? "skip-body-mobile" : "skip-body"}>
                    <div>
                        <span className="skip-image-container">
                            <img src={skip.image} className="skip-image" style={{ width: isMobile ? "100%" : "34rem", height: isMobile ? "14rem" : "21rem" }} />
                            <div
                                className={`skip-pill ${isMobile ? "mobile" : ""}`}
                            >
                                <div className="skip-image-pill">
                                    <WeightIcon />
                                    {skip.size}
                                </div>

                            </div>

                        </span>
                        <Typography className="skip-description">
                            {`${skip.hire_period_days} day hire period`}
                        </Typography>
                    </div>
                    <div className={isMobile ? "skip-button-mobile" : "skip-button"}>
                        <PrimaryButton selected={selected === index} text={selected === index ? "Selected" : "Select This Skip"} icon={selected !== index ? <ArrowRightIcon /> : null} color={selected === index ? "var(--primary)" : "var(--secondary)"} width={isMobile ? "100%" : "15rem"} onClicked={onClick} />
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};

export default GlobalAccordion;
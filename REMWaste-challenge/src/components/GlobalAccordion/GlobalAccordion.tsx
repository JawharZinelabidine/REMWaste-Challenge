import { useNavigate } from "react-router-dom";
import "./style.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Skip } from "../../pages/SkipPicker/SkipSizePicker";
import { ArrowDownIcon } from "../../assets/Icons/ArrowDown";
import fourYarder from "../../assets/Images/4-yarder-skip.jpg"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface Props {
    skip: Skip;
    index: number;
    onClick?: () => void;
}

const GlobalAccordion = ({ skip, index, onClick }: Props) => {
    const navigate = useNavigate();

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
                <span className="skip-header">
                    <Typography component="span" className="skip-title">{`${skip.size} Yard Skip`}</Typography>
                    <Typography component="span" className="skip-price">{`£${skip.price_before_vat + (skip.price_before_vat * skip.vat / 100)}`}</Typography>
                </span>
            </AccordionSummary>
            <AccordionDetails className="accordion-body" style={{ borderRadius: "0.5rem" }}>
                <span className="skip-image-container">
                    <img src={fourYarder} className="skip-image" style={{ width: isMobile ? "100%" : "34rem", height: isMobile ? "14rem" : "21rem" }} />
                </span>
                <Typography className="skip-description">
                    {`${skip.hire_period_days} day hire period`}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default GlobalAccordion;
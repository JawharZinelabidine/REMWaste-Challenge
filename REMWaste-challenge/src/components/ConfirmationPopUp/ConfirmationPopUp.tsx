import "./style.css";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { ArrowRightIcon } from "../../assets/Icons/ArrowRight";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface Props<T extends Record<string, any>> {
    onConfirm: (event?: any) => void;
    onClose: () => void;
    isOpen: boolean;
    width: number;
    height: number;
    size?: number | null;
    price?: number | null;
    hire?: number | null;
}
const ConfirmationPopUp = <T extends Record<string, any>>({ width, height, onConfirm, onClose, isOpen, size, price, hire }: Props<T>) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    if (!isOpen) return null;
    return (
        <div
            style={{
                position: "fixed",
                bottom: 40,
                left: 0,
                right: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                zIndex: "99",
            }}
        >
            <div
                style={{
                    background: "white",
                    width: width ? `${width}rem` : `${"400px"}`,
                    height: `100%`,
                    padding: "30px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    borderRadius: "25px",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                    textAlign: "center",
                }}
            >
                <div
                    className="ConfirmationContainer">
                    <div className="ConfirmationTextContainer">
                        <span className="ConfirmationDescription">{"Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost."}</span>
                    </div>
                    {!isMobile && (
                        <div className="confirmation-bottom-row">
                            <div className="confirmation-info">
                                <span className="confirmation-yard">
                                    {`${size} Yard Skip`}
                                </span>
                                <span className="confirmation-price">
                                    {`£${price}`}
                                    <span className="confirmation-yard">{` ${hire} day hire`}</span>
                                </span>
                            </div>
                            <div className="Buttons">
                                <button onClick={onClose} className="CancelButton">
                                    {"Back"}
                                </button>
                                <PrimaryButton onClicked={onConfirm} width="8rem" color="var(--primary)" text="Continue" icon={<ArrowRightIcon />} />
                            </div>
                        </div>
                    )}
                    {isMobile && (
                        <div className="confirmation-bottom-column">
                            <div className="confirmation-info-mobile">
                                <span className="confirmation-yard">
                                    {`${size} Yard Skip`}
                                </span>
                                <span className="confirmation-price">
                                    {`£${price}`}
                                    <span className="confirmation-yard">{` ${hire} day hire`}</span>
                                </span>
                            </div>
                            <div className="buttons-row">
                                <button onClick={onClose} className="CancelButton">
                                    {"Back"}
                                </button>
                                <PrimaryButton onClicked={onConfirm} width="8rem" color="var(--primary)" text="Continue" icon={<ArrowRightIcon />} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default ConfirmationPopUp;

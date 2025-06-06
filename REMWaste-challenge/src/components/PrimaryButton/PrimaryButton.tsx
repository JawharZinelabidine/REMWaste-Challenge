import { JSX } from "react";
import "./style.css"

interface Props {
    text: string;
    width: string;
    color: string;
    selected?: boolean;
    onClicked: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon: React.ReactElement | null
}
export const PrimaryButton = ({ text, onClicked, color, width, selected, icon }: Props): JSX.Element => {
    return (
        <button
            className={`primary-button-container ${selected === false ? "primary-button-container-unselected" : "primary-button-container-selected"}`}
            style={{
                background: color,
                width: width ? width : "15rem",

            }}
            onClick={onClicked}
        >
            <div className="global-add-text"> <span>{text}</span> <span>{icon}</span></div>
        </button>
    );
};

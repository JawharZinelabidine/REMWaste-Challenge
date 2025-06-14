
import React from "react";

interface Props {
    color: string;
}

export const ArrowDownIcon = ({ color = "var(--primary)" }: Props) => {
    return (
        <svg width="16" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9393 12.5607C11.5251 13.1464 12.4749 13.1464 13.0607 12.5607L22.6066 3.01472C23.1924 2.42893 23.1924 1.47919 22.6066 0.893398C22.0208 0.307611 21.0711 0.307611 20.4853 0.893398L12 9.37868L3.51472 0.893398C2.92893 0.307611 1.97919 0.307611 1.3934 0.893398C0.807611 1.47919 0.807611 2.42893 1.3934 3.01472L10.9393 12.5607ZM10.5 10V11.5H13.5V10H10.5Z" fill={color} />
        </svg>
    );
};




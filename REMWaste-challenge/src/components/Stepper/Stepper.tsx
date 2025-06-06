import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { CalendarIcon } from '../../assets/Icons/CalendarIcon';
import "./style.css"
import { CustomConnector } from './StepConnector';
import { useState } from 'react';
import { LocationIcon } from '../../assets/Icons/LocationIcon';
import { WasteIcon } from '../../assets/Icons/WasteIcon';
import { TruckIcon } from '../../assets/Icons/TruckIcon';
import { PermitIcon } from '../../assets/Icons/PermitIcon';
import { PaymentIcon } from '../../assets/Icons/PaymentIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface Props {
    page: number;
}


const GlobalStepper = ({ page }: Props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();


    const steps = [{ label: 'Postcode', number: 1, url: "", icon: (isActive: boolean) => (<LocationIcon color={isActive ? "var(--primary)" : "var(--grey)"} />) }, { label: 'Waste Type', number: 2, url: "/waste-type", icon: (isActive: boolean) => (<WasteIcon color={isActive ? "var(--primary)" : "var(--grey)"} />) }, { label: 'Select Skip', number: 3, url: "/", icon: (isActive: boolean) => (<TruckIcon color={isActive ? "var(--primary)" : "var(--grey)"} />) }, { label: 'Permit Check', number: 4, url: "permit-check", icon: (isActive: boolean) => (<PermitIcon color={isActive ? "var(--primary)" : "var(--grey)"} />) }, { label: 'Choose Date', number: 5, url: "", icon: (isActive: boolean) => (<CalendarIcon color={isActive ? "var(--primary)" : "var(--grey)"} />) }, { label: 'Payment', number: 6, url: "", icon: (isActive: boolean) => (<PaymentIcon color={isActive ? "var(--primary)" : "var(--grey)"} />) }];

    return (
        <Box className="sidebar" sx={{ marginTop: "2rem" }}       >
            <Stepper activeStep={1} orientation={isMobile ? 'horizontal' : 'vertical'}
                style={{
                    marginLeft: isMobile ? 0 : "2rem",
                    marginTop: isMobile ? "1rem" : "8rem",
                    width: isMobile ? "100%" : undefined,
                }} connector={<CustomConnector />}
            >
                {steps.map((step, index) => {
                    const labelProps: {
                        optional?: React.ReactNode;
                        error?: boolean;
                    } = {};
                    const isCompleted = step.number < page;
                    const isActive = step.number === page

                    return (
                        <Step key={step.label}
                            completed={isCompleted}
                            active={isActive}
                        >
                            <StepLabel icon={step.icon(step.number <= page)}  {...labelProps} style={{ cursor: (isCompleted || isActive) ? "pointer" : "not-allowed" }} onClick={() => (isCompleted ? navigate(step.url) : undefined)}
                            >
                                <span className='stepper-label'>
                                    {step.label}
                                </span>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}


export default GlobalStepper
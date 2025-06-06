import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react';

const getCustomConnector = (isMobile: boolean) =>
    styled(StepConnector)(({ theme }) => ({
        [isMobile ? `&.${stepConnectorClasses.horizontal}` : `&.${stepConnectorClasses.vertical}`]: {
            marginLeft: 10,
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: 'var(--grey)',
            borderLeftWidth: 2,
            minWidth: isMobile ? 110 : undefined,
            minHeight: !isMobile ? 24 : undefined,
        },
        [`&.Mui-completed .${stepConnectorClasses.line}`]: {
            borderColor: 'var(--primary)',
        },
        [`&.Mui-active .${stepConnectorClasses.line}`]: {
            borderColor: 'var(--grey)',
        },
    }));

export const CustomConnector = (props: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const StyledConnector = React.useMemo(() => getCustomConnector(isMobile), [isMobile]);

    return <StyledConnector {...props} />;
};

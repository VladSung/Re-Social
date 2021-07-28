import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

let theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: 'rgb(0 0 255)',
        },
    },
});
theme = createTheme({
    ...theme,
    components: {
        MuiPaper: {
            root: {
                background: theme.palette.background.default,
            }
        }
    }
})

window.theme = theme
export const withTheme = (Component) => (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...props} />
        </ThemeProvider>
    )
}

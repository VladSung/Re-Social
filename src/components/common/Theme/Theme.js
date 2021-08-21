import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const withTheme = (Component) => (props) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') : false)
    const theme = createTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#065fd4'//'#f3bb68'
            },
            secondary: {
                main: red[500]
            },

            background: {
                default: darkMode ? '#212121' : '#f3f3f3',
                paper: darkMode ? '#424242' : '#f5f5f5',
            },
        },
        typography: {
            fontFamily: [
                'system-ui',
                '-apple-system',
                '"Segoe UI"',
                'Roboto',
                'Ubuntu',
                'sans-serif'
            ].join(','),
        },
    })
    window.theme = theme;
    const switchTheme = (props) => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            localStorage.setItem('darkMode', !darkMode)
        } else {
            localStorage.removeItem('darkMode')
        }
    }
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Component {...props} switchTheme={switchTheme} />
        </ThemeProvider>
    );
}



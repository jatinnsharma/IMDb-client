import React from 'react'
import NotificationProvider from './NotificationProvider'
import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'

export const ContextProviders = ({ children }) => {
    return (
        <AuthProvider>
        <NotificationProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </NotificationProvider>
        </AuthProvider>
    )
}


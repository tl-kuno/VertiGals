import { JSX } from 'react'

import GoogleCalendar from '../components/calendar'

interface WindowMap {
    [key: string]: {
        title: string
        component?: JSX.Element
    }
}

export const WindowMap: WindowMap = {
    calendar: { title: 'Upcoming Events', component: GoogleCalendar() },
}

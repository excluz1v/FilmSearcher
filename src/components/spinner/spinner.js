import React from 'react'
import { spinner } from './Spinner-1s-200px.svg'

export default function Spinner() {
    return (
        <div>
            <img alt=' ...loading' src={spinner}
                style={{ width: '20rem', margin: 'auto', display: 'block' }} />
        </div>
    )
}

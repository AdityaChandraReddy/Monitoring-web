import { Avatar } from '@mui/material'
import React from 'react'

interface Props {
    userName: string,

}

function Client({ userName }: Props) {
    return (
        <div className='client' >
            <Avatar />
            <span className='username' >{userName}</span>
        </div>
    )
}

export default Client
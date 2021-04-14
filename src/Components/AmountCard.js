import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function AmountCard({ amount, id, onOpenModal }) {

    return (
        <Card style={{ marginBottom: 10, cursor: 'pointer' }}
            onClick={()=> onOpenModal(id)}>
            <CardContent>
                <Typography>
                    Tarjeta de regalo
                </Typography>
                <Typography>
                    ${amount}
                </Typography>
            </CardContent>
        </Card>
    )
}
import React, { useState } from 'react';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AmountCard from './AmountCard';
import GiftCardModal from './GiftCardModal'

const userInfo = {
    name: 'Martin',
    amount: 80,
    giftcards: [
        {
            id: 1,
            amount: 50
        },
        {
            id: 2,
            amount: 50
        },
    ]
};

export default function ActiveCard() {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amoutCardId, setAmoutCardId] = useState(undefined);


    function handleOpenModal(amoutCardId) {
        setIsModalOpen(true);
        setAmoutCardId(amoutCardId);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }


    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Card variant="outlined" style={{ width: 350, margin: 5 }}>
                <CardContent>
                    <Typography variant="h5">
                        Felicidades <b>{userInfo.name}</b> tienes un monto de
                </Typography>
                    <Typography variant="h5">
                        ${userInfo.amount} en tarjeta de regalo
                </Typography>
                    <Typography>
                        para poder usarla tienes que activarlas
                </Typography>
                    <Grid style={{ marginTop: 10 }} container direction="column">
                        {
                            userInfo.giftcards.map(({ id, amount }) =>
                                <AmountCard key={id} id={id} amount={amount} onOpenModal={handleOpenModal} />)
                        }
                    </Grid>
                </CardContent>
            </Card>
            <GiftCardModal amoutCardId={amoutCardId} isOpen={isModalOpen} onClose={handleCloseModal} />
        </Grid>
    )
}



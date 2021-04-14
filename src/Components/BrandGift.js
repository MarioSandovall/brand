import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function BrandGift({ id, imageUrl, brandSelected, onSelect }) {

    let styleSelected = { margin: 5, cursor: 'pointer' }
    if (brandSelected === id) {
        styleSelected = {
            ...styleSelected,
            borderStyle: 'solid',
            borderColor: 'green',
            borderWidth: '1px'
        }
    }

    return (
        <Card style={styleSelected}
            onClick={() => onSelect(id)}>
            <CardContent >
                <img alt='' src={imageUrl} style={{ width: 100, height: 50, objectFit: 'cover' }} />
            </CardContent>
        </Card>
    )
}


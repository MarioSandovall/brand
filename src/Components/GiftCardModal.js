import React, { useState } from "react";


import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import BrandGift from "./BrandGift";

const imageUrl = 'http://cdn.shopify.com/s/files/1/0899/2262/files/255.png?v=10504390230999457819'

export default function GiftCardModal({ amoutCardId, isOpen, onClose }) {

    const [brandSelected, setBrandSelectd] = useState(undefined);

    function handleSave() {
        console.log('amoutCardId', amoutCardId);
        console.log('Brand Selected', brandSelected);
        handleClose();
        setBrandSelectd(undefined);
    };

    const styledDialogContent = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyItems: 'center',
        justifyContent: 'center',
        width: 300,
    }

    function handleSelect(brandId) {
        setBrandSelectd(brandId)
    }

    function handleClose() {
        onClose();
        setBrandSelectd(undefined);
    }

    return (
        <Dialog open={isOpen} >
            <DialogContent style={styledDialogContent}>
                <BrandGift imageUrl={imageUrl} id={1} brandSelected={brandSelected} onSelect={handleSelect} />
                <BrandGift imageUrl={imageUrl} id={2} brandSelected={brandSelected} onSelect={handleSelect} />
                <BrandGift imageUrl={imageUrl} id={3} brandSelected={brandSelected} onSelect={handleSelect} />
                <BrandGift imageUrl={imageUrl} id={4} brandSelected={brandSelected} onSelect={handleSelect} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    onClick={handleSave}
                    color="primary"
                >
                    Activate
          </Button>
            </DialogActions>
        </Dialog>
    );
}

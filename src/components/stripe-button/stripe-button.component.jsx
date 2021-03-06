import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IR3I1FIhTeLNQmVtLlDcn0GRpPZm5hf0eAxChya15BKPICt1cm2f1D49FxaNGfDN4bUiV4cdmJwhTHV830OcEjH00VMgjWYEN';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://www.houstontx.gov/parking/homepage/500-pay-in-person.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;
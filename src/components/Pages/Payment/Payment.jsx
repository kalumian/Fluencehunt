import Header from "../../Child_Components/General_Components/Header/Header";
import Card_option from "../../Child_Components/Payment_Components/Card_option";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Payment() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <section className="Payment">
      <Helmet>
        <title>Payment | Fluencehunt</title>
      </Helmet>
      <Header />
      <div className="content">
        <div className="details">
          <h1>Payement Deteils</h1>
          <p>Complete your purchase by providing your payement details.</p>
          <form action="">
            <div className="row">
              <label htmlFor="payment-email">Email address</label>
              <input
                type="email"
                id="payment-email"
                placeholder="enter email"
              />
            </div>
            <div className="row">
              <label htmlFor="card-details-payment">Card details</label>
              <input
                type="date"
                id="card-details-payment"
                placeholder="livlu behider"
              />
            </div>
            <div className="row">
              <label htmlFor="cardholder-name-payment">Cardholder name</label>
              <input
                type="email"
                id="cardholder-name-payment"
                placeholder="livlu behider"
              />
            </div>
            <div className="row">
              <label htmlFor="billing-address-payment">Billing address</label>
              <select id="billing-address-payment">
                <option value="">United State</option>
              </select>
              <div className="row-0">
                <input type="text" placeholder="ZIP" />
                <input type="text" placeholder="State" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="vat-number-payment">VAT number</label>
              <input
                type="text"
                id="vat-number-payment"
                placeholder="VAT number"
              />
            </div>
            <div className="total">
              <div>
                <span>Sub total</span>
                <span>0$</span>
              </div>
              <div>
                <span>VAT 20%</span>
                <span>0$</span>
              </div>
              <div>
                <span>Total</span>
                <span>49$</span>
              </div>
            </div>
            <button>Pay $49.90</button>
          </form>
        </div>
        <div className="options">
          <Card_option
            count={5}
            title="Starter Pack"
            details="Try our search and analyze 1 influencer at a time ."
            state={false}
          />
          <Card_option
            count={49}
            title="Essentials Pack"
            details="Full access to our Data and features . . ."
            state={false}
          />
          <Card_option
            count={99}
            title="Team Pack"
            details="Try our search and analyze 1 influencer at a time ."
            state={true}
          />
          <Card_option
            count={249}
            title="Professionals Pack"
            details="Try our search and analyze 1 influencer at a time ."
            state={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Payment;

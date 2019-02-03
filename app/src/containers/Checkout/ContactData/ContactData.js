import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Mat",
        address: {
          street: "teststreet 1",
          zipcode: "41351",
          country: "switzerland"
        },
        email: "test@test"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={classes.Contact}>
        <h4>Enter your Contact Data</h4>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name" />
            <input className={classes.Input} type="text" name="email" placeholder="Your email" />
            <input className={classes.Input} type="text" name="street" placeholder="Your street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Your postal" />

            <Button btnType="Success" clicked={this.orderHandler}>
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;

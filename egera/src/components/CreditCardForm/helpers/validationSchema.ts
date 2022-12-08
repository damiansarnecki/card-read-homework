import * as Yup from "yup";
import valid from "card-validator";

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short").
	max(30, "Name is too long")
    .matches(/\w+\s\w+/, "You must enter full name")
    .required("Name is required"),
  cardNumber: Yup.string()
    .matches(/^[0-9 ]+$/, "Ivalid card number") // Only basic validation for now
    .length(19, "Invalid card number length")
    .required("Card number is required"),
  expirationDate: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/,
      "Invalid expiration date"
    )
    .required("Expiration date is required"),

  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVV")
    .required("CVV is required"),
});

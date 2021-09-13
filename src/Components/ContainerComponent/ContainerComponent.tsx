import React, { useState } from "react";
import "./ContainerComponent.css";
import InputComponent from "../InputComponent/InputComponent";
import { Form } from "react-bootstrap";
import Button from "@material-ui/core/Button";

const ContainerComponent = () => {
  //felter jeg skal bruge:
  //Årlig lejeindkomst pr. lejemål - input
  //Årlig ejerudgift - input
  //Årlig ejendomsskat - input
  //Pris
  //Procentkost for lån
  //Egen indsats

  const [annualIncome, setAnnualIncome] = useState(0);
  const [annualOwnershipCost, setAnnualOwnerShipCost] = useState(0);
  const [annualPropertyTax, setAnnualPropertyTax] = useState(0);
  const [retailPrice, setRetailPrice] = useState(0);
  const [loanExpenses, setLoanExpenses] = useState(0);
  const [paymentPercentage, setPaymentPercentage] = useState(0);

  //results
  const [payment, setPayment] = useState(0);
  const [mortgage, setMortgage] = useState(0);
  const [costOfMortgage, setCostOfMortgage] = useState(0);
  const [totalAnnualCost, setTotalAnnualCost] = useState(0);
  const [interest, setInterest] = useState(0);

  const onChangeAnnualIncome = (value: string) => {
    setAnnualIncome(parseFloat(value));
  };

  const onChangeAnnualOwnershipCost = (value: string) => {
    setAnnualOwnerShipCost(parseFloat(value));
  };

  const onChangeAnnualPropertyTax = (value: string) => {
    setAnnualPropertyTax(parseFloat(value));
  };

  const onChangeRetailPrice = (value: string) => {
    setRetailPrice(parseFloat(value));
  };

  const onChangeLoanExpenses = (value: string) => {
    setLoanExpenses(parseFloat(value));
  };

  const onChangeOwnPayment = (value: string) => {
    setPaymentPercentage(parseFloat(value));
  };

  const getPercentage = (percent: number, value: number) => {
    return (percent / 100) * value;
  };

  const calculateInterest = () => {
    setMortgage(getPercentage(80, retailPrice));
    setPayment(getPercentage(paymentPercentage, retailPrice));
    setCostOfMortgage(getPercentage(loanExpenses, mortgage));
    setTotalAnnualCost(
      annualOwnershipCost - annualPropertyTax + costOfMortgage
    );

    let interest = Math.round(
      ((annualIncome - totalAnnualCost) / payment) * 100
    );
    setInterest(interest);
  };

  return (
    <div className="container-component">
      <div className="col1">
        <Form noValidate autoComplete="off">
          <legend>Forrentningsberegner</legend>
          <br />
          <InputComponent
            fieldId="annualIncome"
            placeholderText="Årlig Lejeindtægt"
            handleChange={onChangeAnnualIncome}
            inputAdornment="Kr"
          />
          <InputComponent
            fieldId="annualOwnershipCost"
            placeholderText="Årlig Ejerudgift"
            handleChange={onChangeAnnualOwnershipCost}
            inputAdornment="Kr"
          />
          <InputComponent
            fieldId="annualPropertyTax"
            placeholderText="Årlig Ejendomsskat"
            handleChange={onChangeAnnualPropertyTax}
            inputAdornment="Kr"
          />
          <InputComponent
            fieldId="retailPrice"
            placeholderText="Købspris"
            handleChange={onChangeRetailPrice}
            inputAdornment="Kr"
          />
          <InputComponent
            fieldId="loanExpenses"
            placeholderText="Låneomkostninger i %"
            handleChange={onChangeLoanExpenses}
            inputAdornment="Kr"
          />
          <InputComponent
            fieldId="ownPayment"
            placeholderText="Udbetaling i %"
            handleChange={onChangeOwnPayment}
            inputAdornment="Kr"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ justifyContent: "end" }}
            onClick={() => calculateInterest()}
          >
            Udregn
          </Button>
        </Form>
      </div>
      <div className="col2">
        <div className="resultContainer">
          <legend>Tallene:</legend>
          <br /> <br /> <br />
          <p className="resultParagraph">
            Pris:&emsp; {retailPrice ? retailPrice.toLocaleString() : 0} kr
          </p>
          <br />
          <p className="resultParagraph">
            Årlig Lejeindkomst:&emsp;{" "}
            {annualIncome ? annualIncome.toLocaleString() : 0} kr
          </p>
          <br />
          <p className="resultParagraph">
            Realkreditlån (80%):&emsp; {mortgage.toLocaleString()} kr
          </p>
          <br />
          <p className="resultParagraph">
            Udbetaling ({paymentPercentage ? paymentPercentage : 0}%):&emsp;{" "}
            {payment.toLocaleString()} kr
          </p>
          <br />
          <p>
            Udgift af Realkredit ({loanExpenses}%):&emsp;{" "}
            {costOfMortgage ? costOfMortgage.toLocaleString() : 0} kr
          </p>
          <br />
          <p className="resultParagraph">
            Samlet Årlig Udgift:&emsp;{" "}
            {totalAnnualCost ? totalAnnualCost.toLocaleString() : 0} kr
          </p>
          <br />
          <p className="resultParagraph">Forrentning:&emsp; {interest}%</p>
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;

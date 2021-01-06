import React from 'react';
import { connect } from "react-redux";
import { setOperand, addClicked, equalsClicked, multiplyClicked, divideClicked, subtractClicked, clearClicked } from "../redux/actions";

const Calculator = ({
  setOperand,
  addClicked,
  equalsClicked,
  multiplyClicked,
  divideClicked,
  subtractClicked,
  clearClicked,
  operandA,
  operandB,
  operation }) => {
  return (
    <div>
      <input type="number"
        onChange={e => setOperand(e.target.value)}
        value={operandB}
      />
      <button onClick={addClicked}>
        +
      </button>
      <button onClick={subtractClicked}>
        -
      </button>
      <button onClick={multiplyClicked}>
        *
      </button>
      <button onClick={divideClicked}>
        /
      </button>
      <button onClick={() => equalsClicked(operandA, operandB, operation)}>
        =
      </button>
      <button onClick={clearClicked}>
        C
      </button>
    </div>)
};

function mapStateToProps(state) {
  const { operandA, operandB, operation } = state.calculator;

  return { operandA, operandB, operation };
};

export default connect(mapStateToProps, {
  addClicked,
  setOperand,
  equalsClicked,
  multiplyClicked,
  divideClicked,
  subtractClicked,
  clearClicked
})(Calculator);

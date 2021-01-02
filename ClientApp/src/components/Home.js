import React from 'react';
import { connect } from "react-redux";
import { setOperand, addClicked, equalsClicked, multiplyClicked, divideClicked, subtractClicked, clearClicked } from "../redux/actions";

const Home = ({
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

const mapStateToProps = state => ({
  operandA: state.operandA,
  operandB: state.operandB,
  operation: state.operation
});

export default connect(mapStateToProps, {
  addClicked,
  setOperand,
  equalsClicked,
  multiplyClicked,
  divideClicked,
  subtractClicked,
  clearClicked
})(Home);

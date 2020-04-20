import React from 'react';

function SessionLength(props) {
  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }

  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  return (
    <section>
      <h2>¡Sigue asi!</h2>
      <section className="interval-container">
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={decreaseSession}
        >
          -
        </button>

        <p className="interval-length">{props.sessionLength}</p>

        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={increaseSession}
        >
          +
        </button>
      </section>
    </section>
  );
}

export default SessionLength;
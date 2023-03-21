import React from 'react';
type FarewellProps = {
  name?: string;
};
const Farewell = (props: FarewellProps) => {
  return <div>Bye {props.name}</div>;
};

export default Farewell;

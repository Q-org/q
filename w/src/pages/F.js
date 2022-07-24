import Frame, { useFrame } from 'react-frame-component';
import Bill from './b/odiv_zztzyfp_ewmxz01';
import React, { useState } from 'react';
const InnerComponent = () => {
  // Hook returns iframe's window and document instances from Frame context
  const { document, window } = useFrame();

  return (
    <>
      <Bill/>
    </>
  );
};

export default () => (
  <Frame>
    <InnerComponent />
  </Frame>
);
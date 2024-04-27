import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'Transformando vidas, una sonrisa a la vez: ¡Confíe en nuestro equipo experto!',
        1500,
        'Porque cada sonrisa cuenta: ¡Deje que cuidemos de su salud bucal con pasión y dedicación!',
        1500
      ]}
      wrapper='span'
      speed={60}
      repeat={Infinity}
    />
  );
};

export default Typewriter;

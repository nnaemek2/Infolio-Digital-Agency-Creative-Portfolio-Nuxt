'use client';
import React, { useEffect, useRef } from 'react';

const RollingText = ({ text = 'home' }) => {
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    const textContainer = document.createElement('div');
    textContainer.classList.add('block');

    for (let letter of text) {
      let span = document.createElement('span');
      span.innerText = letter.trim() === '' ? '\xa0' : letter;
      span.classList.add('letter');
      textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));

    element.addEventListener('mouseover', () => {
      element.classList.remove('play');
    });
  }, [text]);

  return <span class="rolling-text" ref={elementRef} />;
};

export default RollingText;

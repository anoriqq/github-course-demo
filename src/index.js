function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hi';

  return element;
}

document.body.appendChild(component());

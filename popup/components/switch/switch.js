core.components.switch = () => {
  let component = document.createElement('div');
  component.className = 'switch';
  component.innerHTML = '<span class="slider"></span>';

  return component;
};

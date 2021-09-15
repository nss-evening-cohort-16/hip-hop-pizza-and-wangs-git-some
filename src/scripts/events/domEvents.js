const clickListener = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    const [targetID, targetKey] = e.target.id.split('--');

    console.warn(`ID: ${targetID}, Key: ${targetKey}`);

    switch (targetID) {
      default: break;
    }
  });
};

export default clickListener;

import showOrderDetails from '../components/orderDetails';

const clickListener = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    const [targetID, targetKey] = e.target.id.split('--');

    console.warn(`ID: ${targetID}, Key: ${targetKey}`);

    switch (targetID) {
      case 'order-detail-btn':
        showOrderDetails(targetKey);
        break;

      default: break;
    }
  });
};

export default clickListener;

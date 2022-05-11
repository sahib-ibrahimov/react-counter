const initStore = {
  goods: [
    {
      id: 0,
      title: "Logitech C920 Hd Pro Webcam",
      description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
      price: 120
    },
    {
      id: 1,
      title: "Logitech USB Headset H390 with Noise Cancelling Mic",
      description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
      price: 50
    },
    {
      id: 2,
      title: "Anker PowerCore 10000 Portable Charger",
      description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
      price: 150
    }
  ],
  cart: []
};

export default function reducer(store = initStore, action) {
  switch(action.type) {
    case 'ADD_TO_CART': {
      const thing = store.goods.find(
        item => item.id === action.payload.id
      );
      const cart = [ ...store.cart, thing ];
      const newStore = { ...store, cart };
      return newStore;
    };
    case 'REMOVE_FROM_CART': {
      let cart = store.cart.slice();
      cart.splice(action.payload.index,1);
      const newStore = { ...store, cart };
      return newStore;
    };
    default: return store;
  }
}

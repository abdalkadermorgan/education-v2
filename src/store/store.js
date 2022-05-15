import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetSliders: "[SetSliders] Action",
  SetCourses: "[SetCourses] Action",
  SetInfoGraphic: "[SetInfoGraphic] Action",
  SetAddedCart: "[SetAddedCart] Action",
};

const initialState = {
  sliders: [],
  courses: [],
  cart: [],
  infographics: [],
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,
    whitelist: ["sliders", "courses", "infographics","cart"],
  },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SetSliders: {
        const sliders = action.payload.sliders;

        return { ...state, sliders };
      }
      case actionTypes.SetCourses: {
        const courses = action.payload.courses;

        return { ...state, courses };
      }
      case actionTypes.SetInfoGraphic: {
        const infographics = action.payload.infographics;

        return { ...state, infographics };
      }
      case actionTypes.SetAddedCart: {
        const cart = action.payload.cart;

        return { ...state, cart };
      }

      default:
        return state;
    }
  }
);

export const Actions = {
  setSliders: (sliders) => {
    return {
      type: actionTypes.SetSliders,
      payload: { sliders },
    };
  },

  SetCourses: (courses) => {
    return {
      type: actionTypes.SetCourses,
      payload: { courses },
    };
  },

  SetInfoGraphic: (infographics) => {
    return {
      type: actionTypes.SetInfoGraphic,
      payload: { infographics },
    };
  },

  SetAddedCart: (cart) => {
    return {
      type: actionTypes.SetAddedCart,
      payload: { cart },
    };
  },
};
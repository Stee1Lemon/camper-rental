export const handleCampervans = (state, { payload }) => {
  state.campervans = [...state.campervans, ...payload];
};

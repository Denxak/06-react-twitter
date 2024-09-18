export const CHANGE_STAT = 'CHANGE_STAT';

export const changeStat = (prop, delta) => ({
  type: CHANGE_STAT,
  payload: { prop, delta },
});
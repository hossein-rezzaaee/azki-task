export const getVehicleTypes = async () =>
  (await fetch('https://www.azki.com/api/product/vehicle/types')).json();

export const getInsurances = async () =>
  (await fetch('https://www.azki.com/api/product/third/companies')).json();

export const getDiscountPercents = async () =>
  (
    await fetch('https://www.azki.com/api/product/third/third-discounts')
  ).json();

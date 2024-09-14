'use client';
import { createContext, useState } from 'react';

export type TInquiry = Partial<{
  first_name: string;
  last_name: string;
  phone_number: string;
  vehicle_type: string;
  vehicle_model: string;
  last_insurance: string;
  third_discount_percent: string;
  driver_discount_percent: string;
}>;

export const InquiryContext = createContext<
  [TInquiry, React.Dispatch<React.SetStateAction<Partial<TInquiry>>>]
>([{}, () => {}]);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const contextValue = useState<TInquiry>({});

  return (
    <InquiryContext.Provider value={contextValue}>
      {children}
    </InquiryContext.Provider>
  );
};

export default ContextProvider;

import { InquiryContext } from '_providers/contextProvider';
import { useContext } from 'react';

export const useInquiry = () => useContext(InquiryContext);

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

export interface BannerType {
  id: number;
  title: string;
  sort: number;
  deeplink: string;
  button_text: string | null;
  media: Media;
  erid: string | null;
  inn: string | null;
  legal_name: string | null;
  vendor: Vendor | null;
}
export interface RestarauntCard {
  id: number;
  rating: string | null;
  general_info: {
    name: string;
  };
  image: {
    url: string;
  };
  logo: {
    url: string;
  };
}
interface Media {
  id: number;
  url: string;
  type: string;
}
interface Vendor {
  general_info: {
    name: string;
  };
  legal_info: {
    inn: string;
    legal_name: string;
  };
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type BannersResponse = BannerType[];

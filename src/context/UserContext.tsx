import { createContext, useState } from "react";
import { CartItemType } from "./CartContext";
import { ProductType } from "../components/Product";
import { fetchUser } from "../services/userServices";

export type UserType = {
  fullName: string;
  email: string;
  imgUrl: string;
  cart: CartItemType[];
  orders: object[];
  wishList: ProductType[];
  vendors: object[];
};

export type UserProviderValue = {
  user: UserType;
  setUser: React.Dispatch<UserType | null>;
};

const fetchedUser = await fetchUser();

const initialUser = fetchedUser.error ? null : fetchedUser;

export const UserContext = createContext<UserProviderValue | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

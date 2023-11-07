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
  updateUser: (update: UserType) => void;
};

const initialUser = await fetchUser();

export const UserContext = createContext<UserProviderValue | null>(null);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(initialUser);
  function updateUser(update: UserType) {
    setUser(update);
  }
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

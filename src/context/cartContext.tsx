import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";

export const CartContext = createContext({} as iCartContext);
interface Iprovider {
    children: ReactNode;
}
interface iCart {
    count: number;
    id: number;
    img: string;
    name: string;
    category: string;
    price: number;
}
interface iCartProd {
    id: number;
    img: string;
    name: string;
    category: string;
    price: number;
}
interface iCartContext {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    cart: iCart[];
    setCart: React.Dispatch<React.SetStateAction<iCart[]>>;
    toCart: ({ id, name, category, price }: any) => void;
    addUnit: (id: number) => void;
    removeTheUnits: (id: number) => void;
    delAll: () => void;
    delProdut: (id: number) => void;
    product: (e: any) => void
}
export const CartProvider = ({ children }: Iprovider) => {
    const [filter, setFilter] = useState([]);
    const [cart, setCart] = useState<iCart[]>([]);
    const [card, setCard] = useState([]);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0);

    useEffect(() => {
        api.get("products")
            .then(({ data }) => setCard(data))
            .catch((error) => console.log(error));
    }, []);
    const toCart = (id:number) => {
        card.map((item) => {
            const newList = cart.filter((item) => item.id !== id);
            if (item.id === id) {
                if (cart.includes(item)) {
                    const card = cart.find((elem) => elem.id === id);
                    card.amount += 1;
                    setCart([...newList, card]);
                    setTotal(total + card.price);
                } else {
                    item.amount = 1;
                    setCart([...newList, item]);
                    setTotal(total + item.price);
                }
            }
        });
    };

    const delAll = () => {
        setCart([]);
        setTotal(0);
    };

    const delProdut = (id:number) => {
        const filter = cart.filter((item) => item.id !== id);
        const product = cart.find((item) => item.id === id);
        let price = product.amount * product.price;
        setTotal(total - price);
        setCart(filter);
    };
    const addUnit = (id: number) => {
        const card = cart.find((item) => item.id === id);
        card.amount += 1;
        const newArray = cart.filter((item) => item.id !== id);
        setCart([...newArray, card]);
        setTotal(total + card.price);
    };

    const removeTheUnits = (id: number) => {
        const card = cart.find((item) => item.id === id);
        if (card.amount > 1) {
            card.amount -= 1;
            const newArray = cart.filter((item) => item.id !== id);
            setCart([...newArray, card]);
            setTotal(total - card.price);
        }
    };
    const product = (e:any) => {
        e.preventDefault();

        const itemSearch = search.toLowerCase();
        const itemResult = card.filter((item) => {
            const itemName = item.name.toLowerCase();
            const itemCategory = item.category.toLowerCase();

            if (itemSearch === itemName || itemSearch === itemCategory) {
                return item;
            }
        });
        setFilter(itemResult);
    };
    return (
        <CartContext.Provider
            value={{
                product,
                toCart,
                delAll,
                addUnit,
                removeTheUnits,
                delProdut,
                total,
                setTotal,
                cart,
                setCart,
                search,
                setSearch
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

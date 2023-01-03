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
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    cart: any;
    card: any
    filter: any
    search: string;
    setCart: React.Dispatch<React.SetStateAction<any>>;
    toCart: ({ id, name, category, price }: any) => void;
    addUnit: (id: number) => void;
    removeTheUnits: (id: number) => void;
    delAll: () => void;
    delProdut: (id: number) => void;
    product: (e: any) => void
    token: any
}
export const CartProvider = ({ children }: Iprovider) => {
    const [filter, setFilter] = useState<any[]>([]);
    const [cart, setCart] = useState<any[]>([]);
    const [card, setCard] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0);
    const token = localStorage.getItem("@burguer-token")
    useEffect(() => {
        api.get("/products", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(({ data }) => setCard(data))
            .catch((error) => console.log(error));
    }, [card]);
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
                card,
                setCart,
                search,
                setSearch,
                filter,
                token
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

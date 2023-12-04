"use client";
import {Sheet, SheetTrigger} from "@/components/ui/sheet";
import {ShoppingCart} from "lucide-react";

const Cart = () => {
return(
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-slate-400 group-hover:text-slate-500" />
            <span className="text-sm ml-2 font-medium text-slate-700 group-hover:text-slate-800"></span>
        </SheetTrigger>
    </Sheet>
);
}

export default Cart;
"use client";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {ShoppingCart} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {formatPrice} from "@/lib/utils";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import Image from "next/image";

const Cart = () => {
    const itemCount = 0;
    const fee = 1;
return(
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-slate-400 group-hover:text-slate-500" />
            <span className="text-sm ml-2 font-medium text-slate-700 group-hover:text-slate-800">0</span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:mx-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle>Cart ({itemCount})</SheetTitle>
            </SheetHeader>
            {
                itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            {/*TODO: Cart Items Logic*/}
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span className=""> Free!</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Transaction Fee</span>
                                    <span className="">{formatPrice(fee)}</span>
                                </div>

                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span className="">{formatPrice(fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href="/cart" className={buttonVariants({className:"w-full"})}>
                                        Continue To Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                    )
                    :
                    (
                        <div className="flex h-full flex-col items-center justify-center space-y-1">
                            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                                <Image src="/hippo-empty-cart.png" alt="cart empty"
                                    fill
                                />
                            </div>
                            <div className="text-xl font-semibold">
                                Your Cart is Empty!
                            </div>
                            <SheetTrigger asChild>
                                <Link href="/products"
                                      className={buttonVariants({
                                          variant: "link",
                                          size:"sm",
                                          className:"text-sm text-muted-foreground"
                                      })}>
                                    Add New Products To Checkout
                                </Link>
                            </SheetTrigger>
                        </div>
                    )
            }
        </SheetContent>
    </Sheet>
);
}

export default Cart;
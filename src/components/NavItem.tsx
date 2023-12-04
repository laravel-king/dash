"use client"
import {Button} from "@/components/ui/button";
import {PRODUCT_CATEGORIES} from "@/config";
import {ChevronDown} from "lucide-react";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
    category: Category,
    handleOpen: () => void,
    close: () => void,
    isOpen: boolean,
    isAnyOpen: boolean,
}

const NavItem = ({category, handleOpen, isOpen, isAnyOpen}: NavItemProps) => {
    return (
        <div className="flex">

            <div className="relative flex items-center">
                <Button className="gap-1.5" onClick={handleOpen} variant={isOpen ? "secondary" : "ghost"}>
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
                        "-rotate-180" : isOpen
                    })} />
                    {category.label}
                </Button>
            </div>

            {isOpen ?(
                <div onClick={() => close()} className={cn("absolute inset-x-0 text-muted-foreground top-full text-sm",
                    {
                        "animate-in fade-in-10 slide-in-from-top-5" : !isAnyOpen,
                    }
                )}>
                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                    <div className="bg-white relative">
                        <div className="mx-auto w-full max-w-7xl px-8">
                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                                    {category.featured.map((item, index) => (
                                        <div onClick={() => close} key={item.name} className="group relative text-base sm:text-sm">
                                            <div className="relative overflow-hidden aspect-video rounded-lg bg-gray-50 group-hover:opacity-75">
                                                <Image src={item.imageSrc} alt={item.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill className="object-cover object-center" />
                                            </div>

                                            <Link href={item.href} className="mt-6 block font-medium text-gray-900">{item.name}</Link>
                                            <p className="mt-1" aria-hidden="true">Shop Now !</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ): null
            }

        </div>
    );
}

export default NavItem;
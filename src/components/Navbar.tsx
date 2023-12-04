import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Icons} from "@/components/Icons";
import NavItems from "@/components/NavItems";
import {buttonVariants} from "@/components/ui/button";
import Cart from "@/components/Cart";

const Navbar = () => {
    const user = null;
return (
    <>
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="bg-white relative">
                <MaxWidthWrapper>
                    <div className="border-b border-slate-200">
                        <div className="flex h-16 items-center">
                            {/* TODO: mobile navbar */}

                            <div className="ml-4 lg:ml-0 flex">
                                <Link href="/" >
                                    <Icons.logo className="w-10 h-10" />
                                </Link>
                            </div>

                            <div className="hidden lg:block z-50 lg:ml-8 lg:self-stretch">
                                <NavItems />
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : (
                                        <Link href="/sign-in" className={buttonVariants({variant:"ghost"})}>Sign In</Link>
                                    )}
                                    {user ? null :(<span className="h-6 w-px bg-slate-200" aria-hidden="true" />)}

                                    {user ? <p></p> : <Link href="/sign-up" className={buttonVariants({variant: "default"})}>Create an account</Link> }

                                    {user ? null :(<span className="h-6 w-px bg-slate-200" aria-hidden="true" />)}

                                    {user ? null : (
                                        <div className="flex lg:ml-6">
                                            <span className="h-6 w-px bg-slate-200" aria-hidden="true" />
                                        </div>
                                    )}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    </>
);
}

export default Navbar;
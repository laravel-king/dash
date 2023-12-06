"use client"
import {Icons} from "@/components/Icons";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthCredentialsValidator} from "@/lib/validators/account-credentials-validator";
import {typeAuthCredentialsValidator} from "@/lib/validators/account-credentials-validator";
const Page = ()=>{

    const {register,
        handleSubmit,
        formState:{errors}
        } = useForm<typeAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const onSubmit = ({username, email, password}:typeAuthCredentialsValidator)=>{

    }

    return (
        <>
            <div className="container flex relative pt-16 flex-col items-center justify-center lg:px-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[390px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="w-20 h-20" />
                        <h1 className="text-2xl font-bold">Create an account</h1>
                        <span className="text-slate-800">
                            Already have an account?
                            <Link className={buttonVariants({variant: "link", className:'group'})} href="/sign-in">
                                Click Here to sign in
                                <ArrowRight className="mx-0.5 w-4 h-4 group-hover:translate-x-1.5 duration-300 ease-in-out transition-all" />
                            </Link>
                        </span>
                    </div>

                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="name">Username</Label>
                                    <Input
                                        {...register("username")}
                                        className={cn({'focus-visible:ring-red-500': errors.username})} placeholder="John Doe" />
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        {...register("email")}
                                        className={cn({'focus-visible:ring-red-500': errors.email})} placeholder="example@mail.com" />
                                </div>

                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        {...register("password")}
                                        className={cn({'focus-visible:ring-red-500': errors.password})} placeholder="password" />
                                </div>

                                <Button>Register For Free</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
"use client"
import { useForm } from "@tanstack/react-form"
import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { LoginSchema } from "@/schemas"

export const LoginForm = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators:{
            onSubmit: LoginSchema
        },
        onSubmit: ({ value }) => { console.log("Submitted values:", value)},
    })

    return (
        <CardWrapper headerLabel="Welcome back" backButtonLabel="Don't have an account?" backButtonHref="/auth/register" showSocial>
            <form onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }} className="space-y-6">
                <div className="space-y-4">
                    <form.Field name="email"
                        children={({state, handleChange, handleBlur}) => (
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input 
                                value={state.value}
                                onChange={(e) => handleChange(e.target.value)}
                                onBlur={handleBlur}
                                placeholder="Enter email" className="w-full h-10"/>
                                {state.meta.errors.length > 0 && (<p className="text-sm text-red-500 pl-1">{state.meta.errors[0]?.message}</p>)}
                            </div>
                        )}
                        />
                    
                    <form.Field name="password"
                        children={({state, handleChange, handleBlur }) => (
                            <div className="space-y-2">
                                <Label>Password</Label>
                                <Input
                                type="password"
                                value={state.value}
                                onChange={(e) => handleChange(e.target.value)}
                                onBlur={handleBlur}
                                placeholder="Enter password" className="w-full h-10"/>
                                {state.meta.errors.length > 0 && (<p className="text-sm text-red-500 pl-1">{state.meta.errors[0]?.message}</p>)}
                            </div>
                        )}
                        />
                </div>
                <Button type="submit" className="w-full">Sign in</Button>
            </form>
        </CardWrapper>
    )
}
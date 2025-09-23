"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "../ui/button"


export const Social = () => {
    return (
        <section className="w-full flex items-center justify-center gap-2">
            <Button size='lg' variant='outline' className="w-1/2">
               <FcGoogle/>
            </Button>
            <Button size='lg' variant='outline' className="w-1/2">
                <FaGithub/>
            </Button>
        </section>
    )   
}
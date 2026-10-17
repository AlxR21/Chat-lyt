import { UserButton } from "@clerk/nextjs"
import {ModeToggle} from "../components/ui/mode-toggle"

export default function Home() {
  return (
    <div>
    <h1 className="">Hello WOrld</h1>  ;
    <ModeToggle></ModeToggle>
    <UserButton/>
    </div>)
}

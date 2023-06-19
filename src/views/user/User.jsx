import Loading from "../../components/loading"
import { useUser } from "../../hooks/useUser"
import Calories from "./components/calories"

export default function User () {
  const { user, isLoading } = useUser()

  return (
    <main className="min-h-screen p-5 md:p-20">
      {
        isLoading ? <Loading /> :(
          <div className="flex flex-col gap-10 items-center">
            <h1 className="text-3xl font-bold text-[#324baa]">Welcome {user.fields.username}</h1>

            <Calories calories={user.fields.totalCalories} />
          </div>
        )
      }
    </main>
  )
}
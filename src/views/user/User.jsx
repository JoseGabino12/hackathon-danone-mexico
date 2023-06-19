import Loading from "../../components/loading"
import { useUser } from "../../hooks/useUser"

export default function User () {
  const { user, isLoading } = useUser()

  return (
    <main className="min-h-screen p-20">
      {
        isLoading ? <Loading /> :(
          <div>
            <h1>{user.fields.username}</h1>
            <h1>{user.fields.totalCalories}</h1>
          </div>
        )
      }
    </main>
  )
}
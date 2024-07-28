import { FC } from "react"

type NotificationProps = {
  notification: string
  isError?: boolean
}

const Notification: FC<NotificationProps> = ({ notification, isError }) => (
  <div className={`text-center mt-10 ${isError ? "text-red-500" : ""}`}>{notification}</div>
)

export default Notification

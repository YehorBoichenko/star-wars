import { FC } from "react"

/**
 * Props for the `Notification` component.
 * 
 * @property {string} notification - The notification message to be displayed.
 * @property {boolean} [isError=false] - Optional flag to indicate if the notification is an error message. Defaults to `false`.
 */
type NotificationProps = {
  notification: string
  isError?: boolean
}

/**
 * A functional component that displays a notification message.
 * 
 * This component renders a `div` with a notification message. If the `isError` prop is `true`, 
 * the text color will be red to indicate an error message.
 * 
 * @param {NotificationProps} props - The props object for the component.
 * @returns {JSX.Element} The rendered notification message.
 * 
 * @example
 * // Renders a success notification
 * <Notification notification="Operation was successful!" />
 * 
 * @example
 * // Renders an error notification with red text
 * <Notification notification="An error occurred!" isError={true} />
 */
const Notification: FC<NotificationProps> = ({ notification, isError }) => (
  <div className={`text-center mt-10 ${isError ? "text-red-500" : ""}`}>{notification}</div>
)

export default Notification
